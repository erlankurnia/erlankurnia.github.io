<template>
	<section v-if="dataUser != null && dataUser.history?.timeline" id="story" class="pt-24 pb-0">
		<div class="container">
			<div class="w-full p-4 pb-0">
				<div class="mx-auto mb-6 text-center">
					<h4 class="mb-2 lan-section-title">History</h4>
					<h2 class="lan-section-subtitle" v-html="dataUser.history.title"></h2>
					<p class="lan-section-desc" v-html="dataUser.history.description"></p>
				</div>
			</div>

			<!-- Timeline -->
			<Timeline2Component :histories="dataUser.history.timeline" @moreInfoClick="showModal">
			</Timeline2Component>
			<!-- Timeline -->
		</div>
	</section>

	<ModalComponent @close="closeModal" ref="modalComponent">
		<template #body v-if="dataReadme">
			<MarkdownComponent v-if="dataReadme" :contentMarkdown="dataReadme" class="md:p-4"></MarkdownComponent>
		</template>
	</ModalComponent>

</template>

<script setup></script>

<script>
import { inject, ref } from "vue";
import markdownit from "markdown-it";
import tools from "../helper/tools";
import Timeline2Component from "./Timeline2Component.vue";
import ModalComponent from './ModalComponent.vue';
import MarkdownComponent from "./MarkdownComponent.vue";

export default {
	name: "StoryComponent",
	components: { Timeline2Component, ModalComponent, MarkdownComponent },
	setup() {
		const { dataUser } = inject("dataUser");
		const modalComponent = ref(null);

		return {
			dataUser,
			modalComponent,
		};
	},
	data() {
		return {
			dataReadme: "",
		};
	},
	methods: {
		async showModal(id) {
			await this.moreInfo(id);
			this.modalComponent.onVisibleChange(true);
		},
		closeModal() {
			this.modalComponent.onVisibleChange(false);
		},
		async moreInfo(id) {
			const mdit = markdownit({
				typographer: true,
				linkify: true,
			});

			let dataJobSource = {};

			if (this.dataUser != null && typeof this.dataUser.history == "object" &&
				this.dataUser.history.timeline != null && this.dataUser.history.timeline.length >= id
			) {
				dataJobSource = this.dataUser.history.timeline[id].source;
			}

			if (dataJobSource != null) {
				this.dataReadme = await tools.getContentReadme(dataJobSource);
				// console.log(resText);
				// const resText = await tools.getContentReadme(dataJobSource);
				// this.dataReadme = mdit.render(resText);
			}
		}
	}
};
</script>
