<template>
    <div
        class="grid grid-rows-[auto,auto,auto,auto,52px] lg:grid-rows-[auto,auto,auto,52px] grid-cols-1 lg:grid-cols-[64%,auto] gap-x-4 gap-y-2 w-auto h-auto p-3 transition duration-200 group bg-transparent">
        <div class="text-4xl font-semibold text-center lg:col-span-2 lg:row-span-1 text-dark dark:text-light">
            <h3 class="mb-3" :class="{ 'mt-5': project.imagesDir }" v-html="project.title"></h3>
        </div>

        <div class="overflow-x-auto overflow-y-hidden flex flex-row gap-2 rounded-md aspect-[16/9]"
            :class="{ 'shadow-inner': project.imagesDir, }">
            <template v-if="validImages && validImages.length > 0">
                <img v-for="(validImage, index) in validImages" :key="index" :src="validImage" :alt="project.title"
                    class="w-auto h-full" />
            </template>
            <template v-else>
                <img :src="project.imagesDir + 'sample@0,5x.webp'" :alt="project.title" class="w-auto h-full md:pb-2" />
            </template>
        </div>

        <p class="pt-4 text-sm leading-tight text-left lan-section-desc lg:text-base" v-html="project.description">
        </p>

        <div v-if="project.technologies && project.technologies.length > 0"
            class="flex flex-wrap justify-center gap-1 pt-4">
            <div v-for="(tech, index) of project.technologies" :key="index"
                class="w-auto h-6 px-2 py-1 text-xs rounded-full text-dark dark:text-light bg-secondary/10 dark:bg-secondaryDark/10"
                v-html="tech">
            </div>
        </div>

        <div class="grid w-full h-auto grid-cols-2 gap-2 pt-4">
            <a v-if="project.url" :href="project.url" @click.stop target="_blank"
                class="flex flex-row items-center justify-center flex-grow gap-2 py-1 h-9 lan-button-secondary">
                View
                <NewTabIcon class="w-auto h-4"></NewTabIcon>
            </a>
            <div v-else
                class="flex h-9 items-center leading-tight justify-center px-2 text-[11px] text-center font-normal rounded-full border-2 border-secondary/50 dark:border-secondaryDark/50 text-secondary/50 dark:text-secondaryDark/50">
                Live not available
            </div>

            <a v-if="project.repo" :href="project.repo" @click.stop target="_blank"
                class="flex flex-row items-center justify-center flex-grow gap-2 py-1 h-9 lan-button-secondary group/github">
                Repo
                <Icon techName="Github"
                    class="transition size-4 dark:duration-1000 dark:group-hover/github:duration-300 text-primary group-hover/github:text-tertiary dark:text-primaryDark dark:group-hover/github:text-tertiaryDark">
                </Icon>
            </a>
            <div v-else
                class="flex h-9 items-center leading-tight justify-center px-2 text-[11px] text-center font-normal rounded-full border-2 border-secondary/50 dark:border-secondaryDark/50 text-secondary/50 dark:text-secondaryDark/50">
                Repository is restricted
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Icon from './icons/Icon.vue';
import NewTabIcon from './icons/NewTabIcon.vue';
import type IPropsDetailItemComponent from '@/helper/interfaces/IPropsDetailItemComponent';
import tools from '@/helper/tools';

const props = defineProps<IPropsDetailItemComponent>();
const validImages = ref<string[]>([]);

function getImageUrl(filename: string) {
    return `${props.project.imagesDir}/${filename}`;
}

async function validateImages() {
    const imageUrls = [];
    let imageIndex = 1;

    let imageUrl = getImageUrl('sample@2x.webp');
    if (await tools.verifyImageUrl(imageUrl)) {
        imageUrls.push(imageUrl);
        imageIndex++;
    }

    imageUrl = getImageUrl(`${imageIndex}.png`);
    while (await tools.verifyImageUrl(imageUrl)) {
        imageUrls.push(imageUrl);
        imageIndex++;
        imageUrl = getImageUrl(`${imageIndex}.png`);
    }

    validImages.value = imageUrls;
}

onMounted(() => {
    validateImages();
});
</script>