<template>
	<template v-if="isContains(('' + techName).toLowerCase().replace(' ', ''), unityKeys)">
		<UnityIcon class="text-black"></UnityIcon>
	</template>
	<template v-if="isContains(('' + techName).toLowerCase().replace(' ', ''), csharpKeys)">
		<CSharpIcon class="text-[#512BD4]"></CSharpIcon>
	</template>
	<template v-if="isContains(('' + techName).toLowerCase().replace(' ', ''), maxstKeys)">
		<MaxstIcon class=""></MaxstIcon>
	</template>
	<template v-if="isContains(('' + techName).toLowerCase().replace(' ', ''), vuforiaKeys)">
		<VuforiaIcon class=""></VuforiaIcon>
	</template>
	<template v-if="isContains(('' + techName).toLowerCase().replace(' ', ''), onesignalKeys)">
		<OnesignalIcon class=""></OnesignalIcon>
	</template>
	<template v-if="isContains(('' + techName).toLowerCase().replace(' ', ''), arduinoKeys)">
		<ArduinoIcon class="text-[#00878F]"></ArduinoIcon>
	</template>
	<template v-if="isContains(('' + techName).toLowerCase().replace(' ', ''), nodejsKeys)">
		<NodejsIcon class="text-[#339933]"></NodejsIcon>
	</template>
	<template v-if="isContains(('' + techName).toLowerCase().replace(' ', ''), phpKeys)">
		<PhpIcon class="text-[#777BB4]"></PhpIcon>
	</template>
	<template v-if="isContains(('' + techName).toLowerCase().replace(' ', ''), laravelKeys)">
		<LaravelIcon class="text-[#FF2D20]"></LaravelIcon>
	</template>
	<template v-if="isContains(('' + techName).toLowerCase().replace(' ', ''), postgresqlKeys)">
		<PostgresqlIcon class="text-[#4169E1]"></PostgresqlIcon>
	</template>
	<template v-if="isContains(('' + techName).toLowerCase().replace(' ', ''), mysqlKeys)">
		<MysqlIcon class="text-[#4479A1]"></MysqlIcon>
	</template>
	<template v-if="isContains(('' + techName).toLowerCase().replace(' ', ''), firebaseKeys)">
		<FirebaseIcon class="text-[#FFCA28]"></FirebaseIcon>
	</template>
	<template v-if="isContains(('' + techName).toLowerCase().replace(' ', ''), androidKeys)">
		<AndroidIcon class="text-[#3DDC84]"></AndroidIcon>
	</template>
	<template v-if="isContains(('' + techName).toLowerCase().replace(' ', ''), androidStudioKeys)">
		<AndroidstudioIcon class="text-[#3DDC84]"></AndroidstudioIcon>
	</template>
	<template v-if="isContains(('' + techName).toLowerCase().replace(' ', ''), codeigniterKeys)">
		<CodeigniterIcon class="text-[#EF4223]"></CodeigniterIcon>
	</template>
	<template v-if="isContains(('' + techName).toLowerCase().replace(' ', ''), javascriptKeys)">
		<JavascriptIcon class="text-[#F7DF1E]"></JavascriptIcon>
	</template>
	<template v-if="isContains(('' + techName).toLowerCase().replace(' ', ''), vuejsKeys)">
		<VuejsIcon class="text-[#4FC08D]"></VuejsIcon>
	</template>
	<template v-if="isContains(('' + techName).toLowerCase().replace(' ', ''), appleKeys)">
		<AppleIcon class="text-[#000000]"></AppleIcon>
	</template>
	<template v-if="isContains(('' + techName).toLowerCase().replace(' ', ''), jsonKeys)">
		<JsonIcon class="text-[#000000]"></JsonIcon>
	</template>
	<template v-if="isContains(('' + techName).toLowerCase().replace(' ', ''), kotlinKeys)">
		<KotlinIcon class="text-[#7F52FF]"></KotlinIcon>
	</template>
	<template v-if="isContains(('' + techName).toLowerCase().replace(' ', ''), tailwindcssKeys)">
		<TailwindcssIcon class="text-[#06B6D4]"></TailwindcssIcon>
	</template>
	<template v-if="isContains(('' + techName).toLowerCase().replace(' ', ''), sonyKeys)">
		<SonyIcon class="text-[#000000]"></SonyIcon>
	</template>
	<template v-if="isContains(('' + techName).toLowerCase().replace(' ', ''), githubKeys)">
		<GithubIcon class="text-[#181717]"></GithubIcon>
	</template>
	<template v-if="isContains(('' + techName).toLowerCase().replace(' ', ''), windows11Keys)">
		<Windows11Icon class="text-[#0078D4]"></Windows11Icon>
	</template>
	<template v-if="isContains(('' + techName).toLowerCase().replace(' ', ''), visualstudioKeys)">
		<VisualstudioIcon class="text-[#5C2D91]"></VisualstudioIcon>
	</template>
	<template v-if="isContains(('' + techName).toLowerCase().replace(' ', ''), vscodeKeys)">
		<VscodeIcon class="text-[#007ACC]"></VscodeIcon>
	</template>
	<template v-if="isContains(('' + techName).toLowerCase().replace(' ', ''), msedgeKeys)">
		<MsedgeIcon class="text-[#0078D7]"></MsedgeIcon>
	</template>
	<template v-if="isContains(('' + techName).toLowerCase().replace(' ', ''), postmanKeys)">
		<PostmanIcon class="text-[#FF6C37]"></PostmanIcon>
	</template>
	<template v-if="isContains(('' + techName).toLowerCase().replace(' ', ''), zohoKeys)">
		<ZohoIcon class="text-[#E42527]"></ZohoIcon>
	</template>
	<template v-if="isContains(('' + techName).toLowerCase().replace(' ', ''), xamppKeys)">
		<XamppIcon class="text-[#FB7A24]"></XamppIcon>
	</template>
	<template v-if="isContains(('' + techName).toLowerCase().replace(' ', ''), xcodeKeys)">
		<XcodeIcon class="text-[#147EFB]"></XcodeIcon>
	</template>
	<template v-if="isContains(('' + techName).toLowerCase().replace(' ', ''), lenovoKeys)">
		<LenovoIcon class="text-[#E2231A]"></LenovoIcon>
	</template>
</template>

<script>
import { defineAsyncComponent } from "vue";
const importSVGIcon = (iconName) => import(`./svg/${iconName}.svg.vue`);

export default {
	name: "Icon",
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
		MaxstIcon: defineAsyncComponent(() => importSVGIcon("Maxst")),
		NodejsIcon: defineAsyncComponent(() => importSVGIcon("Nodejs")),
		OnesignalIcon: defineAsyncComponent(() => importSVGIcon("Onesignal")),
		PhpIcon: defineAsyncComponent(() => importSVGIcon("Php")),
		PostgresqlIcon: defineAsyncComponent(() => importSVGIcon("Postgresql")),
		TailwindcssIcon: defineAsyncComponent(() => importSVGIcon("Tailwindcss")),
		UnityIcon: defineAsyncComponent(() => importSVGIcon("Unity")),
		VuejsIcon: defineAsyncComponent(() => importSVGIcon("Vuejs")),
		VuforiaIcon: defineAsyncComponent(() => importSVGIcon("Vuforia")),
		SonyIcon: defineAsyncComponent(() => importSVGIcon("Sony")),
		GithubIcon: defineAsyncComponent(() => importSVGIcon("Github")),
		Windows11Icon: defineAsyncComponent(() => importSVGIcon("Windows11")),
		VisualstudioIcon: defineAsyncComponent(() => importSVGIcon("Visualstudio")),
		VscodeIcon: defineAsyncComponent(() => importSVGIcon("Vscode")),
		MsedgeIcon: defineAsyncComponent(() => importSVGIcon("Msedge")),
		PostmanIcon: defineAsyncComponent(() => importSVGIcon("Postman")),
		XamppIcon: defineAsyncComponent(() => importSVGIcon("Xampp")),
		ZohoIcon: defineAsyncComponent(() => importSVGIcon("Zoho")),
		XcodeIcon: defineAsyncComponent(() => importSVGIcon("Xcode")),
		LenovoIcon: defineAsyncComponent(() => importSVGIcon("Lenovo")),
	},
	props: ["techName"],
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
			maxstKeys: ["maxst", "maxstar"],
			nodejsKeys: ["nodejs", "node"],
			onesignalKeys: ["onesignal"],
			phpKeys: ["php"],
			postgresqlKeys: ["postgresql", "pqsql", "postgres"],
			tailwindcssKeys: ["tailwindcss", "tailwind"],
			vuejsKeys: ["vuejs", "vue"],
			vuforiaKeys: ["vuforia", "vuforiaengine"],
			sonyKeys: ["sony"],
			githubKeys: ["github"],
			windows11Keys: ["windows11", "win11"],
			visualstudioKeys: ["visualstudio", "msvisualstudio", "vs2019", "vs2017", "vs2015"],
			vscodeKeys: ["vscode", "visualstudiocode"],
			msedgeKeys: ["msedge", "microsoftedge"],
			postmanKeys: ["postman"],
			xamppKeys: ["xampp"],
			zohoKeys: ["zoho"],
			xcodeKeys: ["xcode"],
			lenovoKeys: ["lenovo"],
		};
	},
	methods: {
		isContains(techName, keys) {
			for (const key of keys) {
				if (key == techName) return true;
			}
			return false;
		},
	},
};
</script>
