<template>
	<section v-if="dataUser != null && dataUser.history?.timeline" id="story" class="pt-24 pb-0">
		<div class="container">
			<div class="w-full p-4 pb-0">
				<div class="mx-auto mb-6 text-center">
					<h4 class="mb-2 lan-section-title">History</h4>
					<h2 class="lan-section-subtitle" v-html="dataUser.history.title"></h2>
					<p class="font-medium text-md text-secondary lg:text-lg" v-html="dataUser.history.description"></p>
				</div>
			</div>

			<!-- Timeline -->
			<Timeline2Component :histories="dataUser.history.timeline"></Timeline2Component>
			<!-- Timeline -->
		</div>
	</section>
</template>

<script setup></script>

<script>
import { ref, inject } from "vue";
import Timeline2Component from "./Timeline2Component.vue";

export default {
	name: "StoryComponent",
	components: { Timeline2Component },
	setup() {
		const { dataUser } = inject("dataUser");
		return {
			dataUser,
		};
	},
};
</script>
