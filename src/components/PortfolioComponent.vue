<script setup lang="ts">
import { inject, ref, watch } from "vue";
import { useRoute } from "vue-router";
import NextPageComponent from "@/components/NextPageComponent.vue";
import ProjectListComponent from "@/components/ProjectListComponent.vue";
import tools from "@/helper/tools";
import EndpointSymbol from "@/helper/symbols/EndpointSymbol";
import type { IPortfolio } from "@/helper/interfaces/IPortfolio";
import type IProjectInfo from "@/helper/interfaces/IProjectInfo";

const route = useRoute();
const dataEndpoint = inject(EndpointSymbol);
const dataPortfolio = ref<IPortfolio>({
	title: '',
	description: '',
});

watch(() => dataEndpoint?.value, async (newVal) => {
	if (newVal) {
		dataPortfolio.value = (await tools.fetch<IPortfolio>(newVal.portfolio)).data ?? dataPortfolio.value;
		dataPortfolio.value.projects = (await tools.fetch<IProjectInfo[]>(newVal.project)).data ?? [];
	}
}, { immediate: true });
</script>

<template>
	<section id="portfolio" :class="['pt-24 max-lg:min-h-screen', $attrs.class]">
		<div v-if="dataPortfolio" class="container">
			<div class="w-full p-4">
				<div class="max-w-3xl mx-auto mb-8 text-center">
					<h2 class="mb-2 lan-section-title">Portfolio</h2>
					<h3 class="mb-4 text-3xl font-bold text-dark dark:text-light sm:text-4xl lg:5xl">
						Featured <span class="text-primary dark:text-primaryDark">Project</span>s
					</h3>
					<p class="lan-section-desc" v-html="dataPortfolio.description"></p>
				</div>
			</div>

			<!-- Project List -->
			<ProjectListComponent v-if="dataPortfolio.projects" :projects="dataPortfolio.projects" :limit="6">
			</ProjectListComponent>
			<!-- Project List -->
		</div>

		<NextPageComponent label="See All Projects" :path="route.meta.url.projects" class="mt-16"></NextPageComponent>
	</section>
</template>
