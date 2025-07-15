<script setup lang="ts">
import { inject, onBeforeUnmount } from "vue";
import { useHead } from '@unhead/vue';
import NewTabIcon from "@/components/icons/NewTabIcon.vue";
import DataUserSymbol from "@/helper/symbols/DataUserSymbol";

const data = inject(DataUserSymbol);

const creditHead = useHead({
	title: "References",
});

onBeforeUnmount(() => {
	if (creditHead !== undefined) creditHead.dispose();
});
</script>

<template>
	<section v-if="data && data.reference && data.reference.attribution" id="credit"
		:class="['pt-24 pb-16', $attrs.class]">
		<div class="container">
			<div class="w-full pt-4 text-center">
				<h2 class="mb-3 lan-section-title">References</h2>
			</div>

			<!-- Built Using -->
			<div class="flex flex-wrap" v-if="data.reference.builtUsing.title">
				<div class="w-full mb-8 text-center">
					<h3 class="lan-section-subtitle" v-html="data.reference.builtUsing.title"></h3>
					<p class="font-medium text-md text-secondary max-w-4xl px-4 mx-auto dark:text-secondaryDark md:text-lg"
						v-html="data.reference.builtUsing.description">
					</p>
				</div>
				<div class="w-full max-w-4xl px-4 mx-auto">
					<ul class="flex flex-wrap items-start justify-center gap-4">
						<li v-for="(data, index) in data.reference.builtUsing.techStack" :key="index"
							class="flex flex-col content-start h-auto w-full sm:w-[49%]">
							<a class="flex font-bold text-lg text-primary dark:text-primaryDark" target="_blank"
								:href="data.url">
								<h4 v-html="data.title"></h4>
								<NewTabIcon class="w-auto h-[18px] pl-[2px] pt-[6px]"></NewTabIcon>
							</a>
							<p class="text-sm mt-1 text-secondary dark:text-secondaryDark" v-html="data.description">
							</p>
						</li>
					</ul>
				</div>
			</div>
			<!-- Built Using -->

			<!-- Attribution -->
			<div class="flex flex-wrap pt-24" v-if="data.reference.attribution.title">
				<div class="w-full mb-8 text-center">
					<h3 class="lan-section-subtitle" v-html="data.reference.attribution.title"></h3>
					<p class="font-medium text-md text-secondary dark:text-secondaryDark md:text-lg"
						v-html="data.reference.attribution.description">
					</p>
				</div>
				<div class="w-full max-w-4xl px-4 mx-auto">
					<ul class="flex flex-col gap-4">
						<li v-for="(data, index) in data.reference.attribution.to" :key="index"
							class="flex flex-col w-full h-auto">
							<a class="flex font-bold text-lg text-primary dark:text-primaryDark" target="_blank"
								:href="data.url">
								<h4 v-html="data.title"></h4>
								<NewTabIcon class="w-auto h-[18px] pl-[2px] pt-[6px]"></NewTabIcon>
							</a>
							<p class="text-sm mt-1 text-secondary dark:text-secondaryDark" v-html="data.description">
							</p>
						</li>
					</ul>
				</div>
			</div>
			<!-- Attribution -->
		</div>
	</section>
</template>
