<template>
	<section id="portfolio" :class="['pt-24 pb-16 max-lg:min-h-screen', $attrs.class]">
		<div class="container">
			<div class="w-full p-4">
				<div class="max-w-xl mx-auto mb-8 text-center">
					<h4 class="mb-2 lan-section-title">Portfolio</h4>
					<h2 class="mb-4 text-3xl font-bold text-dark dark:text-light sm:text-4xl lg:5xl">
						Latest <span class="text-primary dark:text-primaryDark">Project</span>s
					</h2>
					<p class="lan-section-desc">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab aliquid similique quam aspernatur
						soluta quod magni
						fugit id iste. Ratione odio ipsam aliquam laboriosam?
					</p>
				</div>
			</div>
			<div
				class="grid justify-center w-full grid-cols-1 sm:gap-2 sm:grid-cols-2 2xl:gap-6 lg:grid-cols-3 2xl:grid-cols-4 2xl:mx-auto">
				<transition name="slide-up" v-for="(port, index) in portfolio" :key="projectKey + index" appear>
					<RouterLink to="" :id="projectShow + port.id"
						class="w-auto h-auto p-3 transition duration-200 scale-100 bg-transparent rounded-lg group hover:bg-tertiary dark:hover:bg-tertiaryDark hover:shadow-lg hover:lan-glass-effect hover:scale-105"
						:class="{
							'opacity-0': !port.isVisible,
							'opacity-100': port.isVisible,
						}">
						<div class="overflow-hidden rounded-md shadow-md">
							<img :src="port.imgPath" :alt="port.title"
								:class="{ 'w-full': port.imgPath != null && port.imgPath.length > 5 }" />
						</div>
						<div
							class="text-lg font-semibold text-dark dark:text-light group-hover:text-primary dark:group-hover:text-primaryDark">
							<h3 class="mt-5 mb-3" v-html="port.title"></h3>
						</div>
						<p class="text-xs lan-section-desc lg:text-sm" v-html="port.description"></p>
						<div class="flex flex-row w-full h-auto gap-2 pt-4">
							<a :href="`${route.meta.project}/${port.slug}`" target="_blank"
								class="flex flex-row items-center justify-center flex-grow gap-2 py-1 lan-button-secondary">
								View
								<NewTabIcon class="w-auto h-4"></NewTabIcon>
							</a>
							<a :href="port.urlRepo" target="_blank"
								class="flex flex-row items-center justify-center flex-grow gap-2 py-1 lan-button-secondary group/github">
								Repo
								<Icon techName="Github"
									class="transition size-4 dark:duration-1000 dark:group-hover/github:duration-300 text-primary group-hover/github:text-tertiary dark:text-primaryDark dark:group-hover/github:text-tertiaryDark">
								</Icon>
							</a>
						</div>
					</RouterLink>
				</transition>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { inject, onUnmounted, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
import Icon from "./icons/Icon.vue";
import NewTabIcon from "./icons/NewTabIcon.vue";
import DataUserSymbol from "@/helper/symbols/DataUserSymbol";

const route = useRoute();
const projectHide = 'portfolio-project-hide-';
const projectShow = 'portfolio-project-show-';

const projectKey = ref(projectHide);
const data = inject(DataUserSymbol);
const portfolio = ref([
	{
		id: 0,
		title: "Portfolio 1",
		slug: "",
		imgPath: "/img/portfolio/1.png",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nemo molestias aliquid ducimus similique quo. Non?",
		url: "",
		urlRepo: "",
		isVisible: false,
	},
	{
		id: 1,
		title: "Portfolio 2",
		slug: "",
		imgPath: "/img/portfolio/2.png",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nemo molestias aliquid ducimus similique quo. Non?",
		url: "",
		urlRepo: "",
		isVisible: false,
	},
	{
		id: 2,
		title: "Portfolio 3",
		slug: "",
		imgPath: "/img/portfolio/3.png",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nemo molestias aliquid ducimus similique quo. Non?",
		url: "",
		urlRepo: "",
		isVisible: false,
	},
	{
		id: 3,
		title: "Portfolio 4",
		slug: "",
		imgPath: "/img/portfolio/4.png",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nemo molestias aliquid ducimus similique quo. Non?",
		url: "",
		urlRepo: "",
		isVisible: false,
	},
]);

const onScroll = () => {
	const viewportCenterY = window.innerHeight * 9 / 10;

	for (let a = 0; a < portfolio.value.length; a++) {
		const itemElement = document.querySelector("#" + projectShow + portfolio.value[a].id) as HTMLElement;
		const offset = itemElement.offsetTop - window.scrollY - viewportCenterY;
		// const offscreen = itemElement.offsetTop - window.scrollY - window.innerHeight;
		// console.log(offset);

		const status = offset <= 0 || projectShow == projectKey.value;
		projectKey.value = status ? projectShow : projectHide;
		portfolio.value[a].isVisible = status;
	}
};
window.addEventListener("scroll", onScroll);
onUnmounted(() => {
	window.removeEventListener("scroll", onScroll);
});
</script>
