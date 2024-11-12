<template>
	<section v-if="data && data.history?.timeline" id="story" :class="['pt-24 pb-0', $attrs.class]">
		<div class="container">
			<div class="w-full p-4 pb-0">
				<div class="mx-auto mb-6 text-center">
					<h4 class="mb-2 lan-section-title">History</h4>
					<h2 class="lan-section-subtitle" v-html="data.history.title"></h2>
					<p class="lan-section-desc" v-html="data.history.description"></p>
				</div>
			</div>

			<!-- Timeline -->
			<Timeline2Component :experiences="data.history.timeline" @more-info-click="showModal">
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

<script setup lang="ts">
import { inject, ref, useTemplateRef } from "vue";
import tools from "../helper/tools";
import Timeline2Component from "./Timeline2Component.vue";
import ModalComponent from './ModalComponent.vue';
import MarkdownComponent from "./MarkdownComponent.vue";
import DataUserSymbol from "@/helper/symbols/DataUserSymbol";

type ModalType = InstanceType<typeof ModalComponent>
const modalComponent = useTemplateRef<ModalType>('modalComponent');

const data = inject(DataUserSymbol);
const dataReadme = ref('');

const moreInfo = async (id: number) => {
	let dataJobSource = null;

	if (data?.value && typeof data.value.history == "object" &&
		data.value.history.timeline != null && data.value.history.timeline.length >= id
	) {
		dataJobSource = data.value.history.timeline[id].source;
	}

	if (dataJobSource) {
		dataReadme.value = await tools.getContentReadme(dataJobSource);
	}

	console.log(dataReadme.value);
};

const showModal = async (id: number) => {
	await moreInfo(id);
	modalComponent.value?.onVisibleChange(true);
};

const closeModal = () => {
	modalComponent.value?.onVisibleChange(false);
};
</script>
