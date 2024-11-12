<template>
	<section v-if="data" id="skills" class="pt-24 pb-16">
		<div class="container">
			<div class="w-full">
				<div class="mx-auto text-center">
					<h4 class="mb-2 lan-section-title">Skills</h4>
				</div>
			</div>
			<!-- Current Ability -->
			<template v-if="data.skill">
				<div v-if="data.skill.title" class="w-full p-4">
					<div class="mx-auto mb-4 text-center">
						<h2 class="lan-section-subtitle" v-html="data.skill.title"></h2>
						<p class="lan-section-desc" v-html="data.skill.description">
						</p>
					</div>
				</div>
				<div v-if="data.skill.topics && data.skill.topics.length > 0" class="w-full px-4">
					<div
						class="grid items-center justify-center grid-cols-2 gap-2 md:grid-cols-3 md:gap-5 xl:grid-cols-4 xl:gap-8">
						<!-- Skill Icon -->
						<div v-for="skill in data.skill.topics"
							class="grid justify-between h-16 lg:h-20 grid-cols-[2fr_5fr] gap-3 p-2 text-secondary dark:text-secondaryDark lan-50-to-100">
							<!-- Icon -->
							<div class="flex items-center justify-center w-12 h-12 lg:h-16 lg:w-16">
								<Icon :techName="skill.name"></Icon>
							</div>
							<!-- Icon -->

							<div class="flex flex-col text-xs text-left justify-evenly">
								<h3 class="w-full text-[0.8rem] font-bold">{{ skill.title }}</h3>
								<h4 class="w-full">
									{{ getYearDiff(skill.year) < 1 ? "<" : "" }}{{ getYearDiff(skill.year) > 0 ?
										getYearDiff(skill.year) : 1 }}
										{{ getYearDiff(skill.year) > 1 ? "years" : "year" }}
								</h4>
							</div>
						</div>
						<!-- Skill Icon -->
					</div>
				</div>
			</template>
			<!-- Current Ability -->

			<!-- New Ability -->
			<template v-if="data.learn">
				<div v-if="data.learn.title" class="w-full p-4 mt-8">
					<div class="mx-auto mb-4 text-center">
						<h2 class="lan-section-subtitle" v-html="data.learn.title"></h2>
						<p class="lan-section-desc" v-html="data.learn.description">
						</p>
					</div>
				</div>
				<div v-if="data.learn.topics && data.learn.topics.length > 0" class="w-full px-4">
					<div
						class="grid items-center justify-center grid-cols-2 gap-2 md:grid-cols-3 md:gap-5 xl:grid-cols-4 xl:gap-8">
						<!-- Skill Icon -->
						<div v-for="skill in data.learn.topics"
							class="grid justify-between h-16 lg:h-20 grid-cols-[2fr_5fr] gap-3 p-2 text-secondary dark:text-secondaryDark lan-50-to-100">
							<!-- Icon -->
							<div class="flex items-center justify-center w-12 h-12 lg:h-16 lg:w-16">
								<Icon :techName="skill.name"></Icon>
							</div>
							<!-- Icon -->

							<div class="flex flex-col text-xs text-left justify-evenly">
								<h3 class="w-full text-[0.8rem] font-bold">{{ skill.title }}</h3>
								<!-- <h4 class="w-full">
									{{ getYearDiff(skill.year) < 1 ? "<" : "" }}{{ getYearDiff(skill.year) > 0 ?
										getYearDiff(skill.year) : 1 }}
										{{ getYearDiff(skill.year) > 1 ? "years" : "year" }}
								</h4> -->
							</div>
						</div>
						<!-- Skill Icon -->
					</div>
				</div>
			</template>
			<!-- New Ability -->
		</div>
	</section>
</template>

<script setup lang="ts">
import { inject } from "vue";
import Icon from "./icons/Icon.vue";
import { useDateTime } from "../helper/mixins/DateTime";
import DataUserSymbol from "@/helper/symbols/DataUserSymbol";

const data = inject(DataUserSymbol);
const { getYearDiff } = useDateTime();
</script>
