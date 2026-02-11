<script setup lang="ts">
import type IGreetings from "@/helper/interfaces/IGreetings";
import EndpointSymbol from "@/helper/symbols/EndpointSymbol";
import tools from "@/helper/tools";
import { inject, ref, watch } from "vue";

const dataEndpoint = inject(EndpointSymbol);
const dataIntro = ref<IGreetings[]>([]);

watch(() => dataEndpoint?.value, async (newVal) => {
	if (newVal) {
		dataIntro.value = (await tools.fetch<IGreetings[]>(newVal.intro)).data ?? [];
	}
}, { immediate: true });
</script>

<template>
	<section v-if="dataIntro && dataIntro.length > 0" id="intro" class="pt-24 pb-16 max-md:px-2 max-lg:min-h-screen">
		<div class="container h-full">
			<div class="flex flex-wrap gap-x-[2%]">
				<div class="w-full px-4 pt-4 text-center">
					<h2 class="mb-3 lan-section-title">Intro</h2>
				</div>
				<div v-for="(datum, index) of dataIntro" class="w-full px-2 mb-8" :class="{
					'lg:w-[49%]': dataIntro.length >= 2,
				}" :key="index">
					<h3 class="lan-section-subtitle" :class="{
						'lg:text-left lg:ml-0': dataIntro.length >= 2,
						'lg:min-w-max': dataIntro.length == 1,
					}" v-html="datum.title"></h3>
					<p class="mb-5 lan-section-desc" v-html="datum.description"></p>
				</div>
			</div>
		</div>
	</section>
</template>
