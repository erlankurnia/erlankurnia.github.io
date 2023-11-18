<template>
	<header id="navbar-menu" class="absolute top-0 left-0 z-10 flex items-center w-full bg-transparent select-none">
		<div class="container">
			<div class="flex items-center justify-between">
				<!-- <div class="relative flex items-center justify-between"> -->
				<div class="px-4">
					<RouterLink to="/" class="block py-6 text-2xl font-extrabold tracking-[.2em] text-primary">LAN</RouterLink>
				</div>
				<div class="relative h-20 w-full z-[9999]">
					<!-- Navbar Menu -->
					<nav
						id="nav-menu"
						class="absolute right-0 w-auto h-auto py-1 pl-2 -ml-16 transition duration-300 ease-in-out origin-top-right scale-x-0 top-4 max-lg:pr-12 bg-tertiary rounded-3xl"
						:class="{
							'-translate-x-4 xl:flex xl:scale-x-100 xl:shadow-lg': $route.meta.hideNavbar || !isHamburgerOpen,
							'flex flex-wrap shadow-lg scale-x-100': isHamburgerOpen,
						}"
					>
						<ul class="flex flex-wrap w-full justify-evenly">
							<li class="group">
								<RouterLink to="/" class="lan-nav-link max-w-max max-lg:mx-2">Home</RouterLink>
							</li>
							<li class="group">
								<RouterLink to="/about" class="lan-nav-link max-w-max max-lg:mx-2">WHO_I'M</RouterLink>
							</li>
							<li class="group">
								<RouterLink to="/activity" class="lan-nav-link max-w-max max-lg:mx-2">Activity</RouterLink>
							</li>
							<li class="group">
								<RouterLink to="/blog" class="lan-nav-link max-w-max max-lg:mx-2">Blog</RouterLink>
							</li>
						</ul>
					</nav>
					<!-- Navbar Menu -->

					<!-- Toggle Menu Button -->
					<div
						class="absolute right-0 w-12 h-12 px-3 py-2 cursor-pointer top-4 bg-tertiary rounded-3xl xl:hidden"
						:class="{
							hidden: $route.meta.hideNavbar,
							fixed: !$route.meta.hideNavbar,
						}"
					>
						<div
							id="hamburger"
							name="hamburger"
							type="button"
							class="transition-all duration-300 ease-in-out"
							:class="{
								'lan-hamburger-active translate-x-1': isHamburgerOpen,
							}"
							@click="onHamburgerClick"
						>
							<span class="origin-top-right lan-hamburger-line"></span>
							<span class="lan-hamburger-line"></span>
							<span class="origin-bottom-right lan-hamburger-line"></span>
						</div>
					</div>
					<!-- Toggle Menu Button -->
				</div>

				<!-- <div class="flex items-center p-4">
					<button
						id="hamburger"
						name="hamburger"
						type="button"
						class="absolute transition duration-300 ease-in-out right-4 xl:hidden"
						:class="{
							'lan-hamburger-active': isHamburgerOpen,
							'hidden': $route.meta.hideNavbar,
							'block': !$route.meta.hideNavbar,
						}"
						@click="onHamburgerClick"
					>
						<span class="origin-top-right lan-hamburger-line"></span>
						<span class="lan-hamburger-line"></span>
						<span class="origin-bottom-right lan-hamburger-line"></span>
					</button>

					<nav
						id="nav-menu"
						class="absolute origin-top scale-y-0 py-5 bg-tertiary shadow-lg rounded-lg max-w-[200px] w-full top-full right-4 transition duration-300 xl:origin-center xl:scale-y-100 xl:block xl:static xl:bg-transparent xl:max-w-full xl:shadow-none xl:rounded-none"
						:class="{
							'scale-y-100': isHamburgerOpen,
						}"
					>
						<ul
							:class="{
								'hidden': $route.meta.hideNavbar,
								'block': !$route.meta.hideNavbar,
								'xl:flex': !$route.meta.hideNavbar,
							}"
						>
							<li class="group">
								<RouterLink to="/" class="lan-nav-link">Home</RouterLink>
							</li>
							<li class="group">
								<RouterLink to="/about" class="lan-nav-link">About</RouterLink>
							</li>
							<li class="group">
								<RouterLink to="/skills" class="lan-nav-link">Skills</RouterLink>
							</li>
							<li class="group">
								<RouterLink to="/blog" class="lan-nav-link">Blog</RouterLink>
							</li>
						</ul>
					</nav>
				</div> -->
			</div>
		</div>
	</header>
</template>

<script>
import { ref } from "vue";
export default {
	name: "HeaderComponent",
	setup() {
		// On scrolling event to create sticky navbar
		const onScroll = () => {
			const header = document.querySelector("#navbar-menu");
			const fixedNav = header.offsetTop;
			const backToTop = document.querySelector("#back-to-top");
			if (window.scrollY > fixedNav) {
				header.classList.add("lan-navbar-fixed");
				// header.classList.remove("absolute");
				if (backToTop) {
					backToTop.classList.remove("hidden");
					backToTop.classList.add("flex");
				}
			} else {
				header.classList.remove("lan-navbar-fixed");
				// header.classList.add("absolute");
				if (backToTop) {
					backToTop.classList.remove("flex");
					backToTop.classList.add("hidden");
				}
			}
		};
		window.addEventListener("scroll", onScroll);
		// On scrolling event to create sticky navbar

		// On click outside nav menu
		const isHamburgerOpen = ref(false);
		const onOutsideMenu = (e) => {
			if (e.target.id != "hamburger" && e.target.id != "nav-menu") {
				setTimeout(() => {
					isHamburgerOpen.value = false;
				}, 100);
			}
		};
		window.addEventListener("click", onOutsideMenu);
		window.addEventListener("touchstart", onOutsideMenu);
		// On click outside nav menu

		return { isHamburgerOpen };
	},
	methods: {
		onHamburgerClick() {
			this.isHamburgerOpen = !this.isHamburgerOpen;
		},
	},
};
</script>
