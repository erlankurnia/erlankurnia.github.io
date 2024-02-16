<template>
	<div class="container w-full h-[2px] px-8">
		<div class="w-full h-full bg-quaternary"></div>
	</div>
	<footer class="py-16 select-none">
		<div class="container">
			<div class="flex flex-wrap md:flex-row-reverse">
				<div
					class="flex justify-center w-full align-middle md:justify-end md:w-1/2"
					:class="{
						hidden: $route.meta.hideNavbar,
					}"
				>
					<ul class="flex flex-wrap justify-center md:justify-end">
						<li class="flex items-center group">
							<a
								href="/"
								class="mx-2 text-sm lan-nav-link"
								:class="{
									'text-primary font-bold': $route.name == 'home',
								}"
								>Home</a
							>
						</li>
						<li class="flex items-center group">
							<RouterLink
								to="/who_iam"
								class="mx-2 text-sm lan-nav-link"
								:class="{
									'text-primary font-bold': $route.name == 'who_iam',
								}"
								>WHO_I'M</RouterLink
							>
						</li>
						<!-- <li class="flex items-center group">
							<RouterLink
								to="/activity"
								class="mx-2 text-sm lan-nav-link"
								:class="{
									'text-primary font-bold': $route.name == 'activity',
								}"
								>Activity</RouterLink
							>
						</li> -->
						<li class="flex items-center group">
							<RouterLink
								to="/blog"
								class="mx-2 text-sm lan-nav-link"
								:class="{
									'text-primary font-bold': $route.name == 'blog',
								}"
								>Blog</RouterLink
							>
						</li>
						<li class="flex items-center group">
							<RouterLink
								to="/references"
								class="mx-2 text-sm lan-nav-link"
								:class="{
									'text-primary font-bold': $route.name == 'references',
								}"
								>References</RouterLink
							>
						</li>
						<li class="flex items-center group">
							<a
								href="https://analytics.eu.umami.is/share/P9vSXDhPCyGTUoB2/LAN"
								target="_blank"
								class="mx-2 text-sm lan-nav-link"
							>
								Analytics <NewTabIcon class="h-4 ml-[2px] pt-1 w-auto"></NewTabIcon>
							</a>
						</li>
						<li class="flex items-center group">
							<a href="https://github.com/erlankurnia/erlankurnia.github.io" target="_blank" class="mx-2 text-sm lan-nav-link">
								Repository <NewTabIcon class="h-4 ml-[2px] pt-1 w-auto"></NewTabIcon>
							</a>
						</li>
					</ul>
				</div>
				<div
					class="w-full md:justify-start"
					:class="{
						'md:w-1/2': !$route.meta.hideNavbar,
					}"
				>
					<div
						class="flex flex-wrap items-center justify-center h-full pt-8 text-xs md:justify-start md:py-8 lg:text-sm text-secondary"
					>
						<span class="flex flex-row items-center justify-center gap-1 px-1 text-dark">
							<span class="w-4 h-auto aspect-square">
								<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M14 15.6672C13.475 15.8812 12.8952 16 12.2857 16C9.91878 16 8 14.2091 8 12C8 9.79086 9.91878 8 12.2857 8C12.8952 8 13.475 8.11876 14 8.33283"
										stroke="rgba(2,6,23,1)"
										stroke-width="1.5"
										stroke-linecap="round"
									/>
									<path
										d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
										stroke="rgba(2,6,23,1)"
										stroke-width="1.5"
										stroke-linecap="round"
									/>
								</svg>
							</span>
							2023
						</span>
						<span class="w-[1px] mx-1 h-full max-h-8 bg-dark"></span>
						<span class="px-1 rounded-full text-dark"
							>Created by <a class="font-bold text-primary" target="_blank" href="https://erlankurnia.github.io">Me</a></span
						>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
import NewTabIcon from "./icons/NewTabIcon.vue";
export default {
	name: "FooterComponent",
	components: { NewTabIcon },
};
</script>
