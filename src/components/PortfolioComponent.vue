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
						class="p-3 w-auto h-auto transition duration-200 scale-100 bg-transparent rounded-lg hover:bg-tertiary dark:hover:bg-tertiaryDark hover:shadow-lg hover:lan-glass-effect hover:scale-105"
						:class="{
							'opacity-0': !port.isVisible,
							'opacity-100': port.isVisible,
						}">
						<div class="overflow-hidden rounded-md shadow-md">
							<img :src="port.imgPath" :alt="port.title"
								:class="{ 'w-full': port.imgPath != null && port.imgPath.length > 5 }" />
						</div>
						<div class="text-lg font-semibold text-dark dark:text-light">
							<h3 class="mt-5 mb-3" v-html="port.title"></h3>
						</div>
						<p class="text-xs lan-section-desc lg:text-sm" v-html="port.description"></p>
						<div class="w-full h-auto flex flex-row gap-2 pt-4">
							<a :href="port.url" target="_blank"
								class="lan-button-primary py-1 flex-grow flex flex-row justify-center items-center gap-2">
								View
								<NewTabIcon class="h-4 w-auto"></NewTabIcon>
							</a>
							<RouterLink :to="port.urlRepo"
								class="lan-button-primary group py-1 flex-grow flex flex-row justify-center items-center gap-2">
								Repo
								<Icon techName="Github"
									class="size-4 transition dark:duration-1000 dark:group-hover:duration-300 text-tertiary group-hover:text-primary dark:text-tertiaryDark dark:group-hover:text-primaryDark">
								</Icon>
							</RouterLink>
						</div>
					</RouterLink>
				</transition>
			</div>
		</div>
	</section>
</template>

<script setup>
import { inject, onUnmounted, ref } from "vue";
import { RouterLink } from "vue-router";
import Icon from "./icons/Icon.vue";
import NewTabIcon from "./icons/NewTabIcon.vue";

const projectHide = 'portfolio-project-hide-';
const projectShow = 'portfolio-project-show-';

const projectKey = ref(projectHide);
const { dataUser } = inject("dataUser");
const portfolio = ref([
	{
		id: 0,
		title: "Portfolio 1",
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
		const itemElement = document.querySelector("#" + projectShow + portfolio.value[a].id);
		const offset = itemElement.offsetTop - window.scrollY - viewportCenterY;
		const offscreen = itemElement.offsetTop - window.scrollY - window.innerHeight;
		console.log(offset);

		const status = offset <= 0 || projectShow == projectKey.value;
		projectKey.value = status ? projectShow : projectHide;
		portfolio.value[a].isVisible = status;
		// if (offscreen > 0) {
		// 	backToTop.classList.add("opacity-0");
		// } else {
		// 	backToTop.classList.remove("opacity-0");
		// }
	}
};
window.addEventListener("scroll", onScroll);
onUnmounted(() => {
	window.removeEventListener("scroll", onScroll);
});
</script>
