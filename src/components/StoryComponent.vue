<script setup lang="ts">
import { defineAsyncComponent, inject } from "vue";
import DataUserSymbol from "@/helper/symbols/DataUserSymbol";

const Timeline2Component = defineAsyncComponent(() => import('@/components/Timeline2Component.vue'));

const data = inject(DataUserSymbol);
</script>

<template>
	<section v-if="data && data.history?.timeline" id="story" :class="['pt-24 pb-0', $attrs.class]">
		<div class="container overflow-hidden">
			<div class="w-full p-4 pb-0">
				<div class="mx-auto mb-6 text-center">
					<h2 class="mb-2 lan-section-title">History</h2>
					<h3 class="lan-section-subtitle" v-html="data.history.title"></h3>
					<p class="lan-section-desc" v-html="data.history.description"></p>
				</div>
			</div>

			<!-- Timeline -->
			<Timeline2Component :experiences="data.history.timeline">
			</Timeline2Component>
			<!-- Timeline -->
		</div>
	</section>
</template>
