<script setup lang="ts">
import { ref, computed, inject, watch } from "vue";
import { rand, useScroll } from "@vueuse/core";
import tools from "@/helper/tools";
import type IHero from "@/helper/interfaces/IHero";
import EndpointSymbol from "@/helper/symbols/EndpointSymbol";

const { y: scrollY } = useScroll(window);
const windowHeight = computed(() => window.innerHeight);
const dataEndpoint = inject(EndpointSymbol);
const dataHero = ref<IHero | null>(null);

//#region Load quotes
const dataQuotes = ref<string[]>([]);
const randomQuote = ref<string | null>(null);

const getQuote = () => {
	const idx = rand(1, dataQuotes.value.length - 1);
	return dataQuotes.value[idx];
};
watch(() => dataEndpoint?.value, async (newVal) => {
	if (newVal) {
		dataHero.value = (await tools.fetch<IHero>(newVal.hero)).data ?? null;
		const rawQuote = (await tools.fetch<string>('' + newVal.quotes));
		if (typeof rawQuote.data == 'string') {
			dataQuotes.value = ('' + rawQuote.data).split('\n');
		}
		else if (Array.isArray(rawQuote.data)) dataQuotes.value = rawQuote.data as string[];
		else if (dataHero.value?.quote.static) dataQuotes.value = [dataHero.value?.quote.static];
		randomQuote.value = getQuote();
	}
}, { immediate: true });
//#endregion Load quotes
</script>

<template>
	<section class="h-screen max-h-[960px] pt-16 pb-0 sm:pt-24 -z-10 overflow-hidden">
		<div class="container h-full">
			<div class="flex flex-wrap h-full lg:flex-row-reverse">
				<div :style="{
					transform: `translate(0, ${scrollY / 1.5}px)`,
					filter: `blur(${(scrollY > (windowHeight / 2) ? (scrollY / 300) : 0)}px)`,
				}" class="flex flex-col self-center origin-bottom-right justify-center w-full px-4 pb-20 h-full text-center">
					<transition name="slide-up" appear>
						<h1 style="transition-delay: 200ms"
							class="font-semibold text-secondary dark:text-secondaryDark text-base md:text-xl xl:text-3xl">
							Hello,<span class="font-bold text-primary dark:text-primaryDark">_</span>I'am
						</h1>
					</transition>

					<transition name="slide-up" appear>
						<span v-if="dataHero?.name" style="transition-delay: 250ms"
							class="flex justify-center mx-auto w-auto mt-4 mb-2 font-bold text-center text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl text-secondary dark:text-secondaryDark">
							<template v-if="typeof dataHero?.name.static === 'string'">
								<span v-html="dataHero.name.static"></span>
							</template>
						</span>
					</transition>

					<transition name="slide-up" appear>
						<h v-if="dataHero?.title.static" style="transition-delay: 300ms"
							class="py-6 font-extrabold w-full text-center text-dark dark:text-light text-2xl md:text-3xl xl:text-4xl">
							<span v-html="dataHero.title.static"></span>
							<div class="border-b-[2px] mt-1 border-b-quaternary dark:border-b-quaternaryDark"></div>
						</h>
					</transition>

					<transition name="slide-up">
						<p v-if="dataQuotes.length > 1 && randomQuote" style="transition-delay: 350ms"
							class="relative text-base min-h-20 md:text-xl xl:text-2xl text-center font-medium leading-relaxed text-secondary dark:text-secondaryDark group/quote">
							<span v-html="randomQuote"
								class="absolute top-0 left-0 right-0 bottom-0 content-center transition-all duration-500 opacity-100 group-hover/quote:opacity-0"></span>
							<span v-html="dataQuotes[0]"
								class="absolute top-0 left-0 right-0 bottom-0 content-center transition-all duration-500 opacity-0 group-hover/quote:opacity-100"></span>
						</p>
					</transition>
				</div>
			</div>
		</div>
	</section>
</template>
