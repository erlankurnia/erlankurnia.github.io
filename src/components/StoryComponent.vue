<template>
	<section id="story" class="pt-24 pb-0">
		<div class="container">
			<div class="w-full p-4 pb-0">
				<div class="mx-auto mb-6 text-center">
					<h4 class="mb-2 lan-section-title">My_History</h4>
					<h2 class="mb-4 text-3xl font-bold text-dark sm:text-4xl xl:5xl">
						How Did I <span class="text-primary">Reach</span> This Moment
					</h2>
					<p class="font-medium text-md text-secondary lg:text-lg">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus consectetur minus iure? Sint in doloribus
						accusamus aspernatur quidem sequi ut!
					</p>
				</div>
			</div>

			<!-- Timeline -->
			<Timeline2Component :histories="histories"></Timeline2Component>
			<!-- Timeline -->
		</div>
	</section>
</template>

<script setup></script>

<script>
import { ref } from "vue";
import Timeline2Component from "./Timeline2Component.vue";

export default {
	name: "StoryComponent",
	components: { Timeline2Component },
	setup() {
		const histories = ref([
			{
				title: "Unity Developer",
				dateFrom: "2021-02-08",
				dateTo: "Now",
				desc: "Anak Pintar Studio, Bogor, Indonesia",
				url: "",
			},
			{
				title: "Kitchen Staff",
				dateFrom: "2019-03-01",
				dateTo: "2021-02-07",
				desc: "Rokupang Surabaya, Surabaya, Indonesia",
				url: "",
			},
			{
				title: "Tax Admin",
				dateFrom: "2017-02-20",
				dateTo: "2018-10-26",
				desc: "CV. Karya Mandiri Sejahtera, Surabaya, Indonesia",
				url: "",
			},
			{
				title: "Associate TVS",
				dateFrom: "2015-11-16",
				dateTo: "2016-05-15",
				desc: "PT. Alfa Retail Indonesia, Surabaya, Indonesia",
				url: "",
			},
			{
				title: "Flash Animator (Internship)",
				dateFrom: "2015-04-20",
				dateTo: "2015-07-30",
				desc: "Maulidan Games, Surabaya, Indonesia",
				url: "",
			},
		]);

		return { histories };
	},
};
</script>
