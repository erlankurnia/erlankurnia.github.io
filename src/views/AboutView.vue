<template>
	<div class="page-up">
		<ProfileComponent class="bg-quaternary"></ProfileComponent>
		<!-- <PortfolioComponent class="bg-quaternary"></PortfolioComponent> -->
		<StoryComponent class="bg-tertiary"></StoryComponent>
		<SkillsComponent class="bg-quaternary"></SkillsComponent>
		<EquipmentComponent class="bg-tertiary"></EquipmentComponent>
		<NextPageComponent path="/notes" label="Goto Notes"></NextPageComponent>
	</div>
</template>

<script setup>
import { onBeforeUnmount } from 'vue';
import { useHead } from '@unhead/vue';
import ProfileComponent from "../components/ProfileComponent.vue";
import StoryComponent from "../components/StoryComponent.vue";
import PortfolioComponent from "../components/PortfolioComponent.vue";
import SkillsComponent from "../components/SkillsComponent.vue";
import EquipmentComponent from "../components/EquipmentComponent.vue";
import NextPageComponent from '../components/NextPageComponent.vue';

const aboutHead = useHead({
	title: "About Erlan Kurnia",
});

onBeforeUnmount(() => aboutHead.dispose());
</script>
