<template>
	<section v-if="dataUser != null && dataUser.skill?.skills" id="skills" class="pt-24 pb-16">
		<div class="container">
			<div class="w-full">
				<div class="mx-auto text-center">
					<h4 class="mb-2 lan-section-title">Skills</h4>
				</div>
			</div>
			<!-- Current Ability -->
			<div class="w-full p-4">
				<div class="mx-auto mb-4 text-center">
					<h2 class="lan-section-subtitle" v-html="dataUser.skill.title"></h2>
					<p class="font-medium text-md text-secondary md:text-lg" v-html="dataUser.skill.description"></p>
				</div>
			</div>
			<div class="w-full px-4">
				<div class="flex flex-wrap items-center justify-center">
					<!-- Skill Icon -->
					<div
						v-for="skill in dataUser.skill.skills"
						class="max-w-[52px] mx-4 py-4 text-[#FFCA28] lan-50-to-100 xl:mx-6 flex flex-col"
					>
						<!-- Icon -->
						<TechnologyIcon :techName="skill.name"></TechnologyIcon>
						<!-- Icon -->
						<h4 class="mt-3 text-xs font-bold text-center min-w-max text-secondary">
							{{ getYearDiff(skill.year) < 1 ? "<" : "" }}{{ getYearDiff(skill.year) > 0 ? getYearDiff(skill.year) : 1 }}
							{{ getYearDiff(skill.year) > 1 ? "years" : "year" }}
						</h4>
					</div>
					<!-- Skill Icon -->
				</div>
			</div>
			<!-- Current Ability -->

			<!-- New Ability -->
			<template v-if="dataUser.learn">
				<div v-if="dataUser.learn.title" class="w-full p-4 mt-8">
					<div class="mx-auto mb-4 text-center">
						<h2 class="lan-section-subtitle" v-html="dataUser.learn.title"></h2>
						<p class="font-medium text-md text-secondary md:text-lg" v-html="dataUser.learn.description"></p>
					</div>
				</div>
				<div v-if="dataUser.learn.topics && dataUser.learn.topics.length > 0" class="w-full px-4">
					<div class="flex flex-wrap items-center justify-center">
						<!-- Skill Icon -->
						<div
							v-for="skill in dataUser.learn.topics"
							class="max-w-[52px] mx-4 py-4 text-[#FFCA28] lan-50-to-100 xl:mx-6 flex flex-col"
						>
							<!-- Icon -->
							<TechnologyIcon :techName="skill.name"></TechnologyIcon>
							<!-- Icon -->
							<h4 class="mt-3 text-xs font-bold text-center min-w-max text-secondary">
								{{ getYearDiff(skill.year) < 1 ? "<" : "" }}{{ getYearDiff(skill.year) > 0 ? getYearDiff(skill.year) : 1 }}
								{{ getYearDiff(skill.year) > 1 ? "years" : "year" }}
							</h4>
						</div>
						<!-- Skill Icon -->
					</div>
				</div>
			</template>
			<!-- New Ability -->
		</div>
	</section>
</template>

<script>
import { inject } from "vue";
import TechnologyIcon from "./icons/Icon.vue";
import dateTimeMixins from "../helper/mixins/dateTime";

export default {
	mixins: [dateTimeMixins],
	name: "SkillsComponent",
	components: { TechnologyIcon },
	setup() {
		const { dataUser } = inject("dataUser");
		return {
			dataUser,
		};
	},
};
</script>
