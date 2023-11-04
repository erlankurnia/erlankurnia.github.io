<template>
	<header id="navbar-menu" class="absolute top-0 left-0 z-10 flex items-center w-full bg-transparent select-none">
		<div class="container">
			<div class="relative flex items-center justify-between">
				<div class="px-4">
					<RouterLink to="/" class="block py-6 text-2xl font-extrabold tracking-[.2em] text-primary">LAN</RouterLink>
				</div>
				<div class="flex items-center p-4">
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
							// 'hidden': !isHamburgerOpen,
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
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import { ref, inject, watchEffect } from "vue";
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
				header.classList.remove("absolute");
				if (backToTop) {
					backToTop.classList.remove("hidden");
					backToTop.classList.add("flex");
				}
			} else {
				header.classList.remove("lan-navbar-fixed");
				header.classList.add("absolute");
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

		let dataUser = ref(inject("dataUser"));
		// watchEffect(() => {
		// 	dataUser.value = inject("dataUser");
		// 	console.log(dataUser);
		// });

		return { isHamburgerOpen, dataUser };
	},
	methods: {
		onHamburgerClick() {
			this.isHamburgerOpen = !this.isHamburgerOpen;
		},
	},
};
</script>
