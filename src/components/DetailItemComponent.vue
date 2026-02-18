<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref } from 'vue';
import type IPropsDetailItemComponent from '@/helper/contracts/props/IPropsDetailItemComponent';
import EventBus, { EventBusEnum } from '@/helper/EventBus';
import tools from '@/helper/tools';
import Icon from '@/components/icons/Icon.vue';
import NewTabIcon from '@/components/icons/NewTabIcon.vue';
import { useScreenSizeStore } from '@/stores/screenSizeStore';

const MarkdownComponent = defineAsyncComponent(() => import('@/components/MarkdownComponent.vue'));

const props = defineProps<IPropsDetailItemComponent>();
const validImages = ref<string[]>([]);
const screenSizeStore = useScreenSizeStore();
const screenSize = screenSizeStore.getScreen();

function getImageUrl(filename: string) {
    return tools.getCdnUrl(tools.combinePath('' + props.project.imagesDir, filename));
}

async function validateImages(): Promise<void> {
    let imageIndex = 1;

    let imageUrl = getImageUrl('sample@full.webp');
    if (await tools.verifyImageUrl(imageUrl)) {
        validImages.value.push(imageUrl);
        imageIndex++;
    }

    imageUrl = getImageUrl(`${imageIndex}.png`);
    while (await tools.verifyImageUrl(imageUrl)) {
        validImages.value.push(imageUrl);
        imageIndex++;
        imageUrl = getImageUrl(`${imageIndex}.png`);
    }
}

function hideModal(): void {
    EventBus.$emit(EventBusEnum.HideModal);
}

onMounted(() => {
    validateImages();
});
</script>

<template>
    <div
        class="grid grid-rows-[auto_auto_auto_auto_auto_auto] grid-cols-1 gap-x-4 gap-y-2 w-auto h-auto p-3 transition duration-200 group bg-transparent">
        <div
            class="text-4xl font-semibold text-center lg:col-span-2 lg:row-span-1 text-dark dark:text-light pb-2 border-b border-secondary/50 dark:border-secondaryDark/50">
            <h2 class="mb-3" :class="{ 'mt-5': project.imagesDir }" v-html="project.title"></h2>
        </div>

        <div class="flex w-full h-auto flex-row gap-4 justify-end">
            <a v-if="project.url" :href="project.url" @click.stop target="_blank"
                class="flex flex-row items-center justify-center gap-2 py-1 h-9 lan-link-primary font-bold">
                View
                <NewTabIcon class="w-auto h-4"></NewTabIcon>
            </a>
            <div v-else
                class="flex h-9 items-center leading-tight justify-center gap-1 px-2 text-center font-normal text-secondary/50 dark:text-secondaryDark/50">
                View
                <NewTabIcon class="w-auto h-4"></NewTabIcon>
            </div>

            <a v-if="project.repo" :href="project.repo" @click.stop target="_blank"
                class="flex flex-row items-center justify-center gap-2 py-1 h-9 lan-link-primary font-bold group/github">
                Repo
                <Icon techName="Github"
                    class="transition size-4 dark:duration-1000 dark:group-hover/github:duration-300 text-primary group-hover/github:text-secondary dark:text-primaryDark dark:group-hover/github:text-secondaryDark">
                </Icon>
            </a>
            <div v-else
                class="flex h-9 items-center leading-tight justify-center gap-1 px-2 text-center font-normal text-secondary/50 dark:text-secondaryDark/50">
                Repo
                <Icon techName="Github" class="size-4 text-secondary/50 dark:text-secondaryDark/50">
                </Icon>
            </div>
        </div>

        <div class="pt-4 lg:col-span-2 text-sm leading-tight text-left lan-section-desc lg:text-base">
            <div class="overflow-x-auto overflow-y-hidden flex flex-row lg:w-1/2 gap-2 rounded-md w-full lg:object-cover lg:float-left lg:mr-6 aspect-16/9 bg-quaternary dark:bg-quaternaryDark"
                :class="{ 'shadow-inner': project.imagesDir, }">
                <template v-if="validImages && validImages.length > 0">
                    <img v-for="(validImage, index) in validImages" :key="index" :src="validImage" :alt="project.title"
                        class="w-auto h-full" loading="lazy" />
                </template>
                <template v-else-if="project.imagesDir">
                    <img :src="tools.getCdnUrl(tools.combinePath(project.imagesDir, 'sample@' + screenSize + '.webp'))"
                        :alt="project.title" class="w-auto h-full md:pb-2" loading="lazy" />
                </template>
            </div>

            <p v-html="project.summary" class=""></p>
        </div>

        <div class="pt-4 lg:col-span-2">
            <MarkdownComponent v-if="project.description" :contentMarkdown="project.description">
            </MarkdownComponent>
        </div>

        <div class="lg:col-span-2 pt-8 mt-8 border-t border-secondary/50 dark:border-secondaryDark/50">
            <div v-if="project.technologies && project.technologies.length > 0"
                class="flex flex-wrap justify-center gap-1">
                <div v-for="(tech, index) of project.technologies" :key="index"
                    class="w-auto h-6 px-2 py-1 text-xs rounded-full text-dark dark:text-light bg-secondary/10 dark:bg-secondaryDark/10"
                    v-html="tech">
                </div>
            </div>
        </div>

        <div class="lg:col-span-2 pt-4 pb-2">
            <div v-if="project.tags.length > 0" class="flex flex-wrap w-full gap-4 justify-center">
                <span class="text-dark dark:text-light text-sm">Tags:</span>
                <template v-for="(tag, index) of project.tags" :key="index">
                    <a v-if="$route.meta.url?.projects" :href="$route.meta.url?.projects + '/' + tag" @click="hideModal"
                        class="text-sm lan-link-primary">
                        #{{ tag }}
                    </a>
                </template>
            </div>
        </div>
    </div>
</template>
