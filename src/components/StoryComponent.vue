<script setup lang="ts">
import { defineAsyncComponent, inject, ref, watch } from "vue";
import EndpointSymbol from "@/helper/symbols/EndpointSymbol";
import type IUserHistory from "@/helper/interfaces/IUserHistory";
import tools from "@/helper/tools";
import type IWorkExperience from "@/helper/interfaces/IWorkExperience";

const Timeline2Component = defineAsyncComponent(() => import('@/components/Timeline2Component.vue'));

const dataEndpoint = inject(EndpointSymbol);
const dataHistory = ref<IUserHistory | null>(null);
watch(() => dataEndpoint?.value, async (newVal) => {
	if (newVal) {
		const resHistory = (await tools.fetch<IUserHistory>(newVal.history));
		dataHistory.value = resHistory.data ?? null;
		const resTimeline = (await tools.fetch<IWorkExperience[]>(newVal.timeline));
		if (resHistory.data && resTimeline.data) {
			resHistory.data.timeline = resTimeline.data;
		}
	}
}, { immediate: true });
</script>

<template>
	<section v-if="dataHistory?.timeline" id="story" :class="['pt-24 pb-0', $attrs.class]">
		<div class="container overflow-hidden">
			<div class="w-full p-4 pb-0">
				<div class="mx-auto mb-6 text-center">
					<h2 class="mb-2 lan-section-title">History</h2>
					<h3 class="lan-section-subtitle" v-html="dataHistory.title"></h3>
					<p class="lan-section-desc" v-html="dataHistory.description"></p>
				</div>
			</div>

			<!-- Timeline -->
			<Timeline2Component :experiences="dataHistory.timeline">
			</Timeline2Component>
			<!-- Timeline -->
		</div>
	</section>
</template>
