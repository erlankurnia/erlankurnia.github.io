<template>
	<section v-if="data && data.history?.timeline" id="story" :class="['pt-24 pb-0', $attrs.class]">
		<div class="container">
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

<script setup lang="ts">
import { inject } from "vue";
import Timeline2Component from "./Timeline2Component.vue";
import DataUserSymbol from "@/helper/symbols/DataUserSymbol";

const data = inject(DataUserSymbol);
</script>
