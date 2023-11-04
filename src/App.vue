<template>
	<NavbarComponent></NavbarComponent>
	<div class="lan-container-body">
		<!-- <PaperComponent></PaperComponent> -->
		<!-- <SwappingComponent></SwappingComponent> -->
		<RouterView />
	</div>
	<FooterComponent class="bg-tertiary"></FooterComponent>
	<BackToTopComponent></BackToTopComponent>
</template>

<script setup>
import { RouterView } from "vue-router";
import NavbarComponent from "./components/NavbarComponent.vue";
import BackToTopComponent from "./components/BackToTopComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<script>
import { ref, provide } from "vue";
export default {
	name: "App",
	async created() {
		const dataUser = ref({});
		let res = await fetch("/data_user.json");
		res = await res.json();
		dataUser.value = res;
		// console.log(dataUser);
		provide("dataUser", dataUser);
	},
};
</script>
