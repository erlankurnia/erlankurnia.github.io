<script setup>
import { RouterView } from "vue-router";
import NavbarComponent from "./components/NavbarComponent.vue";
import BackToTopComponent from "./components/BackToTopComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
// import PaperComponent from "./components/PaperComponent.vue";
// import SwappingComponent from "./components/SwappingComponent.vue";

// setInterval(() => location.reload(), 10000);
</script>

<template>
	<NavbarComponent></NavbarComponent>
	<div class="select-none lan-container-body">
		<!-- <PaperComponent></PaperComponent> -->
		<!-- <SwappingComponent></SwappingComponent> -->
		<RouterView />
	</div>
	<FooterComponent class="bg-bgPrimary"></FooterComponent>
	<BackToTopComponent></BackToTopComponent>
</template>
