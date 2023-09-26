<template>
	<NavbarComponent></NavbarComponent>
	<div class="select-none lan-container-body">
		<!-- <PaperComponent></PaperComponent> -->
		<!-- <SwappingComponent></SwappingComponent> -->
		<HeroComponent></HeroComponent>
		<AboutComponent></AboutComponent>
		<StoryComponent></StoryComponent>
		<SkillsComponent></SkillsComponent>
		<ContactComponent></ContactComponent>
		<BackToTopComponent></BackToTopComponent>
		<FooterComponent></FooterComponent>
		<!-- <RouterView /> -->
	</div>
</template>

<script setup>
import { RouterView } from "vue-router";
import NavbarComponent from "./components/NavbarComponent.vue";
import HeroComponent from "./components/HeroComponent.vue";
import AboutComponent from "./components/AboutComponent.vue";
import StoryComponent from "./components/StoryComponent.vue";
import SkillsComponent from "./components/SkillsComponent.vue";
import ContactComponent from "./components/ContactComponent.vue";
import BackToTopComponent from "./components/BackToTopComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
// import PaperComponent from "./components/PaperComponent.vue";
// import SwappingComponent from "./components/SwappingComponent.vue";

// setInterval(() => location.reload(), 10000);
</script>
