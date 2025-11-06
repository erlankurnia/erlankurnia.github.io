<script setup lang="ts">
import NewTabIcon from "@/components/icons/NewTabIcon.vue";
</script>

<template>
	<div class="container w-full h-[2px] px-8">
		<div class="w-full h-full bg-quaternary dark:bg-quaternaryDark"></div>
	</div>
	<footer class="py-16 mb-20 select-none sm:mb-0">
		<div class="container">
			<div class="flex flex-wrap px-4 md:flex-row-reverse">
				<div class="flex justify-center w-full align-middle md:justify-end md:w-1/2" :class="{
					hidden: $route.meta.hideNavbar,
				}">
					<ul class="flex flex-wrap justify-center md:justify-end">
						<li class="flex items-center group">
							<RouterLink to="/" class="mx-2 text-xs lan-nav-link" :class="{
								'text-primary dark:text-primaryDark font-bold scale-110': $route.name == 'home',
							}">Home</RouterLink>
						</li>
						<li class="flex items-center group">
							<RouterLink v-if="$route.meta.url?.about" :to="$route.meta.url.about"
								class="mx-2 text-xs lan-nav-link" :class="{
									'text-primary dark:text-primaryDark font-bold scale-110': $route.name == 'who_iam',
								}">WHO_I'M</RouterLink>
						</li>
						<li class="flex items-center group">
							<RouterLink v-if="$route.meta.url?.notes" :to="$route.meta.url.projects"
								class="mx-2 text-xs lan-nav-link" :class="{
									'text-primary dark:text-primaryDark font-bold scale-110': $route.name == 'projects',
								}">Projects</RouterLink>
						</li>
						<li class="flex items-center group">
							<a v-if="$route.meta.url?.notes" :href="$route.meta.url.notes"
								class="mx-2 text-xs lan-nav-link" :class="{
									'text-primary dark:text-primaryDark font-bold scale-110': $route.name == 'notes',
								}">Notes</a>
							<!-- <RouterLink v-if="$route.meta.url?.notes" :to="$route.meta.url.notes"
								class="mx-2 text-xs lan-nav-link" :class="{
									'text-primary dark:text-primaryDark font-bold scale-110': $route.name == 'notes',
								}">Notes</RouterLink> -->
						</li>
						<li class="flex items-center group">
							<RouterLink v-if="$route.meta.url?.credit" :to="$route.meta.url.credit"
								class="mx-2 text-xs lan-nav-link" :class="{
									'text-primary dark:text-primaryDark font-bold scale-110': $route.name == 'references',
								}">References</RouterLink>
						</li>
						<li class="flex items-center group">
							<a href="https://cloud.umami.is/share/P9vSXDhPCyGTUoB2/erlankurnia.github.com"
								target="_blank" class="mx-2 text-xs lan-nav-link">
								Analytics <NewTabIcon class="h-4 ml-[2px] pt-1 w-auto"></NewTabIcon>
							</a>
						</li>
						<li class="flex items-center group">
							<a href="https://github.com/erlankurnia/erlankurnia.github.io" target="_blank"
								class="mx-2 text-xs lan-nav-link">
								Repository <NewTabIcon class="h-4 ml-[2px] pt-1 w-auto"></NewTabIcon>
							</a>
						</li>
					</ul>
				</div>
				<div class="w-full md:justify-start" :class="{
					'md:w-1/2': !$route.meta.hideNavbar,
				}">
					<div
						class="flex flex-wrap items-center justify-center h-full pt-8 text-xs md:justify-start md:py-8 lg:text-sm text-secondary dark:text-secondaryDark">
						<span class="flex flex-row items-center justify-center gap-1 px-1 text-dark dark:text-light">
							<span class="w-4 h-auto aspect-square">
								<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M12 22c5.421 0 10-4.579 10-10S17.421 2 12 2 2 6.579 2 12s4.579 10 10 10zm0-18c4.337 0 8 3.663 8 8s-3.663 8-8 8-8-3.663-8-8 3.663-8 8-8z">
									</path>
									<path
										d="M12 17c.901 0 2.581-.168 3.707-1.292l-1.414-1.416C13.85 14.735 12.992 15 12 15c-1.626 0-3-1.374-3-3s1.374-3 3-3c.993 0 1.851.265 2.293.707l1.414-1.414C14.582 7.168 12.901 7 12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5z">
									</path>
								</svg>
							</span>
							2023 <span class="w-1 h-1 rounded-full bg-dark dark:bg-light"></span>
						</span>
						<!-- <span class="w-[1px] mx-1 h-full max-h-8 bg-dark"></span> -->
						<span class="px-[2px] rounded-full text-dark dark:text-light">
							Developed and built by <a class="font-bold text-primary dark:text-primaryDark"
								target="_blank" href="https://erlankurnia.laness.id">Me</a>
						</span>
					</div>
				</div>
			</div>
		</div>
	</footer>
	<section></section>
</template>
