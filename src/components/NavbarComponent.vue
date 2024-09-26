<template>
	<header id="navbar-menu" class="absolute top-0 left-0 z-10 flex items-center w-full bg-transparent select-none">
		<div class="container px-4">
			<nav class="flex items-center justify-between">
				<div class="px-2 sm:px-4">
					<RouterLink to="/"
						class="block py-6 text-2xl sm:text-3xl font-extrabold tracking-[.1em] text-primary">LAN
						<!-- <img :src="'/img/logo/violet-white/Logo Fusion nobg@2x.webp'" alt="Logo Erlan" class="w-auto h-8"> -->
					</RouterLink>
				</div>
				<div id="nav-menu-area" class="relative h-20 w-full z-[9999]">
					<!-- Navbar Menu -->
					<nav id="nav-menu"
						class="absolute right-0 w-auto h-auto py-1 pl-2 -ml-16 transition duration-300 ease-in-out delay-100 origin-top-right scale-x-0 2xs:pr-2 top-4 max-2xs:pr-12 bg-tertiary rounded-3xl"
						:class="{
							'-translate-x-4 2xs:flex 2xs:scale-x-100 2xs:shadow-lg': $route.meta.hideNavbar || !isHamburgerOpen,
							'flex flex-wrap shadow-lg scale-x-100': isHamburgerOpen,
						}">
						<ul class="flex flex-wrap w-full justify-evenly">
							<li class="group">
								<RouterLink v-if="$route.meta.url?.about" :to="$route.meta.url.about"
									class="lan-nav-link max-w-max max-xs:mx-2 sm:mx-3" :class="{
										'text-primary font-bold': $route.name == 'who_iam',
									}">WHO_I'M</RouterLink>
							</li>
							<li class="group">
								<RouterLink v-if="$route.meta.url?.notes" :to="$route.meta.url.notes"
									class="lan-nav-link max-w-max max-xs:mx-2 sm:mx-3" :class="{
										'text-primary font-bold': $route.name == 'notes',
									}">Notes</RouterLink>
							</li>
						</ul>
					</nav>
					<!-- Navbar Menu -->

					<!-- Toggle Menu Button -->
					<div id="hamburger-area"
						class="absolute right-0 w-12 h-12 px-3 py-[9px] cursor-pointer top-4 bg-tertiary rounded-3xl 2xs:hidden"
						:class="{
							hidden: $route.meta.hideNavbar,
							fixed: !$route.meta.hideNavbar,
						}" @click="toggleHamburger">
						<div id="hamburger" class="transition-all duration-300 ease-in-out" :class="{
							'lan-hamburger-active translate-x-1': isHamburgerOpen,
						}">
							<span class="origin-top-right lan-hamburger-line"></span>
							<span class="lan-hamburger-line"></span>
							<span class="origin-bottom-right lan-hamburger-line"></span>
						</div>
					</div>
					<!-- Toggle Menu Button -->
				</div>
			</nav>
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
