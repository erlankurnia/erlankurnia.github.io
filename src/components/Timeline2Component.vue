<template>
	<div id="timeline-2" class="container">
		<div class="flex flex-col grid-cols-9 px-2 mx-auto font-normal md:grid">
			<template v-for="(history, index) in experiences" :key="index">
				<!-- left -->
				<div v-if="index % 2 == 0" class="flex flex-row-reverse justify-end md:contents"
					:class="'timeline-item-id-' + index">
					<div class="col-start-1 col-end-5 p-4 my-8 ml-0 rounded-lg shadow-md md:ml-auto text-secondary dark:text-secondaryDark bg-quaternary dark:bg-quaternaryDark"
						:class="{
							'mt-20': index == 0,
							'mb-20': index == experiences.length - 1,
						}">
						<h4 class="px-2 mb-2 -mx-2 text-lg font-extrabold text-left md:text-right text-primary dark:text-primaryDark"
							v-html="history.title"></h4>
						<p v-if="history.status" class="mb-2 text-xs text-left opacity-75 md:text-right lg:text-sm"
							v-html="history.status"></p>
						<p class="mb-2 text-sm leading-tight text-left md:text-right" v-html="history.desc">
						</p>
						<p class="mb-2 text-xs text-left opacity-75 md:text-right lg:text-sm">
							{{ showAge(history.dateFrom, history.dateTo)
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
						<div class="flex justify-center w-6 h-full" :class="{
							'items-end': index == 0,
							'items-center': index != 0,
						}">
							<div class="w-1 pointer-events-none bg-quaternary dark:bg-quaternaryDark" :class="{
								'h-[40%]': index == 0,
								'h-full': index != 0,
							}"></div>
						</div>
						<div class="absolute size-8 -mt-3 -translate-x-1 rounded-full shadow-sm top-1/2" :class="{
							'bg-quaternary dark:bg-quaternaryDark p-[6px]': index != 0,
							'bg-primary dark:bg-primaryDark p-1': index == 0,
							'translate-y-6': index == 0,
							'-translate-y-6': index == experiences.length - 1,
						}">
							<div v-if="index == 0"
								class="flex items-center justify-center w-full h-full bg-transparent">
								<div
									class="size-full m-auto rounded-full bg-quaternary dark:bg-quaternaryDark animate-pulse">
								</div>
							</div>
							<template v-else>
								<template
									v-if="history.status && history.status.toLocaleLowerCase().includes('graduate')">
									<GraduateIcon class="text-primary dark:text-primaryDark"></GraduateIcon>
								</template>
								<template v-else>
									<WorkIcon class="text-primary dark:text-primaryDark"></WorkIcon>
								</template>
							</template>
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
						<div class="absolute size-8 -mt-3 p-[6px] -translate-x-1 rounded-full shadow-sm bg-quaternary dark:bg-quaternaryDark top-1/2"
							:class="{
								'translate-y-6': index == 0,
								'-translate-y-6': index == experiences.length - 1,
							}">
							<template v-if="history.status && history.status.toLocaleLowerCase().includes('graduate')">
								<GraduateIcon class="text-primary dark:text-primaryDark"></GraduateIcon>
							</template>
							<template v-else>
								<WorkIcon class="text-primary dark:text-primaryDark"></WorkIcon>
							</template>
						</div>
					</div>
					<div class="col-start-6 col-end-10 p-4 my-8 mr-auto rounded-lg shadow-md text-secondary dark:text-secondaryDark bg-quaternary dark:bg-quaternaryDark"
						:class="{
							'mt-20': index == 0,
							'mb-20': index == experiences.length - 1,
						}">
						<h4 class="px-2 mb-2 -mx-2 text-lg font-extrabold text-primary dark:text-primaryDark"
							v-html="history.title">
						</h4>
						<p v-if="history.status" class="mb-2 text-xs opacity-75 lg:text-sm" v-html="history.status">
						</p>
						<p class="mb-2 text-sm leading-tight" v-html="history.desc"></p>
						<p class="mb-2 text-xs opacity-75 lg:text-sm">
							{{ showAge(history.dateFrom, history.dateTo)
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
				</div>
				<!-- right -->
			</template>
		</div>
	</div>
</template>

<script setup lang="ts">
import EventBus, { EventBusEnum } from "@/helper/EventBus";
import type IWorkExperience from "@/helper/interfaces/IWorkExperience";
import type { TDynamicModalComponent } from "@/helper/interfaces/TDynamicModalComponent";
import { useDateTime } from "@/helper/mixins/DateTime";
import tools from "@/helper/tools";
import MarkdownComponent from "./MarkdownComponent.vue";
import GraduateIcon from "./icons/GraduateIcon.vue";
import WorkIcon from "./icons/WorkIcon.vue";

const { monthsToYears, monthDiff, dateFormat } = useDateTime();
const { experiences } = defineProps<{ experiences: IWorkExperience[] }>();

async function onMoreInfo(index: number) {
	console.log('more info: ' + index);
	const dataSource = experiences[index].source;
	if (dataSource) {
		const dataMarkdown = await tools.getContentReadme(dataSource);
		const componentData: TDynamicModalComponent = {
			component: MarkdownComponent,
			props: { contentMarkdown: dataMarkdown }
		};
		EventBus.$emit(EventBusEnum.ShowModal, componentData);
	}
}

// function replaceSpaceWithUnderscore(text: string): string {
// 	return text.replace(/ /g, '<span class=\"text-dark dark:text-light\">_</span>');
// }

function showAge(dateFrom: string, dateTo: string) {
	return `${dateFormat(dateFrom, "MMM YYYY")} - ${dateFormat(dateTo, "MMM YYYY")}`;
}
</script>
