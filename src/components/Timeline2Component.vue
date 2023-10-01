<template>
	<div id="timeline-2" class="container">
		<div class="flex flex-col grid-cols-9 px-2 mx-auto md:grid">
			<template v-for="(history, index) in histories">
				<!-- left -->
				<div v-if="index % 2 == 0" class="flex flex-row-reverse md:contents" :key="index" :class="'timeline-item-id-' + index">
					<div
						class="col-start-1 col-end-5 p-4 my-8 ml-auto shadow-md bg-quaternary rounded-xl"
						:class="{
							'mt-20': index == 0,
							'mb-20': index == histories.length - 1,
						}"
					>
						<h3 class="px-2 mb-1 -mx-2 text-base font-semibold text-primary">
							{{ history.title }}
						</h3>
						<p class="mb-2 text-sm leading-tight text-justify">
							{{ history.desc }}
						</p>
						<p class="text-sm font-semibold text-right opacity-75 text-secondary">{{ history.date }}</p>
					</div>
					<div class="relative col-start-5 col-end-6 mr-10 md:mx-auto">
						<div
							class="flex items-center justify-center w-6 h-full"
							:class="{
								'pt-32': index == 0,
							}"
						>
							<div class="w-1 h-full pointer-events-none bg-quaternary"></div>
						</div>
						<div
							class="absolute w-6 h-6 -mt-3 rounded-full shadow top-1/2"
							:class="{
								'bg-quaternary': index != 0,
								'bg-primary': index == 0,
								'translate-y-6': index == 0,
								'-translate-y-6': index == histories.length - 1,
							}"
						>
							<div v-if="index == 0" class="flex items-center justify-center w-full h-full bg-transparent">
								<div class="w-4 h-4 m-auto rounded-full bg-quaternary"></div>
							</div>
						</div>
					</div>
				</div>
				<!-- left -->

				<!-- right -->
				<div v-else class="flex md:contents">
					<div class="relative col-start-5 col-end-6 mr-10 md:mx-auto">
						<div class="flex items-center justify-center w-6 h-full">
							<div class="w-1 h-full pointer-events-none bg-quaternary"></div>
						</div>
						<div
							class="absolute w-6 h-6 -mt-3 rounded-full shadow bg-quaternary top-1/2"
							:class="{
								'translate-y-6': index == 0,
								'-translate-y-6': index == histories.length - 1,
							}"
						></div>
					</div>
					<div
						class="col-start-6 col-end-10 p-4 my-8 mr-auto shadow-md bg-quaternary rounded-xl"
						:class="{
							'mt-20': index == 0,
							'mb-20': index == histories.length - 1,
						}"
					>
						<h3 class="px-2 mb-1 -mx-2 text-base font-semibold text-primary">
							{{ history.title }}
						</h3>
						<p class="mb-2 text-sm leading-tight text-justify">
							{{ history.desc }}
						</p>
						<p class="text-sm font-semibold text-right opacity-75 text-secondary">{{ history.date }}</p>
					</div>
				</div>
				<!-- right -->
			</template>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";

export default {
	name: "Timeline2Component",
	setup() {
		const histories = ref([
			{
				title: "Unity Developer",
				date: "Now",
				desc: "Anak Pintar Studio, Bogor, Indonesia",
				url: "",
			},
			{
				title: "Kitchen Staff",
				date: "2021-02-07 (24 months)",
				desc: "Rokupang Surabaya, Surabaya, Indonesia",
				url: "",
			},
			{
				title: "Tax Admin",
				date: "2019-10-26 (21 months)",
				desc: "CV. Karya Mandiri Sejahtera, Surabaya, Indonesia",
				url: "",
			},
			{
				title: "Associate TVS",
				date: "2016-05-15 (6 months)",
				desc: "CV. Karya Mandiri Sejahtera, Surabaya, Indonesia",
				url: "",
			},
			{
				title: "Flash Animator (Internship)",
				date: "2015-07-30 (3 months)",
				desc: "Maulidan Games, Surabaya, Indonesia",
				url: "",
			},
		]);

		// On scrolling
		const onScroll = () => {
			let index = 0;
			while (index < histories.length) {
				const item = document.querySelector(".timeline-item-id-" + index);

				if (item != null) {
					console.log(`.timeline-item-id-${index}: ${item.offsetTop}`);
					// if (window.scrollY > item.offsetTop) {
					// 	item.classList.add("lan-navbar-fixed");
					// } else {
					// 	item.classList.remove("lan-navbar-fixed");
					// }
				}
				index++;
			}
		};
		window.addEventListener("scroll", onScroll);
		// On scrolling

		return { histories };
	},
};
</script>
