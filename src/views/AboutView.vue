<script setup lang="ts">
import { inject, onBeforeUnmount } from 'vue';
import { useHead } from '@unhead/vue';
import ProfileComponent from "@/components/ProfileComponent.vue";
import StoryComponent from "@/components/StoryComponent.vue";
import EquipmentComponent from "@/components/EquipmentComponent.vue";
// import NextPageComponent from '@/components/NextPageComponent.vue';
import SkillsCategorizedComponent from '@/components/SkillsCategorizedComponent.vue';
import DataAppSymbol from '@/helper/symbols/DataAppSymbol';

const dataApp = inject(DataAppSymbol);
const aboutHead = useHead({
	title: "About " + dataApp?.value?.fullname,
});

onBeforeUnmount(() => {
	if (aboutHead !== undefined) aboutHead.dispose();
});
</script>

<template>
	<div :class="['page-up', $attrs.class]">
		<ProfileComponent class="bg-quaternary dark:bg-quaternaryDark"></ProfileComponent>
		<StoryComponent class="bg-tertiary dark:bg-tertiaryDark"></StoryComponent>
		<SkillsCategorizedComponent class="bg-quaternary dark:bg-quaternaryDark"></SkillsCategorizedComponent>
		<EquipmentComponent class="bg-tertiary dark:bg-tertiaryDark"></EquipmentComponent>
		<!-- <NextPageComponent path="/notes" label="Goto Notes"></NextPageComponent> -->
	</div>
</template>
