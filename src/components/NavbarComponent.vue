<template>
	<header class="absolute top-0 left-0 z-10 flex items-center w-full bg-transparent">
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
						:class="{ 'hamburger-active': isHamburgerOpen }"
						@click="onHamburgerClick"
					>
						<span class="origin-top-right hamburger-line"></span>
						<span class="hamburger-line"></span>
						<span class="origin-bottom-right hamburger-line"></span>
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
								<a href="#home" class="nav-link">Home</a>
							</li>
							<li class="group">
								<a href="#about" class="nav-link">About</a>
							</li>
							<li class="group">
								<a href="#portfolio" class="nav-link">Portfolio</a>
							</li>
							<li class="group">
								<a href="#skills" class="nav-link">Skills</a>
							</li>
							<li class="group">
								<a href="#contact" class="nav-link">Contact</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
	name: "HeaderComponent",
	data() {
		return {
			isHamburgerOpen: ref(false),
		};
	},
	setup() {
		// On scrolling event to create sticky navbar
		const onScroll = () => {
			const header = document.querySelector("header");
			const fixedNav = header.offsetTop;

			if (window.scrollY > fixedNav) {
				header.classList.add("navbar-fixed");
			} else {
				header.classList.remove("navbar-fixed");
			}
		};
		window.onscroll = onScroll;
		// On scrolling event to create sticky navbar

		// // Swapping animation
		// const texts = ["nal", "LAN"];
		// const title = ref(texts[0]);
		// let index = 0,
		// 	textIndex = 0;

		// const animate = () => {
		// 	title.value = texts[textIndex].slice(0, index + 1) + texts[1 - textIndex].slice(index + 1);
		// 	index = (index + 1) % texts[0].length;
		// 	if (index === 0) {
		// 		textIndex = 1 - textIndex;
		// 		setTimeout(animate, 4000);
		// 	} else {
		// 		setTimeout(animate, 500);
		// 	}
		// };

		// onMounted(animate);
		// // Swapping animation

		// return { title };
	},
	methods: {
		onHamburgerClick() {
			this.isHamburgerOpen = !this.isHamburgerOpen;
		},
	},
};
</script>
