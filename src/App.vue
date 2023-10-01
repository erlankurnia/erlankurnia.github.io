<script setup>
import { RouterView } from "vue-router";
import NavbarComponent from "./components/NavbarComponent.vue";
import BackToTopComponent from "./components/BackToTopComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
// setInterval(() => location.reload(), 10000);
</script>

<template>
	<NavbarComponent></NavbarComponent>
	<div class="select-none lan-container-body">
		<!-- <PaperComponent></PaperComponent> -->
		<!-- <SwappingComponent></SwappingComponent> -->
		<RouterView />
	</div>
	<FooterComponent class="bg-tertiary"></FooterComponent>
	<BackToTopComponent></BackToTopComponent>
</template>
