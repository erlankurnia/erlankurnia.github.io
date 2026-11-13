<script setup lang="ts">
import ToggleDarkModeComponent from "@/components/ToggleDarkModeComponent.vue";

//#region On scrolling event to create sticky navbar
const onScroll = () => {
	const header = document.querySelector("#navbar-menu") as HTMLElement;
	const fixedNav = header?.offsetTop ?? 0;
	const backToTop = document.querySelector("#scroll-up") as HTMLElement;
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
</script>

<template>
	<header id="navbar-menu" class="fixed top-0 left-0 z-100 flex items-center w-full bg-transparent select-none">
		<div class="container px-4">
			<nav class="flex items-center justify-between">
				<div class="px-2 sm:px-4">
					<RouterLink to="/"
						class="block py-6 text-2xl sm:text-3xl font-extrabold tracking-[.1em] text-primary dark:text-primaryDark">
						<p class="flex flex-row items-center w-auto h-full gap-2 align-middle" translate="no">
							<img :src="'https://cdn.erlankurnia.laness.id/img/logo/light/128_nobg.webp'" alt="Logo Erlan" class="w-auto h-7 dark:hidden">
							<img :src="'https://cdn.erlankurnia.laness.id/img/logo/dark/128_nobg.webp'" alt="Logo Erlan" class="w-auto h-7 hidden dark:block">
						</p>
					</RouterLink>
				</div>
				<div id="nav-menu-area" class="relative h-20 w-full z-9999">
					<!-- Navbar Menu -->
					<nav id="nav-menu"
						class="absolute right-0 w-auto h-auto py-1 pl-2 -ml-16 transition duration-300 ease-in-out delay-100 origin-top-right 2xs:pr-2 top-4 max-2xs:pr-12 bg-tertiary dark:bg-tertiaryDark rounded-3xl"
						:class="{
							'-translate-x-4 2xs:flex 2xs:shadow-lg': $route.meta.hideNavbar,
						}">
						<ul class="flex flex-wrap w-full justify-evenly">
							<li class="group">
								<RouterLink v-if="$route.meta.url?.about" :to="$route.meta.url.about"
									class="lan-nav-link max-w-max max-xs:mx-2 sm:mx-3" :class="{
										'text-primary dark:text-primaryDark font-bold scale-110': $route.name == 'who_iam',
									}" translate="no">WHO_I'M</RouterLink>
							</li>
							<li class="group">
								<a v-if="$route.meta.url?.notes" :href="$route.meta.url.notes"
									class="lan-nav-link max-w-max max-xs:mx-2 sm:mx-3" :class="{
										'text-primary dark:text-primaryDark font-bold scale-110': $route.name == 'notes',
									}" translate="no">Notes</a>
								<!-- <RouterLink v-if="$route.meta.url?.notes" :to="$route.meta.url.notes"
									class="lan-nav-link max-w-max max-xs:mx-2 sm:mx-3" :class="{
										'text-primary dark:text-primaryDark font-bold scale-110': $route.name == 'notes',
									}" translate="no">Notes</RouterLink> -->
							</li>
							<li>
								<ToggleDarkModeComponent class="block my-1 size-8"></ToggleDarkModeComponent>
							</li>
						</ul>
					</nav>
					<!-- Navbar Menu -->
				</div>
			</nav>
		</div>
	</header>
</template>
