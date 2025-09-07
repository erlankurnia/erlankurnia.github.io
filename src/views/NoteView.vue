<script setup lang="ts">
import { inject, ref, onMounted, onBeforeUnmount, defineAsyncComponent } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { useHead, type ActiveHeadEntry, type MergeHead, type UseHeadInput } from '@unhead/vue';
import tools from "../helper/tools";
import DataUserSymbol from "@/helper/symbols/DataUserSymbol";
import type INote from "@/helper/interfaces/INote";

const TechnologyIcon = defineAsyncComponent(() => import('@/components/icons/Icon.vue'));
const MarkdownComponent = defineAsyncComponent(() => import('@/components/MarkdownComponent.vue'));
const LoadingComponent = defineAsyncComponent(() => import('@/components/LoadingComponent.vue'));

const data = inject(DataUserSymbol);
const selectedNote = ref<INote | null>(null);
const dataReadme = ref("");
let noteHead: void | ActiveHeadEntry<UseHeadInput<MergeHead>>;
const route = useRoute();

async function init() {
	if (data?.value?.notebook) {
		for (let article of data.value.notebook.notes) {
			if ("" + article.id == "" + route.params.id) {
				selectedNote.value = article;
				break;
			}
		}

		if (selectedNote.value) {
			dataReadme.value = await tools.getContentReadme(selectedNote.value.source);

			const metaTitle = selectedNote.value.title;
			const metaDesc = selectedNote.value.description;

			noteHead = useHead({
				title: metaTitle,
				meta: [
					{
						name: "title",
						content: metaTitle,
					},
					{
						name: "description",
						content: metaDesc,
					},
					{
						property: "og:title",
						content: metaTitle,
					},
					{
						property: "og:description",
						content: metaDesc,
					},
					{
						property: "twitter:title",
						content: metaTitle,
					},
					{
						property: "twitter:description",
						content: metaDesc,
					},
				]
			});
		}
	}
}

onBeforeUnmount(() => {
	if (noteHead !== undefined) noteHead.dispose();
});
onMounted(init);
</script>

<template>
	<article id="profile" :class="['pt-24 min-h-screen', $attrs.class]">
		<div v-if="selectedNote != null && selectedNote.title" class="container max-w-5xl">
			<div class="flex flex-wrap mb-16">
				<div class="flex flex-row flex-wrap w-full px-4 pt-4 pb-0">
					<RouterLink v-if="$route.meta.url?.notes" :to="$route.meta.url.notes"
						class="ml-0 mr-1 text-sm font-bold capitalize lan-nav-link text-primary dark:text-primaryDark">
						Back
					</RouterLink>
					<span class="ml-0 mr-1 text-sm font-bold capitalize lan-nav-link">/</span>
					<span class="ml-0 mr-1 text-sm font-bold capitalize lan-nav-link"
						v-html="selectedNote.title"></span>
				</div>
				<div class="w-full px-4 pt-4 pb-0 text-center select-text">
					<h1 class="mb-3 text-2xl lan-section-title" v-html="selectedNote.title"></h1>
				</div>

				<div class="w-full h-auto p-4" v-if="selectedNote.source && selectedNote.source.images.length > 0">
					<img :src="selectedNote.source.images[0]" class="w-full mx-auto" :alt="selectedNote.title" />
				</div>

				<div class="w-full px-4 pt-6 mb-0 select-text" v-if="selectedNote.description">
					<p class="text-sm text-secondary dark:text-secondaryDark" v-html="selectedNote.description"></p>
				</div>

				<template v-if="dataReadme">
					<MarkdownComponent v-if="dataReadme" :contentMarkdown="dataReadme"
						:sourceMarkdown="selectedNote.source" class="p-4"></MarkdownComponent>
				</template>
				<template v-else>
					<LoadingComponent></LoadingComponent>
				</template>

				<div v-if="selectedNote.source && selectedNote.source.url && selectedNote.source.type == 'github'"
					class="w-full px-4 text-right">
					<a :href="selectedNote.source.url" target="_blank" class="text-sm lan-link-primary">
						View on GitHub<span class="inline-block h-[11px] ml-1 aspect-square">
							<TechnologyIcon techName="github"></TechnologyIcon>
						</span>
					</a>
				</div>
				<h4 class="px-4 my-4 text-dark dark:text-light">Related topics</h4>
				<div v-if="selectedNote.topics && selectedNote.topics.length > 0"
					class="flex flex-wrap w-full gap-4 px-4 text-left">
					<template v-for="(topic, index) of selectedNote.topics" :key="index">
						<RouterLink v-if="$route.meta.url?.notes" :to="$route.meta.url?.notes + '/' + topic"
							class="text-sm lan-link-primary">
							#{{ topic }}
						</RouterLink>
					</template>
				</div>
			</div>
		</div>
	</article>
</template>
