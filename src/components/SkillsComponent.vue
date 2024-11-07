<template>
	<section v-if="dataUser != null && dataUser.skill?.skills" id="skills" class="pt-24 pb-16">
		<div class="container">
			<div class="w-full">
				<div class="mx-auto text-center">
					<h4 class="mb-2 lan-section-title">Skills</h4>
				</div>
			</div>
			<!-- Current Ability -->
			<template v-if="dataUser.skill">
				<div v-if="dataUser.skill.title" class="w-full p-4">
					<div class="mx-auto mb-4 text-center">
						<h2 class="lan-section-subtitle" v-html="dataUser.skill.title"></h2>
						<p class="lan-section-desc" v-html="dataUser.skill.description">
						</p>
					</div>
				</div>
				<div v-if="dataUser.skill.skills && dataUser.skill.skills.length > 0" class="w-full px-4">
					<div
						class="grid items-center justify-center grid-cols-2 gap-2 md:grid-cols-3 md:gap-5 xl:grid-cols-4 xl:gap-8">
						<!-- Skill Icon -->
						<div v-for="skill in dataUser.skill.skills"
							class="grid justify-between h-16 lg:h-20 grid-cols-[2fr_5fr] gap-3 p-2 text-secondary lan-50-to-100">
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
			<template v-if="dataUser.learn">
				<div v-if="dataUser.learn.title" class="w-full p-4 mt-8">
					<div class="mx-auto mb-4 text-center">
						<h2 class="lan-section-subtitle" v-html="dataUser.learn.title"></h2>
						<p class="lan-section-desc" v-html="dataUser.learn.description">
						</p>
					</div>
				</div>
				<div v-if="dataUser.learn.topics && dataUser.learn.topics.length > 0" class="w-full px-4">
					<div
						class="grid items-center justify-center grid-cols-2 gap-2 md:grid-cols-3 md:gap-5 xl:grid-cols-4 xl:gap-8">
						<!-- Skill Icon -->
						<div v-for="skill in dataUser.learn.topics"
							class="grid justify-between h-16 lg:h-20 grid-cols-[2fr_5fr] gap-3 p-2 text-secondary lan-50-to-100">
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
			<!-- New Ability -->
		</div>
	</section>
</template>

<script>
import { inject } from "vue";
import Icon from "./icons/Icon.vue";
import dateTimeMixins from "../helper/mixins/dateTime";

export default {
	mixins: [dateTimeMixins],
	name: "SkillsComponent",
	components: { Icon },
	setup() {
		const { dataUser } = inject("dataUser");
		return {
			dataUser,
		};
	},
};
</script>
