<script setup lang="ts">
import { ref, onMounted, inject, computed, onUnmounted } from "vue";
import DataUserSymbol from "@/helper/symbols/DataUserSymbol";
import { rand, useScroll } from "@vueuse/core";
import tools from "@/helper/tools";

const { y: scrollY } = useScroll(window);
const windowHeight = computed(() => window.innerHeight);
const data = inject(DataUserSymbol);
const heroData = ref(data?.value?.hero);

//#region Load quotes
const dataQuotes = ref<string[]>([]);
const randomQuote = computed(() => {
	const idx = rand(1, dataQuotes.value.length - 1);
	return dataQuotes.value[idx];
});
const getQuotes = async () => {
	const quotes = heroData.value?.quote.changable;
	if (typeof quotes == 'string') {
		const rawQuote = (await tools.fetchData('' + quotes));
		dataQuotes.value = rawQuote.split('\n');
	}
	else if (Array.isArray(quotes)) dataQuotes.value = heroData.value?.quote.changable as string[];
	else if (heroData.value?.quote.static) dataQuotes.value = [heroData.value?.quote.static];
}
onMounted(getQuotes);
onUnmounted(getQuotes);
//#endregion Load quotes

//#region Splash liquid as user image
const isPageLoaded = ref(false);
const pageLoaded = async () => {
	setTimeout(() => {
		isPageLoaded.value = true;
	}, 500);
};
onMounted(pageLoaded);
onUnmounted(pageLoaded);
//#endregion Splash liquid as user image

//#region Swapping animation
const rawNames = heroData.value?.name.changable ?? heroData.value?.name.static ?? '';
const usedNames = ref(Array.isArray(rawNames) ? rawNames : []);
const changableLetters = ref(usedNames.value.length > 0 ? usedNames.value[0].split('') : null);
const changableLettersOld = ref(changableLetters.value);

let wordIndex = 0;
let letterIndex = 0;
let currentWorkingText = usedNames.value.length > wordIndex ? usedNames.value[wordIndex] : null;

console.log(usedNames.value);
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
				<!-- Right / Top side -->
				<div :style="{
					transform: `translate(0, ${scrollY / 1.5}px)`,
					filter: `blur(${(scrollY > (windowHeight / 2) ? (scrollY / 300) : 0)}px)`,
				}" class="flex flex-col self-center origin-bottom-right justify-center w-full px-4 xs:justify-start h-1/2 lg:h-full lg:justify-center! lg:w-1/2 lg:text-right">
					<transition name="slide-left" appear>
						<h1 style="transition-delay: 0ms"
							class="text-sm font-semibold sm:text-base text-secondary dark:text-secondaryDark md:text-xl">
							Hello,<span class="font-bold text-primary dark:text-primaryDark">_</span>I'am
						</h1>
					</transition>

					<transition name="slide-left" appear>
						<span v-if="heroData?.name && changableLetters && changableLettersOld"
							style="transition-delay: 50ms"
							class="flex justify-start mt-1 text-3xl font-bold lg:justify-end sm:text-4xl lg:5xl text-secondary dark:text-secondaryDark">
							<a v-if="$route.meta.url.about" :href="$route.meta.url.about"
								class="flex flex-row sm:mr-5 text-primary dark:text-primaryDark">
								<span v-for="(letter, index) in changableLetters" :key="index"
									class="relative w-5 md:w-6">
									<transition name="slide-up">
										<span v-if="changableLettersOld[index] == letter"
											v-html="changableLettersOld[index]" class="absolute"></span>
										<span v-else-if="changableLetters[index] == letter"
											v-html="changableLetters[index]" class="absolute"></span>
									</transition>
								</span>
							</a>{{ heroData.name.static }}
						</span>
					</transition>

					<transition name="slide-left" appear>
						<h v-if="heroData?.title.static" style="transition-delay: 150ms"
							class="py-6 text-sm font-extrabold sm:text-lg max-w-max lg:ml-auto text-dark dark:text-light lg:text-2xl">
							<span v-html="heroData.title.static"></span>
							<!-- Unity<span class="font-bold text-primary dark:text-primaryDark">_</span>Software<span
								class="font-bold text-primary dark:text-primaryDark">_</span>Engineer -->
							<div class="border-b-[2px] mt-1 border-b-quaternary dark:border-b-quaternaryDark"></div>
						</h>
					</transition>

					<transition name="slide-left" appear>
						<p v-if="dataQuotes.length > 0" style="transition-delay: 200ms"
							class="mb-10 text-sm font-medium leading-relaxed sm:text-base text-secondary dark:text-secondaryDark"
							v-html="randomQuote"></p>
					</transition>
				</div>
				<!-- Right / Top side -->

				<!-- Left / Bottom side -->
				<div :style="{
					transform: `translate(0, ${scrollY / 2}px)`,
					filter: `blur(${(scrollY > (windowHeight / 2) ? (scrollY / 300) : 0)}px)`,
				}" class="self-end w-full px-0 h-1/2 lg:h-full xs:px-4 lg:w-1/2">
					<div
						class="relative h-full mx-0 mt-0 origin-bottom scale-125 max-screen-sm:scale-100 sm:scale-100 lg:-ml-16 lg:-mr-24 md:flex md:flex-col md:justify-end lg:right-0">
						<span id="splash-liquid"
							class="absolute bottom-0 w-full transition duration-500 ease-in-out delay-75 -translate-x-[55%] text-primary dark:text-primaryDark -z-10 left-1/2">
							<svg width="100%" height="100%" class="fill-current slime" viewBox="0 0 200 200"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M26.8,-51.3C32.9,-42.8,34.9,-32.1,42.2,-23.1C49.5,-14.2,62.2,-7.1,64.8,1.5C67.4,10.1,60,20.2,55.4,33.9C50.9,47.7,49.2,65.1,40.5,69.2C31.8,73.3,15.9,64.1,2.9,59.1C-10.1,54,-20.1,53.1,-32.1,50.9C-44.2,48.7,-58.1,45.2,-60.3,36.5C-62.6,27.8,-53,13.9,-49.6,1.9C-46.2,-10,-49.1,-20,-48.6,-31.6C-48.1,-43.3,-44.3,-56.7,-35.6,-63.8C-27,-70.8,-13.5,-71.6,-1.6,-68.8C10.3,-66.1,20.6,-59.8,26.8,-51.3Z"
									transform="translate(100 100)" />
							</svg>
						</span>
						<img v-if="data" :src="data.image" alt="Erlan Kurnia | Generated by https://www.fotor.com"
							class="absolute bottom-0 z-50 w-full mx-auto aspect-square scroll-smooth" />
					</div>
				</div>
				<!-- Left / Bottom side -->
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
