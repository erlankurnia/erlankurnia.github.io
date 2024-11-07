<template>
	<section id="portfolio" class="pt-24 pb-16 max-lg:min-h-screen">
		<div class="container">
			<div class="w-full p-4">
				<div class="max-w-xl mx-auto mb-8 text-center">
					<h4 class="mb-2 lan-section-title">Portfolio</h4>
					<h2 class="mb-4 text-3xl font-bold text-dark sm:text-4xl lg:5xl">
						Latest <span class="text-primary">Project</span>s
					</h2>
					<p class="lan-section-desc">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab aliquid similique quam aspernatur
						soluta quod magni
						fugit id iste. Ratione odio ipsam aliquam laboriosam?
					</p>
				</div>
			</div>
			<div class="grid justify-center w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 xl:mx-auto">
				<transition name="slide-up" v-for="(port, index) in portfolio" :key="index" ref="projects">
					<a v-if="isVisible" :href="port.url" :style="`transition-delay: ${index * 50}ms`"
						class="p-3 transition duration-200 scale-100 bg-transparent rounded-lg hover:bg-tertiary hover:shadow-lg hover:lan-glass-effect hover:scale-105">
						<div class="overflow-hidden rounded-md shadow-md">
							<img :src="port.imgPath" :alt="port.title"
								:class="{ 'w-full': port.imgPath != null && port.imgPath.length > 5 }" />
						</div>
						<div class="text-lg font-semibold text-dark hover:text-primary">
							<h3 class="mt-5 mb-3" v-html="port.title"></h3>
						</div>
						<p class="text-xs lan-section-desc lg:text-sm" v-html="port.description"></p>
					</a>
				</transition>
			</div>
		</div>
	</section>
</template>

<script>
import { inject, ref } from "vue";

export default {
	name: "PortfolioComponent",
	setup() {
		const isVisible = ref(false);
		const distanceFromCenter = ref(0);
		const { dataUser } = inject("dataUser");
		const portfolio = ref([
			{
				id: 0,
				title: "Portfolio 1",
				imgPath: "/img/portfolio/1.png",
				description:
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nemo molestias aliquid ducimus similique quo. Non?",
				url: "",
			},
			{
				id: 1,
				title: "Portfolio 2",
				imgPath: "/img/portfolio/2.png",
				description:
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nemo molestias aliquid ducimus similique quo. Non?",
				url: "",
			},
			{
				id: 2,
				title: "Portfolio 3",
				imgPath: "/img/portfolio/3.png",
				description:
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nemo molestias aliquid ducimus similique quo. Non?",
				url: "",
			},
			{
				id: 3,
				title: "Portfolio 4",
				imgPath: "/img/portfolio/4.png",
				description:
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nemo molestias aliquid ducimus similique quo. Non?",
				url: "",
			},
		]);
		return { portfolio, isVisible, distanceFromCenter };
	},
	mounted() {
		this.calculateDistanceFromCenter();
		window.addEventListener('resize', this.calculateDistanceFromCenter);
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.calculateDistanceFromCenter);
	},
	methods: {
		calculateDistanceFromCenter() {
			// const projects = useTemplateRef('projects');
			// console.log(projects);
			this.portfolio.forEach((project, index) => {
				console.log(this.$refs['project' + index]);
				if (this.$refs['project' + index]) {
					const componentRect = this.$refs['project' + index].getBoundingClientRect();
					const viewportCenterX = window.innerWidth / 2;
					const viewportCenterY = window.innerHeight / 2;

					const componentCenterX = componentRect.left + componentRect.width / 2;
					const componentCenterY = componentRect.top + componentRect.height / 2;

					const deltaX = componentCenterX - viewportCenterX;
					const deltaY = componentCenterY - viewportCenterY;

					this.distanceFromCenter = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
				}
			});
		},
	},
};
</script>
