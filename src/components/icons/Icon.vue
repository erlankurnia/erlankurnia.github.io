<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const props = defineProps<{ techName: string, default?: string }>()
const icons = {
	unity: ["unity", "unity3d", "unityengine"],
	android: ["android", "androidos"],
	androidstudio: ["androidstudio", "androidstudioide"],
	apple: ["apple", "ios", "macos"],
	arduino: ["arduino", "arduinoide"],
	azure: ["azure", "microsoftazure", "azureappservice"],
	blazor: ["blazor"],
	codeigniter: ["codeigniter", "ci"],
	copilot: ["copilot"],
	cpp: ["cpp", "c++"],
	csharp: ["csharp", "c#"],
	daisyui: ["daisyui"],
	dart: ["dart", 'dart-lang'],
	dotnet: ["dotnet", ".net"],
	efcore: ["efcore", "entityframeworkcore", "entity-framework-core"],
	firebase: ["firebase"],
	flutter: ["flutter"],
	java: ["java"],
	javascript: ["javascript", "js"],
	jetpackcompose: ["jetpackcompose", "kotlincompose"],
	json: ["json"],
	kotlin: ["kotlin"],
	laragon: ["laragon"],
	laravel: ["laravel"],
	laravelherd: ["laravelherd", "herd"],
	mariadb: ["mariadb"],
	maxst: ["maxst", "maxstar"],
	midtrans: ["midtrans"],
	mysql: ["mysql"],
	mongodb: ["mongodb", "mongo"],
	nginx: ["nginx"],
	nodejs: ["nodejs", "node"],
	onesignal: ["onesignal"],
	php: ["php"],
	postgresql: ["postgresql", "pqsql", "postgres"],
	scalar: ["scalar", "scalardocs"],
	supabase: ["supabase"],
	typescript: ["typescript", "ts"],
	xamarin: ["xamarin"],
	tailwindcss: ["tailwindcss", "tailwind"],
	vuejs: ["vuejs", "vue"],
	nuxtjs: ["nuxtjs", "nuxt", "nuxt-content"],
	primevue: ["primevue"],
	vuforia: ["vuforia", "vuforiaengine"],
	sony: ["sony"],
	github: ["github"],
	githubactions: ["githubactions"],
	windows11: ["windows11", "win11"],
	visualstudio: ["visualstudio", "msvisualstudio", "vs2019", "vs2017", "vs2015"],
	vscode: ["vscode", "visualstudiocode"],
	msedge: ["msedge", "microsoftedge"],
	postman: ["postman"],
	python: ["python", "py"],
	xampp: ["xampp"],
	xendit: ["xendit"],
	zoho: ["zoho"],
	notion: ["notion"],
	swift: ["swift"],
	xcode: ["xcode"],
	lenovo: ["lenovo"],
	docker: ["docker"],
	expressjs: ["expressjs", "express.js", "express"],
	lunacy: ["lunacy"],
	iot: ["iot", "internetofthing", "internetofthings"],
	microchip: ["microchip", "chipset", "microcontroller"],
	simpleapi: ["restapi", "restful", "cloudapi"],
	simpledatabase: ["database", "db", "datastore"],
	simplelayout: ["architecture", "layout"],
	simplepattern: ["pattern"],
	simpleruler: ["ruler", "design"],
	simpletesting: ["testing", "test"],
	simpleweb: ["website", "internet"],
};
const currentComponentName = (techName: string, icons: Record<string, string[]>) => {
	let name: string | null = null;
	for (const [key, value] of Object.entries(icons)) {
		for (let tag of value) {
			if (tag.toLowerCase() == techName.toLowerCase()) {
				name = key.charAt(0).toUpperCase() + key.substring(1);
			}
			if (name) break;
		}
		if (name) break;
	}
	return name ?? props.default ?? 'Simpleweb';
};
const currentComponent = defineAsyncComponent(() => import(`./svg/${currentComponentName(props.techName, icons)}.svg.vue`));
</script>

<template>
	<component :is="currentComponent"></component>
</template>
