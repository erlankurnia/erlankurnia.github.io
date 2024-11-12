<template>
	<section v-if="data && data.intro && data.intro.length > 0" id="intro" class="pt-24 pb-16 max-lg:min-h-screen">
		<div class="container h-full">
			<div class="flex flex-wrap gap-x-[2%]">
				<div class="w-full px-4 pt-4 text-center">
					<h4 class="mb-3 lan-section-title">Intro</h4>
				</div>
				<div v-for="(datum, index) of data.intro" class="w-full px-2 mb-8" :class="{
					'lg:w-[49%]': data.intro.length >= 2,
				}" :key="index">
					<h2 class="lan-section-subtitle" :class="{
						'lg:text-left lg:ml-0': data.intro.length >= 2,
						'lg:min-w-max': data.intro.length == 1,
					}" v-html="datum.title"></h2>
					<p class="mb-5 lan-section-desc" v-html="datum.description"></p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import DataUserSymbol from "@/helper/symbols/DataUserSymbol";
import { inject } from "vue";

const data = inject(DataUserSymbol);
</script>
