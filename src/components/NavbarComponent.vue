<template>
	<header class="absolute top-0 left-0 z-10 flex items-center w-full bg-transparent">
		<div class="container">
			<div class="relative flex items-center justify-between">
				<div class="px-4">
					<a href="/" class="block py-6 text-2xl font-extrabold tracking-[.2em] text-primary">LAN</a>
				</div>
				<div class="flex items-center p-4">
					<button
						id="hamburger"
						name="hamburger"
						type="button"
						class="absolute block transition duration-300 ease-in-out right-4 lg:hidden"
						:class="{ 'hamburger-active': isHamburgerOpen }"
						@click="onHamburgerClick"
					>
						<span class="origin-top-right hamburger-line"></span>
						<span class="hamburger-line"></span>
						<span class="origin-bottom-right hamburger-line"></span>
					</button>

					<nav
						id="nav-menu"
						class="absolute origin-top scale-y-0 py-5 bg-bgPrimary shadow-lg rounded-lg max-w-[200px] w-full top-full right-4 transition duration-300 lg:origin-center lg:scale-y-100 lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
						:class="{
							// 'hidden': !isHamburgerOpen,
							'scale-y-100': isHamburgerOpen,
						}"
					>
						<ul class="block lg:flex">
							<li class="group">
								<RouterLink to="/#home" class="nav-link">Home</RouterLink>
							</li>
							<li class="group">
								<RouterLink to="/#about" class="nav-link">About</RouterLink>
							</li>
							<li class="group">
								<RouterLink to="/#portfolio" class="nav-link">Portfolio</RouterLink>
							</li>
							<li class="group">
								<RouterLink to="/#skills" class="nav-link">Skills</RouterLink>
							</li>
							<li class="group">
								<RouterLink to="/#contact" class="nav-link">Contact</RouterLink>
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
	data() {
		return {
			isHamburgerOpen: ref(false),
		};
	},
	setup() {
		function onScroll() {
			const header = document.querySelector("header");
			const fixedNav = header.offsetTop;

			if (window.scrollY > fixedNav) {
				header.classList.add("navbar-fixed");
			} else {
				header.classList.remove("navbar-fixed");
			}
		}
		window.onscroll = onScroll;
	},
	methods: {
		onHamburgerClick() {
			this.isHamburgerOpen = !this.isHamburgerOpen;
		},
	},
};
</script>
