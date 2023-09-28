<script setup>
import HeroComponent from "../components/HeroComponent.vue";
import AboutComponent from "../components/AboutComponent.vue";
import StoryComponent from "../components/StoryComponent.vue";
import SkillsComponent from "../components/SkillsComponent.vue";
import ContactComponent from "../components/ContactComponent.vue";
</script>

<template>
	<HeroComponent></HeroComponent>
	<AboutComponent class="bg-bgSecondary"></AboutComponent>
	<StoryComponent class="bg-bgPrimary"></StoryComponent>
	<SkillsComponent class="bg-bgSecondary"></SkillsComponent>
	<ContactComponent class="bg-bgPrimary"></ContactComponent>
</template>
