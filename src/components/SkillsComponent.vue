<template>
	<section id="skills" class="pt-24 pb-16">
		<div class="container">
			<div class="w-full p-4">
				<div class="mx-auto mb-16 text-center">
					<h4 class="mb-2 lan-section-title">Skills</h4>
					<h2 class="mb-4 text-3xl font-bold text-dark sm:text-4xl lg:5xl">
						What is My <span class="text-primary">Ability</span>
					</h2>
					<p class="font-medium text-md text-secondary md:text-lg">
						Some of the skills that I can do and how long I have used them.<br />I also use it quite often in work and personal
						projects.
					</p>
				</div>
			</div>
			<div class="w-full px-4">
				<div class="flex flex-wrap items-center justify-center">
					<!-- Skill Icon -->
					<div v-for="skill in skills" class="max-w-[64px] mx-4 py-4 text-[#FFCA28] lan-50-to-100 lg:mx6 xl:mx-8 flex flex-col">
						<!-- Icon -->
						<UnityIcon class="text-black" v-if="skill.name == 'unity'"></UnityIcon>
						<CSharpIcon class="text-[#512BD4]" v-if="skill.name == 'csharp'"></CSharpIcon>
						<ArduinoIcon class="text-[#00878F]" v-if="skill.name == 'arduino'"></ArduinoIcon>
						<NodejsIcon class="text-[#339933]" v-if="skill.name == 'nodejs'"></NodejsIcon>
						<PhpIcon class="text-[#777BB4]" v-if="skill.name == 'php'"></PhpIcon>
						<LaravelIcon class="text-[#FF2D20]" v-if="skill.name == 'laravel'"></LaravelIcon>
						<PostgresqlIcon class="text-[#4169E1]" v-if="skill.name == 'postgresql'"></PostgresqlIcon>
						<FirebaseIcon class="text-[#FFCA28]" v-if="skill.name == 'firebase'"></FirebaseIcon>
						<!-- Icon -->
						<h4 class="mt-3 text-sm font-bold min-w-max text-secondary">{{ new Date().getFullYear() - skill.year }} year(s)</h4>
					</div>
					<!-- Skill Icon -->
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { ref, defineAsyncComponent } from "vue";

const importSVGIcon = (iconName) => import(`./icons/${iconName}.svg.vue`);

export default {
	name: "SkillsComponent",
	components: {
		UnityIcon: defineAsyncComponent(() => importSVGIcon("Unity")),
		CSharpIcon: defineAsyncComponent(() => importSVGIcon("Csharp")),
		ArduinoIcon: defineAsyncComponent(() => importSVGIcon("Arduino")),
		NodejsIcon: defineAsyncComponent(() => importSVGIcon("Nodejs")),
		LaravelIcon: defineAsyncComponent(() => importSVGIcon("Laravel")),
		PostgresqlIcon: defineAsyncComponent(() => importSVGIcon("Postgresql")),
		PhpIcon: defineAsyncComponent(() => importSVGIcon("Php")),
		FirebaseIcon: defineAsyncComponent(() => importSVGIcon("Firebase")),
	},
	setup() {
		const skills = ref([
			{
				name: "unity",
				year: 2017,
			},
			{
				name: "csharp",
				year: 2017,
			},
			{
				name: "arduino",
				year: 2021,
			},
			{
				name: "nodejs",
				year: 2020,
			},
			{
				name: "php",
				year: 2018,
			},
			{
				name: "laravel",
				year: 2022,
			},
			{
				name: "postgresql",
				year: 2021,
			},
			{
				name: "firebase",
				year: 2021,
			},
		]);
		return { skills };
	},
};
</script>
