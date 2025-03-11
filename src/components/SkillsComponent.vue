<script setup lang="ts">
import { defineAsyncComponent, inject, onMounted, ref, type Ref } from "vue";
import Icon from "@/components/icons/Icon.vue";
import DataUserSymbol from "@/helper/symbols/DataUserSymbol";
import type ISkillInfo from "@/helper/interfaces/ISkillInfo";

const ContextMenuComponent = defineAsyncComponent(() => import('@/components/ContextMenuComponent.vue'));

const data = inject(DataUserSymbol);
const selectedSkill: Ref<ISkillInfo | null> = ref(null);
type ContextMenuType = InstanceType<typeof ContextMenuComponent>;
const optionComponent = ref<ContextMenuType | null>(null);
const showOptions = (event: MouseEvent | null, skill: ISkillInfo | null) => {
	if (event != null && skill != null) {
		selectedSkill.value = skill;
		optionComponent.value?.show({
			x: event.clientX,
			y: event.clientY,
		});
	}
};
onMounted(() => {
	if (data?.value?.ability.skill.topics) {
		const simulatedEvent = new MouseEvent('click', {
			bubbles: true,
			cancelable: true,
			view: window,
			detail: 1,
			screenX: 0,
			screenY: 0,
			clientX: 0,
			clientY: 0,
			ctrlKey: false,
			altKey: false,
			shiftKey: false,
			metaKey: false,
			button: 0,
			buttons: 0,
			relatedTarget: null,
		});
		showOptions(simulatedEvent, data?.value?.ability.skill.topics[0]);
	}
});
</script>

<template>
	<section v-if="data" id="skills" class="pt-24 pb-16">
		<div class="container">
			<div class="w-full">
				<div class="mx-auto text-center">
					<h2 class="relative mb-2 lan-section-title">
						Skills
						<!-- Tooltip -->
						<!-- <div v-if="data.ability.tooltip"
							class="absolute translate-x-[52px] sm:translate-x-[64px] top-[4px] right-1/2 group cursor-help">
							<span
								class="flex size-4 sm:size-5 group-hover:text-primary dark:group-hover:text-primaryDark group-focus:text-primary dark:group-focus:text-primaryDark">
								<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z">
									</path>
									<path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
								</svg>
							</span>
							<p class="absolute hidden top-6 -left-[23vw] md:-top-4 md:left-6 [text-transform:_math-auto] p-2 text-xs shadow-md rounded-lg font-normal group-hover:block group-focus:block bg-tertiary text-dark dark:bg-tertiaryDark dark:text-light break-words w-60"
								v-html="data.ability.tooltip"></p>
						</div> -->
						<!-- Tooltip -->
					</h2>
				</div>
			</div>
			<!-- Current Ability -->
			<template v-if="data.ability.skill">
				<div v-if="data.ability.skill.title" class="w-full p-4">
					<div class="mx-auto mb-4 text-center">
						<h3 class="lan-section-subtitle" v-html="data.ability.skill.title"></h3>
						<p class="lan-section-desc" v-html="data.ability.skill.description">
						</p>
					</div>
				</div>
				<div v-if="data.ability.skill.topics && data.ability.skill.topics.length > 0"
					class="w-full max-w-[1080px] mx-auto sm:px-4">
					<div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-8 md:gap-8 xl:gap-9">
						<!-- Skill Icon -->
						<button v-for="skill in data.ability.skill.topics" type="button"
							@click="showOptions($event, skill)"
							class="flex flex-col justify-start w-[84px] h-auto gap-2 md:w-24 md:p-2 text-secondary dark:text-secondaryDark lan-50-to-100">
							<!-- Icon -->
							<div class="flex items-center justify-center mx-auto size-[44px] md:size-12">
								<Icon :techName="skill.name"></Icon>
							</div>
							<!-- Icon -->

							<div
								class="flex flex-col mx-auto gap-0 text-xs text-center justify-evenly font-light md:font-normal text-[9px] md:text-[12px]">
								<h3 class="w-full" translate="no" v-html="skill.title"></h3>
								<!-- <h4 class="w-full" v-html="skill.level.toString().charAt(0).toUpperCase() +
									skill.level.toString().slice(1).toLowerCase()"></h4> -->
								<!-- <h4 class="w-full">
									{{ getYearDiff(skill.year) < 1 ? "<" : "" }}{{ getYearDiff(skill.year) > 0 ?
										getYearDiff(skill.year) : 1 }}
										{{ getYearDiff(skill.year) > 1 ? "years" : "year" }}
								</h4> -->
							</div>
						</button>
						<!-- Skill Icon -->
					</div>
				</div>
			</template>
			<!-- Current Ability -->

			<!-- New Ability -->
			<template v-if="data.ability.learn">
				<div v-if="data.ability.learn.title" class="w-full p-4 mt-24">
					<div class="mx-auto mb-4 text-center">
						<h3 class="lan-section-subtitle" v-html="data.ability.learn.title"></h3>
						<p class="lan-section-desc" v-html="data.ability.learn.description">
						</p>
					</div>
				</div>
				<div v-if="data.ability.learn.topics && data.ability.learn.topics.length > 0"
					class="w-full max-w-[1080px] mx-auto sm:px-4">
					<div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-8 md:gap-8 xl:gap-9">
						<!-- Skill Icon -->
						<button v-for="skill in data.ability.learn.topics" type="button"
							@click="showOptions($event, skill)"
							class="flex flex-col justify-start w-[84px] h-auto gap-2 md:w-24 md:p-2 text-secondary dark:text-secondaryDark lan-50-to-100">
							<!-- Icon -->
							<div class="flex items-center justify-center mx-auto size-[44px] md:size-12">
								<Icon :techName="skill.name"></Icon>
							</div>
							<!-- Icon -->

							<div
								class="flex flex-col mx-auto gap-0 text-xs text-center justify-evenly font-light md:font-normal text-[9px] md:text-[12px]">
								<h3 class="w-full" translate="no" v-html="skill.title"></h3>
								<!-- <h4 class="w-full" v-html="skill.level.toString().charAt(0).toUpperCase() +
									skill.level.toString().slice(1).toLowerCase()"></h4> -->
								<!-- <h4 class="w-full">
									{{ getYearDiff(skill.year) < 1 ? "<" : "" }}{{ getYearDiff(skill.year) > 0 ?
										getYearDiff(skill.year) : 1 }}
										{{ getYearDiff(skill.year) > 1 ? "years" : "year" }}
								</h4> -->
							</div>
						</button>
						<!-- Skill Icon -->
					</div>
				</div>
			</template>
			<!-- New Ability -->
		</div>

		<ContextMenuComponent v-if="selectedSkill" ref="optionComponent">
			<div class="flex flex-col w-auto text-sm font-light divide-y divide-quaternary dark:divide-quaternaryDark">
				<RouterLink :to="'/projects/' + selectedSkill.name"
					class="flex items-center justify-start w-full px-3 py-1 rounded-lg min-h-8 hover:bg-quaternary/90 dark:hover:bg-quaternaryDark/50">
					Show Related Project
				</RouterLink>
				<a v-if="selectedSkill.urlInfo" :href="selectedSkill.urlInfo" target="_blank"
					class="flex items-center justify-start w-full px-3 py-1 rounded-lg min-h-8 hover:bg-quaternary/90 dark:hover:bg-quaternaryDark/50">
					What is <span class="pl-2 font-medium"> {{ selectedSkill.title }}</span>?
				</a>
			</div>
		</ContextMenuComponent>
	</section>
</template>
