<script setup lang="ts">
import { onBeforeUnmount } from 'vue';
import { useHead } from '@unhead/vue';
import ProfileComponent from "@/components/ProfileComponent.vue";
import StoryComponent from "@/components/StoryComponent.vue";
import SkillsComponent from "@/components/SkillsComponent.vue";
import EquipmentComponent from "@/components/EquipmentComponent.vue";
import NextPageComponent from '@/components/NextPageComponent.vue';

const aboutHead = useHead({
	title: "About Erlan Kurnia",
});

onBeforeUnmount(() => {
	if (aboutHead !== undefined) aboutHead.dispose();
});
</script>

<template>
	<div :class="['page-up', $attrs.class]">
		<ProfileComponent class="bg-quaternary dark:bg-quaternaryDark"></ProfileComponent>
		<StoryComponent class="bg-tertiary dark:bg-tertiaryDark"></StoryComponent>
		<SkillsComponent class="bg-quaternary dark:bg-quaternaryDark"></SkillsComponent>
		<EquipmentComponent class="bg-tertiary dark:bg-tertiaryDark"></EquipmentComponent>
		<NextPageComponent path="/notes" label="Goto Notes"></NextPageComponent>
	</div>
</template>
