<template>
	<header id="navbar-menu" class="absolute top-0 left-0 z-10 flex items-center w-full bg-transparent select-none">
		<div class="container px-4">
			<nav class="flex items-center justify-between">
				<div class="px-2 sm:px-4">
					<RouterLink to="/"
						class="block py-6 text-2xl sm:text-3xl font-extrabold tracking-[.1em] text-primary dark:text-primaryDark">
						<p class="flex flex-row items-center w-auto h-full gap-2 align-middle">
							<!-- <img :src="'/img/logo/Logo Only/Logo_only_logo.webp'" alt="Logo Erlan" class="w-auto h-7"> -->
							<span class="size-7 text-primary dark:text-primaryDark">
								<svg class="size-full" viewBox="0 0 400.01 400.009" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<title>Logo LAN</title>
									<g id="Logo LAN">
										<g id="Logo">
											<path id="Shape"
												d="M59.0162 0L10 0C4.4764 0 0 4.4764 0 10L0 317.878C0 323.402 4.4764 327.878 10 327.878L317.878 327.878C323.401 327.878 327.878 323.402 327.878 317.878L327.878 268.862L69.0162 268.862C63.4926 268.862 59.0162 264.385 59.0162 258.862L59.0162 0Z"
												fill="currentColor" fill-rule="evenodd"
												transform="translate(0 72.131)" />
											<path id="Shape"
												d="M59.0163 0L10 0C4.47641 0 0 4.47641 0 10L3.05176e-05 317.878C3.05176e-05 323.401 4.47644 327.878 10 327.878L317.878 327.878C323.401 327.878 327.878 323.401 327.878 317.878L327.878 268.861L69.0163 268.861C63.4927 268.861 59.0163 264.385 59.0163 258.861L59.0163 0Z"
												fill="currentColor" fill-rule="evenodd"
												transform="matrix(-1 0 -0 -1 400.01 327.878)" />
											<path id="Rectangle"
												d="M229.704 0C234.123 0 237.704 3.58112 237.704 8L237.704 57.5738C237.704 61.9927 234.123 65.5738 229.704 65.5738L8 65.5738C3.58112 65.5738 0 61.9927 0 57.5738L0 8C0 3.58112 3.58112 0 8 0L229.704 0Z"
												fill="currentColor" transform="translate(81.967 167.213)" />
										</g>
									</g>
								</svg>
							</span>
							LAN
						</p>
					</RouterLink>
				</div>
				<div id="nav-menu-area" class="relative h-20 w-full z-[9999]">
					<!-- Navbar Menu -->
					<nav id="nav-menu"
						class="absolute right-0 w-auto h-auto py-1 pl-2 -ml-16 transition duration-300 ease-in-out delay-100 origin-top-right scale-x-0 2xs:pr-2 top-4 max-2xs:pr-12 bg-tertiary dark:bg-tertiaryDark rounded-3xl"
						:class="{
							'-translate-x-4 2xs:flex 2xs:scale-x-100 2xs:shadow-lg': $route.meta.hideNavbar || !isHamburgerOpen,
							'flex flex-wrap shadow-lg scale-x-100': isHamburgerOpen,
						}">
						<ul class="flex flex-wrap w-full justify-evenly">
							<li class="group">
								<RouterLink v-if="$route.meta.url?.about" :to="$route.meta.url.about"
									class="lan-nav-link max-w-max max-xs:mx-2 sm:mx-3" :class="{
										'text-primary dark:text-primaryDark font-bold scale-110': $route.name == 'who_iam',
									}">WHO_I'M</RouterLink>
							</li>
							<li class="group">
								<RouterLink v-if="$route.meta.url?.notes" :to="$route.meta.url.notes"
									class="lan-nav-link max-w-max max-xs:mx-2 sm:mx-3" :class="{
										'text-primary dark:text-primaryDark font-bold scale-110': $route.name == 'notes',
									}">Notes</RouterLink>
							</li>
						</ul>
					</nav>
					<!-- Navbar Menu -->

					<!-- Toggle Menu Button -->
					<!-- <div id="hamburger-area"
						class="absolute right-0 w-12 h-12 px-3 py-[9px] cursor-pointer top-4 bg-tertiary dark:bg-tertiaryDark rounded-3xl 2xs:hidden"
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
					</div> -->
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
			const backToTop = document.querySelector("#scroll-up");
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
