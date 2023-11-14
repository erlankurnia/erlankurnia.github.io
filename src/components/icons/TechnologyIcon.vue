<template>
	<template v-if="isContains(('' + skillName).toLowerCase().replace(' ', ''), unityKeys)">
		<UnityIcon class="text-black"></UnityIcon>
	</template>
	<template v-if="isContains(('' + skillName).toLowerCase().replace(' ', ''), csharpKeys)">
		<CSharpIcon class="text-[#512BD4]"></CSharpIcon>
	</template>
	<template v-if="isContains(('' + skillName).toLowerCase().replace(' ', ''), arduinoKeys)">
		<ArduinoIcon class="text-[#00878F]"></ArduinoIcon>
	</template>
	<template v-if="isContains(('' + skillName).toLowerCase().replace(' ', ''), nodejsKeys)">
		<NodejsIcon class="text-[#339933]"></NodejsIcon>
	</template>
	<template v-if="isContains(('' + skillName).toLowerCase().replace(' ', ''), phpKeys)">
		<PhpIcon class="text-[#777BB4]"></PhpIcon>
	</template>
	<template v-if="isContains(('' + skillName).toLowerCase().replace(' ', ''), laravelKeys)">
		<LaravelIcon class="text-[#FF2D20]"></LaravelIcon>
	</template>
	<template v-if="isContains(('' + skillName).toLowerCase().replace(' ', ''), postgresqlKeys)">
		<PostgresqlIcon class="text-[#4169E1]"></PostgresqlIcon>
	</template>
	<template v-if="isContains(('' + skillName).toLowerCase().replace(' ', ''), mysqlKeys)">
		<MysqlIcon class="text-[#4479A1]"></MysqlIcon>
	</template>
	<template v-if="isContains(('' + skillName).toLowerCase().replace(' ', ''), firebaseKeys)">
		<FirebaseIcon class="text-[#FFCA28]"></FirebaseIcon>
	</template>
	<template v-if="isContains(('' + skillName).toLowerCase().replace(' ', ''), androidKeys)">
		<AndroidIcon class="text-[#3DDC84]"></AndroidIcon>
	</template>
	<template v-if="isContains(('' + skillName).toLowerCase().replace(' ', ''), androidStudioKeys)">
		<AndroidstudioIcon class="text-[#3DDC84]"></AndroidstudioIcon>
	</template>
	<template v-if="isContains(('' + skillName).toLowerCase().replace(' ', ''), codeigniterKeys)">
		<CodeigniterIcon class="text-[#EF4223]"></CodeigniterIcon>
	</template>
	<template v-if="isContains(('' + skillName).toLowerCase().replace(' ', ''), javascriptKeys)">
		<JavascriptIcon class="text-[#000000]"></JavascriptIcon>
	</template>
	<template v-if="isContains(('' + skillName).toLowerCase().replace(' ', ''), vuejsKeys)">
		<VuejsIcon class="text-[#4FC08D]"></VuejsIcon>
	</template>
	<template v-if="isContains(('' + skillName).toLowerCase().replace(' ', ''), appleKeys)">
		<AppleIcon class="text-[#000000]"></AppleIcon>
	</template>
	<template v-if="isContains(('' + skillName).toLowerCase().replace(' ', ''), jsonKeys)">
		<JsonIcon class="text-[#000000]"></JsonIcon>
	</template>
	<template v-if="isContains(('' + skillName).toLowerCase().replace(' ', ''), kotlinKeys)">
		<KotlinIcon class="text-[#000000]"></KotlinIcon>
	</template>
	<template v-if="isContains(('' + skillName).toLowerCase().replace(' ', ''), tailwindcssKeys)">
		<TailwindcssIcon class="text-[#06B6D4]"></TailwindcssIcon>
	</template>
</template>

<script>
import { defineAsyncComponent } from "vue";
const importSVGIcon = (iconName) => import(`./svg/${iconName}.svg.vue`);

export default {
	name: "TechnologyIcon",
	components: {
		AndroidIcon: defineAsyncComponent(() => importSVGIcon("Android")),
		AndroidstudioIcon: defineAsyncComponent(() => importSVGIcon("Androidstudio")),
		ArduinoIcon: defineAsyncComponent(() => importSVGIcon("Arduino")),
		CSharpIcon: defineAsyncComponent(() => importSVGIcon("Csharp")),
		CodeigniterIcon: defineAsyncComponent(() => importSVGIcon("Codeigniter")),
		FirebaseIcon: defineAsyncComponent(() => importSVGIcon("Firebase")),
		AppleIcon: defineAsyncComponent(() => importSVGIcon("Apple")),
		JavascriptIcon: defineAsyncComponent(() => importSVGIcon("Javascript")),
		JsonIcon: defineAsyncComponent(() => importSVGIcon("Json")),
		KotlinIcon: defineAsyncComponent(() => importSVGIcon("Kotlin")),
		LaravelIcon: defineAsyncComponent(() => importSVGIcon("Laravel")),
		MysqlIcon: defineAsyncComponent(() => importSVGIcon("Mysql")),
		NodejsIcon: defineAsyncComponent(() => importSVGIcon("Nodejs")),
		PhpIcon: defineAsyncComponent(() => importSVGIcon("Php")),
		PostgresqlIcon: defineAsyncComponent(() => importSVGIcon("Postgresql")),
		TailwindcssIcon: defineAsyncComponent(() => importSVGIcon("Tailwindcss")),
		UnityIcon: defineAsyncComponent(() => importSVGIcon("Unity")),
		VuejsIcon: defineAsyncComponent(() => importSVGIcon("Vuejs")),
	},
	props: ["skillName"],
	data() {
		return {
			unityKeys: ["unity", "unity3d", "unityengine"],
			androidKeys: ["android", "androidos"],
			androidStudioKeys: ["androidstudio", "androidstudioide"],
			arduinoKeys: ["arduino", "arduinoide"],
			csharpKeys: ["csharp", "c#"],
			codeigniterKeys: ["codeigniter", "ci"],
			firebaseKeys: ["firebase"],
			appleKeys: ["apple", "ios", "macos"],
			javascriptKeys: ["javascript", "js"],
			jsonKeys: ["json"],
			kotlinKeys: ["kotlin"],
			laravelKeys: ["laravel"],
			mysqlKeys: ["mysql"],
			nodejsKeys: ["nodejs", "node"],
			phpKeys: ["php"],
			postgresqlKeys: ["postgresql", "pqsql", "postgres"],
			tailwindcssKeys: ["tailwindcss", "tailwind"],
			vuejsKeys: ["vuejs", "vue"],
		};
	},
	methods: {
		isContains(skillName, keys) {
			for (const key of keys) {
				if (key == skillName) return true;
			}
			return false;
		},
	},
};
</script>
