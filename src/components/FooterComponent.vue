<template>
	<div class="w-10/12 h-[2px] mx-auto bg-quaternary"></div>
	<footer class="pt-16 pb-16 select-none">
		<div class="container">
			<div class="flex flex-wrap md:flex-row-reverse">
				<div
					class="flex justify-center w-full px-4 align-middle md:w-1/2"
					:class="{
						hidden: $route.meta.hideNavbar,
					}"
				>
					<ul class="flex flex-row justify-center">
						<li class="flex items-center group">
							<a href="/" class="mx-2 lan-nav-link text-sm">Home</a>
						</li>
						<li class="flex items-center group">
							<RouterLink to="/inspiration" class="mx-2 lan-nav-link text-sm">Inspiration</RouterLink>
						</li>
						<li class="flex items-center group">
							<a
								href="https://analytics.eu.umami.is/share/P9vSXDhPCyGTUoB2/LAN"
								target="_blank"
								class="mx-2 lan-nav-link text-sm"
								>Analytics</a
							>
						</li>
						<li class="flex items-center group">
							<a href="https://github.com/erlankurnia/erlankurnia.github.io" target="_blank" class="mx-2 lan-nav-link text-sm"
								>Repository</a
							>
						</li>
					</ul>
				</div>
				<div
					class="w-full"
					:class="{
						'md:w-1/2': !$route.meta.hideNavbar,
					}"
				>
					<div class="flex flex-wrap items-center justify-center h-full py-8 text-xs lg:text-sm text-secondary">
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
							>Created by <a class="text-primary font-bold" target="_blank" href="https://kuryana.id">Kuryana.id</a></span
						>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: "FooterComponent",
};
</script>
