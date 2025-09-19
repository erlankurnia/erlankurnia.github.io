<script setup lang="ts">
import { ref, onMounted, inject, computed, onUnmounted } from "vue";
import DataUserSymbol from "@/helper/symbols/DataUserSymbol";
import { rand, useScroll } from "@vueuse/core";
import tools from "@/helper/tools";
// import type { IHoneycombItem } from "@/helper/interfaces/IPropsHoneycombComponent";
// import type ISkillInfoCategorized from "@/helper/interfaces/ISkillInfoCategorized";
// import type ISkillInfo from "@/helper/interfaces/ISkillInfo";

const { y: scrollY } = useScroll(window);
const windowHeight = computed(() => window.innerHeight);
const data = inject(DataUserSymbol);
const heroData = ref(data?.value?.hero);

//#region Load quotes
const dataQuotes = ref<string[]>([]);
const randomQuote = ref<string | null>(null);
const fetchQuotes = async () => {
	const quotes = heroData.value?.quote.changable;
	if (typeof quotes == 'string') {
		const rawQuote = (await tools.fetchData('' + quotes));
		dataQuotes.value = rawQuote.split('\n');
	}
	else if (Array.isArray(quotes)) dataQuotes.value = heroData.value?.quote.changable as string[];
	else if (heroData.value?.quote.static) dataQuotes.value = [heroData.value?.quote.static];
}
const getQuote = () => {
	const idx = rand(1, dataQuotes.value.length - 1);
	return dataQuotes.value[idx];
};
let intervalId = 0;
onMounted(async () => {
	await fetchQuotes();
	randomQuote.value = getQuote();
});
onUnmounted(() => clearInterval(intervalId));
//#endregion Load quotes

//#region Load skills
// const skills: IHoneycombItem[] | null | undefined = data?.value?.ability.skill.categorized
// 	?.flatMap((group: ISkillInfoCategorized) => group.topics)
// 	?.filter((topic): topic is ISkillInfo => topic !== undefined && topic !== null && topic.urlInfo !== undefined && topic.urlInfo.length > 0)
// 	?.map((topic: ISkillInfo) => ({ iconName: topic.name, label: topic.title }));
//#endregion Load skills

//#region Swapping animation
const rawNames = heroData.value?.name.changable ?? heroData.value?.name.static ?? '';
const usedNames = ref(Array.isArray(rawNames) ? rawNames : []);
const changableLetters = ref(usedNames.value.length > 0 ? usedNames.value[0].split('') : null);
const changableLettersOld = ref(changableLetters.value);

let wordIndex = 0;
let letterIndex = 0;
let currentWorkingText = usedNames.value.length > wordIndex ? usedNames.value[wordIndex] : null;

// console.log(usedNames.value);
const animate = () => {
	if (usedNames.value.length < 2 || currentWorkingText == null) return;

	changableLettersOld.value = changableLetters.value;
	currentWorkingText = usedNames.value[wordIndex].slice(0, letterIndex + 1) + currentWorkingText.slice(letterIndex + 1);
	changableLetters.value = currentWorkingText.split('');

	letterIndex = (letterIndex + 1) % usedNames.value[0].length;
	if (letterIndex === 0) {
		wordIndex = (wordIndex + 1) % usedNames.value.length;
		setTimeout(animate, 2000);
	} else {
		setTimeout(animate, 700);
	}
};
onMounted(animate);
onUnmounted(animate);
//#endregion Swapping animation
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
						<span v-if="heroData?.name" style="transition-delay: 250ms"
							class="flex justify-center mx-auto w-auto mt-4 mb-2 font-bold text-center text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl text-secondary dark:text-secondaryDark">
							<RouterLink v-if="$route.meta.url.about" :to="$route.meta.url.about"
								class="flex flex-row text-primary dark:text-primaryDark">
								<template v-if="changableLetters && changableLettersOld">
									<span v-for="(letter, index) in changableLetters" :key="index"
										class="relative w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16">
										<transition name="slide-up">
											<span v-if="changableLettersOld[index] == letter"
												v-html="changableLettersOld[index]"
												class="absolute right-0 w-full"></span>
											<span v-else-if="changableLetters[index] == letter"
												v-html="changableLetters[index]" class="absolute right-0 w-full"></span>
										</transition>
									</span>
								</template>
							</RouterLink>
							<template v-if="typeof heroData?.name.static === 'string'">
								{{ heroData.name.static }}
							</template>
						</span>
					</transition>

					<transition name="slide-up" appear>
						<h v-if="heroData?.title.static" style="transition-delay: 300ms"
							class="py-6 font-extrabold w-full text-center text-dark dark:text-light text-2xl md:text-3xl xl:text-4xl">
							<span v-html="heroData.title.static"></span>
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
				<!-- <HoneycombComponent v-if="skills" :data="skills" :ref-size="3" class="my-auto"></HoneycombComponent> -->
			</div>
		</div>
	</section>
</template>

<style scoped>
@keyframes slime {

	0%,
	100% {
		transform: translate(0, 0) scale(1, 1);
	}

	50% {
		transform: translate(-10px, -10px) scale(1.5, 0.5);
	}
}

@keyframes rotate {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}

.slime {
	border-radius: 50%;
	/* animation: slime 1s infinite ease-in-out; */
	animation: slime 0.25s ease-in-out infinite, rotate 480s linear infinite;
}
</style>
