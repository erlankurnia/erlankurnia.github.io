<template>
	<section id="portfolio" :class="['pt-24 max-lg:min-h-screen', $attrs.class]">
		<div v-if="data?.portfolio" class="container">
			<div class="w-full p-4">
				<div class="max-w-3xl mx-auto mb-8 text-center">
					<h4 class="mb-2 lan-section-title">Portfolio</h4>
					<h2 class="mb-4 text-3xl font-bold text-dark dark:text-light sm:text-4xl lg:5xl">
						Featured <span class="text-primary dark:text-primaryDark">Project</span>s
					</h2>
					<p class="lan-section-desc" v-html="data.portfolio.description"></p>
				</div>
			</div>

			<!-- Project List -->
			<ProjectListComponent v-if="data.portfolio.projects" :projects="data.portfolio.projects" :limit="6">
			</ProjectListComponent>
			<!-- Project List -->
		</div>

		<NextPageComponent label="See All Projects" :path="route.meta.url.projects" class="mt-16"></NextPageComponent>
	</section>
</template>

<script setup lang="ts">
import { inject, } from "vue";
import { useRoute } from "vue-router";
import DataUserSymbol from "@/helper/symbols/DataUserSymbol";
import NextPageComponent from "./NextPageComponent.vue";
import ProjectListComponent from "./ProjectListComponent.vue";

const route = useRoute();
const data = inject(DataUserSymbol);
</script>
