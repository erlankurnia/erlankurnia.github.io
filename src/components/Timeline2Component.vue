<template>
	<div id="timeline-2" class="container">
		<div class="flex flex-col grid-cols-9 px-2 mx-auto md:grid">
			<template v-for="(history, index) in histories">
				<!-- left -->
				<div v-if="index % 2 == 0" class="flex flex-row-reverse md:contents" :key="index"
					:class="'timeline-item-id-' + index">
					<div class="col-start-1 col-end-5 p-4 my-8 ml-auto shadow-md text-secondary dark:text-secondaryDark bg-quaternary dark:bg-quaternaryDark rounded-xl"
						:class="{
							'mt-20': index == 0,
							'mb-20': index == histories.length - 1,
						}">
						<h3 class="px-2 mb-1 -mx-2 text-base font-semibold text-left md:text-right text-primary dark:text-primaryDark"
							v-html="history.title"></h3>
						<p v-if="history.status"
							class="mb-2 text-xs font-semibold text-left opacity-75 md:text-right lg:text-sm"
							v-html="history.status"></p>
						<p class="mb-2 text-sm leading-tight text-left md:text-right" v-html="history.desc"></p>
						<p class="mb-2 text-xs font-semibold text-left opacity-75 md:text-right lg:text-sm">
							{{ `${dateFormat(history.dateFrom, "MMM YYYY")} - ${dateFormat(history.dateTo, "MMM YYYY")}`
							}}
							<br />
							{{ `(${monthsToYears(monthDiff(history.dateFrom, history.dateTo))})` }}
						</p>
						<div v-if="typeof history.source == 'object'" class="w-full h-auto">
							<button class="w-full px-4 py-1 text-sm text-center rounded-full lan-text-primary"
								@click="onMoreInfo(index)">
								More Info
							</button>
						</div>
					</div>
					<div class="relative col-start-5 col-end-6 mr-10 md:mx-auto">
						<div class="flex items-center justify-center w-6 h-full" :class="{
							'pt-36': index == 0,
						}">
							<div class="w-1 h-full pointer-events-none bg-quaternary dark:bg-quaternaryDark"></div>
						</div>
						<div class="absolute w-6 h-6 -mt-3 rounded-full shadow top-1/2" :class="{
							'bg-quaternary dark:bg-quaternaryDark': index != 0,
							'bg-primary dark:bg-primaryDark': index == 0,
							'translate-y-6': index == 0,
							'-translate-y-6': index == histories.length - 1,
						}">
							<div v-if="index == 0"
								class="flex items-center justify-center w-full h-full bg-transparent">
								<div
									class="w-4 h-4 m-auto rounded-full bg-quaternary dark:bg-quaternaryDark animate-pulse">
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- left -->

				<!-- right -->
				<div v-else class="flex md:contents" :class="'timeline-item-id-' + index">
					<div class="relative col-start-5 col-end-6 mr-10 md:mx-auto">
						<div class="flex items-center justify-center w-6 h-full">
							<div class="w-1 h-full pointer-events-none bg-quaternary dark:bg-quaternaryDark"></div>
						</div>
						<div class="absolute w-6 h-6 -mt-3 rounded-full shadow bg-quaternary dark:bg-quaternaryDark top-1/2"
							:class="{
								'translate-y-6': index == 0,
								'-translate-y-6': index == histories.length - 1,
							}"></div>
					</div>
					<div class="col-start-6 col-end-10 p-4 my-8 mr-auto shadow-md text-secondary dark:text-secondaryDark bg-quaternary dark:bg-quaternaryDark rounded-xl"
						:class="{
							'mt-20': index == 0,
							'mb-20': index == histories.length - 1,
						}">
						<h3 class="px-2 mb-1 -mx-2 text-base font-semibold text-primary dark:text-primaryDark"
							v-html="history.title"></h3>
						<p v-if="history.status" class="mb-2 text-xs font-semibold opacity-75 lg:text-sm"
							v-html="history.status"></p>
						<p class="mb-2 text-sm leading-tight" v-html="history.desc"></p>
						<p class="mb-2 text-xs font-semibold opacity-75 lg:text-sm">
							{{ `${dateFormat(history.dateFrom, "MMM YYYY")} - ${dateFormat(history.dateTo, "MMM YYYY")}`
							}}
							<br />
							{{ `(${monthsToYears(monthDiff(history.dateFrom, history.dateTo))})` }}
						</p>
						<div v-if="typeof history.source == 'object'" class="w-full h-auto">
							<button class="w-full px-4 py-1 text-sm text-center rounded-full lan-text-primary"
								@click="$emit('moreInfoClick', index)">
								More Info
							</button>
						</div>
					</div>
				</div>
				<!-- right -->
			</template>
		</div>
	</div>
</template>

<script>
import dateTimeMixins from "../helper/mixins/dateTime";

// const emit = defineEmits(['inFocus', 'submit'])
export default {
	mixins: [dateTimeMixins],
	name: "Timeline2Component",
	props: ["histories"],
	emits: ['moreInfoClick'],
	methods: {
		onMoreInfo(index) {
			this.$emit('moreInfoClick', index);
			// console.log('more info: ' + index);
		},
	},
};
</script>
