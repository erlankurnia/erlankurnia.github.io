<template>
	<div :class="{ 'dark': isDarkMode }">
		<NavbarComponent class="hidden sm:block"></NavbarComponent>
		<div v-if="dataUser" class="select-none lan-container-body">
			<router-view v-slot="{ Component }">
				<transition name="page-up" mode="out-in">
					<component :is="Component" />
				</transition>
			</router-view>
		</div>
		<FooterComponent></FooterComponent>
		<ScrollUpComponent></ScrollUpComponent>
		<ScrollDownComponent></ScrollDownComponent>
		<ToggleDarkModeComponent></ToggleDarkModeComponent>
		<NavbarMobileComponent class="block sm:hidden"></NavbarMobileComponent>
	</div>
</template>

<script setup>
import { ref, onMounted, provide } from "vue";
import { RouterView } from "vue-router";
import { useHead } from "@unhead/vue";
import tools from "./helper/tools";
import NavbarComponent from "./components/NavbarComponent.vue";
import NavbarMobileComponent from "./components/NavbarMobileComponent.vue";
import ScrollUpComponent from "./components/ScrollUpComponent.vue";
import ScrollDownComponent from "./components/ScrollDownComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import ToggleDarkModeComponent from "./components/ToggleDarkModeComponent.vue";

useHead({
	meta: [
		{
			charset: "utf-8",
		},
		{
			name: "viewport",
			content: "width=device-width, initial-scale=1",
		},
		{
			property: "og:type",
			content: "website",
		},
		{
			property: "og:url",
			content: "https://erlankurnia.github.io/",
		},
		{
			property: "twitter:url",
			content: "https://erlankurnia.github.io/",
		},
		{
			property: "twitter:card",
			content: "summary",
		},
	],
});
const isDarkMode = ref(false);
const dataUser = ref({});
const nameParts = ref([]);

async function getDataUser() {
	dataUser.value = await tools.getDataUser();
	// const res = await fetch("/data_user.json");
	// dataUser.value = await res.json();
	nameParts.value = ("" + dataUser.value.profile.name.value).split(" ");
}

onMounted(getDataUser);
provide("dataUser", { dataUser, nameParts });
provide("darkMode", { isDarkMode });
</script>
