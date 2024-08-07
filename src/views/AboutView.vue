<template>
	<ProfileComponent class="bg-quaternary"></ProfileComponent>
	<!-- <ProfileComponent class="bg-quaternary" :dataUser="dataUser" :nameParts="nameParts"></ProfileComponent> -->
	<StoryComponent class="bg-tertiary"></StoryComponent>
	<SkillsComponent class="bg-quaternary"></SkillsComponent>
	<EquipmentComponent class="bg-tertiary"></EquipmentComponent>
</template>

<script setup>
import { onBeforeUnmount } from 'vue';
import { useHead } from '@unhead/vue';
import ProfileComponent from "../components/ProfileComponent.vue";
import StoryComponent from "../components/StoryComponent.vue";
import SkillsComponent from "../components/SkillsComponent.vue";
import EquipmentComponent from "../components/EquipmentComponent.vue";

const aboutHead = useHead({
	title: "About Erlan Kurnia",
});

onBeforeUnmount(() => aboutHead.dispose());
</script>
