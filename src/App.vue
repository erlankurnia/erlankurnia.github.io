<template>
	<HeaderComponent></HeaderComponent>
	<div class="container-body">
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
import HeaderComponent from "./components/NavbarComponent.vue";
import HeroComponent from "./components/HeroComponent.vue";
import AboutComponent from "./components/AboutComponent.vue";
import PortfolioComponent from "./components/PortfolioComponent.vue";
import SkillsComponent from "./components/SkillsComponent.vue";
// import SwappingComponent from "./components/SwappingComponent.vue";
</script>
