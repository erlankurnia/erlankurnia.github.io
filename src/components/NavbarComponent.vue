<template>
	<header id="navbar-menu" class="absolute top-0 left-0 z-10 flex items-center w-full bg-transparent select-none">
		<div class="container px-4">
			<div class="flex items-center justify-between">
				<!-- <div class="relative flex items-center justify-between"> -->
				<div class="px-2 sm:px-4">
					<RouterLink to="/" class="block py-6 text-xl sm:text-2xl font-extrabold tracking-[.2em] text-primary">LAN</RouterLink>
				</div>
				<div id="nav-menu-area" class="relative h-20 w-full z-[9999]">
					<!-- Navbar Menu -->
					<nav
						id="nav-menu"
						class="absolute right-0 w-auto h-auto py-1 pl-2 -ml-16 transition duration-300 ease-in-out delay-100 origin-top-right scale-x-0 2xs:pr-2 top-4 max-2xs:pr-12 bg-tertiary rounded-3xl"
						:class="{
							'-translate-x-4 2xs:flex 2xs:scale-x-100 2xs:shadow-lg': $route.meta.hideNavbar || !isHamburgerOpen,
							'flex flex-wrap shadow-lg scale-x-100': isHamburgerOpen,
						}"
					>
						<ul class="flex flex-wrap w-full justify-evenly">
							<!-- <li class="group">
								<RouterLink to="/" class="lan-nav-link max-w-max max-sm:mx-1 sm:mx-3">Home</RouterLink>
							</li> -->
							<li class="group">
								<RouterLink
									to="/who_iam"
									class="lan-nav-link max-w-max max-xs:mx-2 sm:mx-3"
									:class="{
										'text-primary font-bold': $route.name == 'who_iam',
									}"
									>WHO_I'M</RouterLink
								>
							</li>
							<!-- <li class="group">
								<RouterLink
									to="/activity"
									class="lan-nav-link max-w-max max-xs:mx-2 sm:mx-3"
									:class="{
										'text-primary font-bold': $route.name == 'activity',
									}"
									>Activity</RouterLink
								>
							</li> -->
							<li class="group">
								<RouterLink
									to="/blog"
									class="lan-nav-link max-w-max max-xs:mx-2 sm:mx-3"
									:class="{
										'text-primary font-bold': $route.name == 'blog',
									}"
									>Blog</RouterLink
								>
							</li>
						</ul>
					</nav>
					<!-- Navbar Menu -->

					<!-- Toggle Menu Button -->
					<div
						id="hamburger-area"
						class="absolute right-0 w-12 h-12 px-3 py-[9px] cursor-pointer top-4 bg-tertiary rounded-3xl 2xs:hidden"
						:class="{
							hidden: $route.meta.hideNavbar,
							fixed: !$route.meta.hideNavbar,
						}"
						@click="toggleHamburger"
					>
						<div
							id="hamburger"
							class="transition-all duration-300 ease-in-out"
							:class="{
								'lan-hamburger-active translate-x-1': isHamburgerOpen,
							}"
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
		//#region On scrolling event to create sticky navbar
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
		//#endregion On scrolling event to create sticky navbar

		//#region On click outside nav menu
		const isHamburgerOpen = ref(false);
		const preventHamburger = ref(false);
		const onOutsideMenu = (e) => {
			if (e.target.id != "hamburger" && e.target.id != "nav-menu-area" && e.target.id != "hamburger-area") {
				setTimeout(() => {
					preventHamburger.value = false;
					isHamburgerOpen.value = false;
				}, 100);
			}
		};
		window.addEventListener("click", onOutsideMenu);
		window.addEventListener("touchend", onOutsideMenu);
		//#endregion On click outside nav menu

		return { isHamburgerOpen };
	},
	methods: {
		toggleHamburger: function () {
			if (!this.preventHamburger) {
				this.isHamburgerOpen = !this.isHamburgerOpen;
				setTimeout(() => {
					this.preventHamburger = false;
				}, 500);
			}
			this.preventHamburger = true;
		},
	},
};
</script>
