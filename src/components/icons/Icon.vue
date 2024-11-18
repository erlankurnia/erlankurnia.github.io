<template>
	<component :is="currentComponent"></component>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const props = defineProps<{ techName: string }>()
const icons = {
	unity: ["unity", "unity3d", "unityengine"],
	android: ["android", "androidos"],
	androidstudio: ["androidstudio", "androidstudioide"],
	arduino: ["arduino", "arduinoide"],
	csharp: ["csharp", "c#"],
	cpp: ["cpp", "c++"],
	dotnet: ["dotnet", ".net"],
	xamarin: ["xamarin"],
	codeigniter: ["codeigniter", "ci"],
	firebase: ["firebase"],
	apple: ["apple", "ios", "macos"],
	javascript: ["javascript", "js"],
	typescript: ["typescript", "ts"],
	json: ["json"],
	kotlin: ["kotlin"],
	java: ["java"],
	laravel: ["laravel"],
	laragon: ["laragon"],
	laravelherd: ["laravelherd", "herd"],
	mariadb: ["mariadb"],
	mysql: ["mysql"],
	maxst: ["maxst", "maxstar"],
	nodejs: ["nodejs", "node"],
	onesignal: ["onesignal"],
	php: ["php"],
	postgresql: ["postgresql", "pqsql", "postgres"],
	tailwindcss: ["tailwindcss", "tailwind"],
	vuejs: ["vuejs", "vue"],
	vuforia: ["vuforia", "vuforiaengine"],
	sony: ["sony"],
	github: ["github"],
	windows11: ["windows11", "win11"],
	visualstudio: ["visualstudio", "msvisualstudio", "vs2019", "vs2017", "vs2015"],
	vscode: ["vscode", "visualstudiocode"],
	msedge: ["msedge", "microsoftedge"],
	postman: ["postman"],
	python: ["python", "py"],
	xampp: ["xampp"],
	zoho: ["zoho"],
	notion: ["notion"],
	swift: ["swift"],
	xcode: ["xcode"],
	lenovo: ["lenovo"],
	docker: ["docker"],
	expressjs: ["expressjs", "express.js", "express"],
	lunacy: ["lunacy"],
};
const currentComponentName = (techName: string, icons: Record<string, string[]>) => {
	let name = "";
	for (const [key, value] of Object.entries(icons)) {
		for (let tag of value) {
			if (tag.toLowerCase() == techName.toLowerCase()) {
				name = key.charAt(0).toUpperCase() + key.substring(1);
			}

			if (name) break;
		}
		if (name) break;
	}

	return name;
};
const currentComponent = defineAsyncComponent(() => import(`./svg/${currentComponentName(props.techName, icons)}.svg.vue`));
</script>
