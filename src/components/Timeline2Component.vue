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
						<p class="text-xs font-semibold text-right opacity-75 lg:text-sm text-secondary">
							{{ `${history.dateFrom} - ${history.dateTo} (${monthsToYears(monthDiff(history.dateFrom, history.dateTo))})` }}
						</p>
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
						<p class="text-xs font-semibold text-right opacity-75 lg:text-sm text-secondary">
							{{ `${history.dateFrom} - ${history.dateTo} (${monthsToYears(monthDiff(history.dateFrom, history.dateTo))})` }}
						</p>
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
	props: ["histories"],
	// setup(props) {
	// 	const histories = ref([
	// 		{
	// 			title: "Unity Developer",
	// 			dateFrom: "2021-02-08",
	// 			dateTo: "Now",
	// 			desc: "Anak Pintar Studio, Bogor, Indonesia",
	// 			url: "",
	// 		},
	// 		{
	// 			title: "Kitchen Staff",
	// 			dateFrom: "2019-03-01",
	// 			dateTo: "2021-02-07",
	// 			desc: "Rokupang Surabaya, Surabaya, Indonesia",
	// 			url: "",
	// 		},
	// 		{
	// 			title: "Tax Admin",
	// 			dateFrom: "2017-02-20",
	// 			dateTo: "2018-10-26",
	// 			desc: "CV. Karya Mandiri Sejahtera, Surabaya, Indonesia",
	// 			url: "",
	// 		},
	// 		{
	// 			title: "Associate TVS",
	// 			dateFrom: "2015-11-16",
	// 			dateTo: "2016-05-15",
	// 			desc: "PT. Alfa Retail Indonesia, Surabaya, Indonesia",
	// 			url: "",
	// 		},
	// 		{
	// 			title: "Flash Animator (Internship)",
	// 			dateFrom: "2015-04-20",
	// 			dateTo: "2015-07-30",
	// 			desc: "Maulidan Games, Surabaya, Indonesia",
	// 			url: "",
	// 		},
	// 	]);

	// 	// On scrolling
	// 	// const onScroll = () => {
	// 	// 	let index = 0;
	// 	// 	while (index < histories.length) {
	// 	// 		const item = document.querySelector(".timeline-item-id-" + index);

	// 	// 		if (item != null) {
	// 	// 			console.log(`.timeline-item-id-${index}: ${item.offsetTop}`);
	// 	// 			// if (window.scrollY > item.offsetTop) {
	// 	// 			// 	item.classList.add("lan-navbar-fixed");
	// 	// 			// } else {
	// 	// 			// 	item.classList.remove("lan-navbar-fixed");
	// 	// 			// }
	// 	// 		}
	// 	// 		index++;
	// 	// 	}
	// 	// };
	// 	// window.addEventListener("scroll", onScroll);
	// 	// On scrolling

	// 	return { histories };
	// },
	methods: {
		monthDiff(dateFrom, dateTo) {
			dateFrom = ("" + dateFrom).toUpperCase();
			dateTo = ("" + dateTo).toUpperCase();

			if (dateFrom == "NOW" || dateFrom == "" || dateFrom == null) dateFrom = new Date();
			if (dateTo == "NOW" || dateTo == "" || dateTo == null) dateTo = new Date();

			if (typeof dateFrom === "string") dateFrom = new Date(dateFrom);
			if (typeof dateTo === "string") dateTo = new Date(dateTo);

			return dateTo.getMonth() - dateFrom.getMonth() + 12 * (dateTo.getFullYear() - dateFrom.getFullYear());
		},
		monthsToYears(months) {
			let years = Math.floor(months / 12);
			months = months % 12;
			// console.log(`${years} ${months}`);

			if (years > 1) years = years + " yrs";
			else if (years == 1) years = years + " yr";
			else years = "";

			if (months > 1) months = months + " mos";
			else if (months == 1) months = months + " mo";
			else months = "";

			return `${years} ${months}`.trim();
		},
	},
};
</script>
