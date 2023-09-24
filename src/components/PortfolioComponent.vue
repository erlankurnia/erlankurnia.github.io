<template>
	<section id="portfolio" class="pt-24 pb-16 bg-bgPrimary">
		<div class="container">
			<div class="w-full p-4">
				<div class="max-w-xl mx-auto mb-16 text-center">
					<h4 class="mb-2 text-lg font-semibold uppercase text-primary">Portfolio</h4>
					<h2 class="mb-4 text-3xl font-bold text-dark sm:text-4xl lg:5xl">
						Latest <span class="text-primary">Project</span>s
					</h2>
					<p class="font-medium text-md text-secondary md:text-lg">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab aliquid similique quam aspernatur soluta quod magni
						fugit id iste. Ratione odio ipsam aliquam laboriosam?
					</p>
				</div>
			</div>
			<div class="flex flex-wrap justify-center w-full px-4 xl:w-10/12 xl:mx-auto">
				<div class="p-4 mb-12 md:w-1/2" v-for="port in portfolio" :key="port.id">
					<div class="overflow-hidden rounded-md shadow-md">
						<img :src="port.imgPath" :alt="port.title" :class="{ 'w-full': port.imgPath != null && port.imgPath.length > 5 }" />
					</div>
					<h3 class="mt-5 mb-3 text-xl font-semibold text-dark">{{ port.title }}</h3>
					<p class="text-base font-medium text-secondary">
						{{ port.desc }}
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { ref } from "vue";

export default {
	name: "PortfolioComponent",
	setup() {
		const portfolio = ref([
			{
				id: 0,
				title: "Portfolio 1",
				imgPath: "/img/portfolio/1.png",
				desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nemo molestias aliquid ducimus similique quo. Non?",
			},
			{
				id: 1,
				title: "Portfolio 2",
				imgPath: "/img/portfolio/2.png",
				desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nemo molestias aliquid ducimus similique quo. Non?",
			},
			{
				id: 2,
				title: "Portfolio 3",
				imgPath: "/img/portfolio/3.png",
				desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nemo molestias aliquid ducimus similique quo. Non?",
			},
			{
				id: 3,
				title: "Portfolio 4",
				imgPath: "/img/portfolio/4.png",
				desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nemo molestias aliquid ducimus similique quo. Non?",
			},
		]);
		return { portfolio };
	},
};
</script>
