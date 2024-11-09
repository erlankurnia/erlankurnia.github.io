<template>
	<section v-if="dataUser != null && dataUser.history?.timeline" id="story" :class="['pt-24 pb-0', $attrs.class]">
		<div class="container">
			<div class="w-full p-4 pb-0">
				<div class="mx-auto mb-6 text-center">
					<h4 class="mb-2 lan-section-title">History</h4>
					<h2 class="lan-section-subtitle" v-html="dataUser.history.title"></h2>
					<p class="lan-section-desc" v-html="dataUser.history.description"></p>
				</div>
			</div>

			<!-- Timeline -->
			<Timeline2Component :histories="dataUser.history.timeline" @more-info-click="showModal">
			</Timeline2Component>
			<!-- Timeline -->
		</div>
	</section>

	<ModalComponent @close="closeModal" ref="modalComponent">
		<template #body v-if="dataReadme">
			<MarkdownComponent v-if="dataReadme" :content-markdown="dataReadme" class="md:p-4"></MarkdownComponent>
		</template>
	</ModalComponent>
</template>

<script setup>
import { inject, ref } from "vue";
// import markdownit from "markdown-it";
import tools from "../helper/tools";
import Timeline2Component from "./Timeline2Component.vue";
import ModalComponent from './ModalComponent.vue';
import MarkdownComponent from "./MarkdownComponent.vue";

const { dataUser } = inject("dataUser");
const modalComponent = ref(null);
const dataReadme = ref('');

const moreInfo = async (id) => {
	// const mdit = markdownit({
	// 	typographer: true,
	// 	linkify: true,
	// });

	let dataJobSource = null;

	if (dataUser != null && typeof dataUser.value.history == "object" &&
		dataUser.value.history.timeline != null && dataUser.value.history.timeline.length >= id
	) {
		dataJobSource = dataUser.value.history.timeline[id].source;
	}

	if (dataJobSource != null) {
		dataReadme.value = await tools.getContentReadme(dataJobSource);
		// const resText = await tools.getContentReadme(dataJobSource);
		// dataReadme = mdit.render(resText);
	}
};

const showModal = async (id) => {
	await moreInfo(id);
	modalComponent.value.onVisibleChange(true);
};

const closeModal = () => {
	modalComponent.value.onVisibleChange(false);
};
</script>
