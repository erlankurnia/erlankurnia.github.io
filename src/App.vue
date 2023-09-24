<template>
	<NavbarComponent></NavbarComponent>
	<div class="container-body">
		<!-- <SwappingComponent></SwappingComponent> -->
		<HeroComponent></HeroComponent>
		<AboutComponent></AboutComponent>
		<PortfolioComponent></PortfolioComponent>
		<SkillsComponent></SkillsComponent>
		<ContactComponent></ContactComponent>
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
// import SwappingComponent from "./components/SwappingComponent.vue";
</script>
