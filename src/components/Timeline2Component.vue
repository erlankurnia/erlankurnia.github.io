<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import type IWorkExperience from "@/helper/interfaces/IWorkExperience";

const TimelineItemComponent = defineAsyncComponent(() => import('@/components/TimelineItemComponent.vue'));

const { experiences } = defineProps<{ experiences: IWorkExperience[] }>();
</script>

<template>
	<div id="timeline-2" :class="['container max-md:px-2', $attrs.class]">
		<div class="flex flex-col grid-cols-9 px-2 mx-auto font-normal md:grid">
			<TimelineItemComponent v-for="(history, index) in experiences" :key="index" :data="history" :index="index"
				:length="experiences.length + 1">
			</TimelineItemComponent>

			<TimelineItemComponent :index="experiences.length"
				:length="experiences.length + 1">
			</TimelineItemComponent>
		</div>
	</div>
</template>
