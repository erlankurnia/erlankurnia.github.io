<template>
	<header class="absolute top-0 left-0 z-10 flex items-center w-full bg-transparent select-none">
		<div class="container">
			<div class="relative flex items-center justify-between">
				<div class="px-4">
					<a href="/" class="block py-6 text-2xl font-extrabold tracking-[.2em] text-primary">
						<!-- <span class="opacity-20 text-dark">nal</span> -->
						LAN</a
					>
				</div>
				<div class="flex items-center p-4">
					<button
						id="hamburger"
						name="hamburger"
						type="button"
						class="absolute block transition duration-300 ease-in-out right-4 xl:hidden"
						:class="{ 'lan-hamburger-active': isHamburgerOpen }"
						@click="onHamburgerClick"
					>
						<span class="origin-top-right lan-hamburger-line"></span>
						<span class="lan-hamburger-line"></span>
						<span class="origin-bottom-right lan-hamburger-line"></span>
					</button>

					<nav
						id="nav-menu"
						class="absolute origin-top scale-y-0 py-5 bg-bgPrimary shadow-lg rounded-lg max-w-[200px] w-full top-full right-4 transition duration-300 xl:origin-center xl:scale-y-100 xl:block xl:static xl:bg-transparent xl:max-w-full xl:shadow-none xl:rounded-none"
						:class="{
							// 'hidden': !isHamburgerOpen,
							'scale-y-100': isHamburgerOpen,
						}"
					>
						<ul class="block xl:flex">
							<li class="group">
								<a href="#home" class="lan-nav-link">Home</a>
							</li>
							<li class="group">
								<a href="#about" class="lan-nav-link">About</a>
							</li>
							<li class="group">
								<a href="#story" class="lan-nav-link">My_History</a>
							</li>
							<li class="group">
								<a href="#skills" class="lan-nav-link">Skills</a>
							</li>
							<li class="group">
								<a href="#contact" class="lan-nav-link">Contact</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import { ref } from "vue";

export default {
	name: "HeaderComponent",
	setup() {
		const isHamburgerOpen = ref(false);

		// On scrolling event to create sticky navbar
		const onScroll = () => {
			const header = document.querySelector("header");
			const fixedNav = header.offsetTop;
			const backToTop = document.querySelector("#back-to-top");

			if (window.scrollY > fixedNav) {
				header.classList.add("lan-navbar-fixed");
				if (backToTop) {
					backToTop.classList.remove("hidden");
					backToTop.classList.add("flex");
				}
			} else {
				header.classList.remove("lan-navbar-fixed");
				if (backToTop) {
					backToTop.classList.remove("flex");
					backToTop.classList.add("hidden");
				}
			}
		};
		window.onscroll = onScroll;
		// On scrolling event to create sticky navbar

		// On click outside nav menu
		const onOutsideMenu = (e) => {
			console.log(e.target.id);

			if (e.target.id != "hamburger" && e.target.id != "nav-menu") {
				isHamburgerOpen.value = false;
			}
		};
		window.addEventListener("click", onOutsideMenu);
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
