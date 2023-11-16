<template>
	<section id="portfolio" class="pt-24 pb-16">
		<div class="container">
			<div class="w-full p-4">
				<div class="max-w-xl mx-auto mb-8 text-center">
					<h4 class="mb-2 lan-section-title">Portfolio</h4>
					<h2 class="mb-4 text-3xl font-bold text-dark sm:text-4xl lg:5xl">
						Latest <span class="text-primary">Project</span>s
					</h2>
					<p class="font-medium text-md text-secondary md:text-lg">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab aliquid similique quam aspernatur soluta quod magni
						fugit id iste. Ratione odio ipsam aliquam laboriosam?
					</p>
				</div>
			</div>
			<div class="flex flex-wrap justify-center w-full px-2 xl:w-10/12 xl:mx-auto">
				<div
					class="p-3 rounded-xl bg-[rgba(248,248,248,1)] mx-2 mb-4 md:w-[44%] 3xl:w-[30%]"
					v-for="port in portfolio"
					:key="port.id"
				>
					<div class="overflow-hidden rounded-md shadow-md">
						<img :src="port.imgPath" :alt="port.title" :class="{ 'w-full': port.imgPath != null && port.imgPath.length > 5 }" />
					</div>
					<a class="text-lg font-semibold text-dark hover:text-primary" :href="port.url">
						<h3 class="mt-5 mb-3" v-html="port.title"></h3>
					</a>
					<p class="text-sm font-medium text-secondary" v-html="port.description"></p>
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
		return { portfolio };
	},
};
</script>
