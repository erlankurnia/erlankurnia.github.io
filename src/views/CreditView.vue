<template>
	<section v-if="data && data.reference" id="credit" :class="['pt-24 pb-16', $attrs.class]">
		<div class="container">
			<div class="w-full pt-4 text-center">
				<h4 class="mb-3 lan-section-title">References</h4>
			</div>

			<!-- <div class="p-6 m-auto max-w-screen-md">
				<p class="bg-yellow-200 p-4 rounded-md">
					<img src="/img/portfolio/projects/com.anakpintar.5tfineblend/sample@0,5x.webp" alt="Clipped Image"
						class="w-24 h-24 object-cover rounded-full bg-blue-300 float-left mr-4 mb-4" />
					<span>
						Here is a paragraph with an image clipped in. The text fills the space to the right and below
						the
						image, ensuring that the layout looks neat and organized. You can continue your text here and it
						will wrap around the image seamlessly, maintaining a clean and visually appealing format.
						Continue
						your text here to demonstrate how the text flows around the image.
					</span>
				</p>
			</div> -->

			<!-- Attribution -->
			<div class="flex flex-wrap" v-if="data.reference.title">
				<div class="w-full mb-8 text-center">
					<h2 class="lan-section-subtitle" v-html="data.reference.title"></h2>
					<p class="font-medium text-md text-secondary dark:text-secondaryDark md:text-lg"
						v-html="data.reference.description">
					</p>
				</div>
				<div class="w-full max-w-4xl px-4 mx-auto">
					<ul class="flex flex-col gap-4">
						<li v-for="(data, index) in data.reference.attributions" :key="index"
							class="flex flex-col w-full h-auto">
							<a class="flex font-bold text-primary dark:text-primaryDark" target="_blank"
								:href="data.url">
								<h4 v-html="data.title"></h4>
								<NewTabIcon class="w-auto h-[18px] pl-[2px] pt-[6px]"></NewTabIcon>
							</a>
							<p class="text-sm text-secondary dark:text-secondaryDark" v-html="data.description"></p>
						</li>
					</ul>
				</div>
			</div>
			<!-- Attribution -->
		</div>
	</section>
</template>

<script setup lang="ts">
import { inject, onBeforeUnmount } from "vue";
import { useHead } from '@unhead/vue';
import NewTabIcon from "../components/icons/NewTabIcon.vue";
import DataUserSymbol from "@/helper/symbols/DataUserSymbol";

const data = inject(DataUserSymbol);

const creditHead = useHead({
	title: "References",
});

onBeforeUnmount(() => {
	if (creditHead !== undefined) creditHead.dispose();
});
</script>
