<template>
	<NavbarComponent></NavbarComponent>
	<div class="lan-container-body">
		<!-- <PaperComponent></PaperComponent> -->
		<!-- <SwappingComponent></SwappingComponent> -->
		<HeroComponent></HeroComponent>
		<AboutComponent></AboutComponent>
		<PortfolioComponent></PortfolioComponent>
		<SkillsComponent></SkillsComponent>
		<!-- <RouterView /> -->
	</div>
</template>

<script setup>
import { RouterView } from "vue-router";
import NavbarComponent from "./components/NavbarComponent.vue";
import HeroComponent from "./components/HeroComponent.vue";
import AboutComponent from "./components/AboutComponent.vue";
import PortfolioComponent from "./components/PortfolioComponent.vue";
import SkillsComponent from "./components/SkillsComponent.vue";
import ContactComponent from "./components/ContactComponent.vue";
// import PaperComponent from "./components/PaperComponent.vue";
// import SwappingComponent from "./components/SwappingComponent.vue";

// setInterval(() => location.reload(), 10000);
</script>
