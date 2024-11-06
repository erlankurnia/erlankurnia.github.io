<template>
	<!-- <LoadingFullPageComponent>
		<template #onSuccess>
		</template>
</LoadingFullPageComponent> -->
	<NavbarComponent class="hidden sm:block"></NavbarComponent>
	<div class="select-none lan-container-body">
		<RouterView />
	</div>
	<FooterComponent class="bg-tertiary"></FooterComponent>
	<ScrollDownComponent></ScrollDownComponent>
	<BackToTopComponent></BackToTopComponent>
	<NavbarMobileComponent class="block sm:hidden"></NavbarMobileComponent>

	<!-- <LoadingComponent class="fixed z-[8888] top-0 right-0 bottom-0 left-0 h-screen"></LoadingComponent> -->

</template>

<script setup>
import { ref, onMounted, provide } from "vue";
import { RouterView } from "vue-router";
import { useHead } from '@unhead/vue';
import NavbarComponent from "./components/NavbarComponent.vue";
import NavbarMobileComponent from "./components/NavbarMobileComponent.vue";
// import LoadingComponent from "./components/LoadingComponent.vue";
// import LoadingFullPageComponent from "./components/LoadingFullPageComponent.vue";
import BackToTopComponent from "./components/BackToTopComponent.vue";
import ScrollDownComponent from "./components/ScrollDownComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

useHead({
	meta: [
		{
			charset: 'utf-8'
		},
		{
			name: 'viewport',
			content: 'width=device-width, initial-scale=1'
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
	]
});
const dataUser = ref({});
const nameParts = ref([]);

async function getDataUser() {
	const res = await fetch("/data_user.json");
	dataUser.value = await res.json();
	nameParts.value = ("" + dataUser.value.profile.name.value).split(" ");
}

onMounted(getDataUser);
provide("dataUser", { dataUser, nameParts });
</script>
