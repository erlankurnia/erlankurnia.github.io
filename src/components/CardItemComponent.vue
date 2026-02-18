<script setup lang="ts">
import { computed, ref } from 'vue';
import Icon from '@/components/icons/Icon.vue';
import NewTabIcon from '@/components/icons/NewTabIcon.vue';
import EventBus, { EventBusEnum } from '@/helper/EventBus';
import type IPropsCardItemComponent from '@/helper/contracts/props/IPropsCardItemComponent';
import type { TDynamicModalComponent } from '@/helper/interfaces/TDynamicModalComponent';
import DetailItemComponent from "@/components/DetailItemComponent.vue";
import { useScreenSizeStore } from '@/stores/screenSizeStore';
import tools from '@/helper/tools';

const props = defineProps<IPropsCardItemComponent>();
const screenSizeStore = useScreenSizeStore();
const screenSize = screenSizeStore.getScreen();
const opacityValue = ref(1);

async function preview() {
    const componentData: TDynamicModalComponent = {
        component: DetailItemComponent,
        props: { project: props.project }
    };
    EventBus.$emit(EventBusEnum.ShowModal, componentData);
}
const cardId = computed(() => `card-${props.project.id}-${props.project.slug}`);
const shortDesc = computed(() => {
    return props.project.description.length > 144 ? props.project.summary.substring(0, 120) + '..' : props.project.summary;
});
</script>

<template>
    <!-- <RouterLink :to="'' + url" -->
    <button @click="preview()" :id="cardId"
        class="grid grid-rows-[auto_auto_auto_auto_52px] grid-cols-1 w-auto h-auto p-3 transition duration-200 scale-100 rounded-lg group hover:shadow-lg hover:scale-105"
        :class="{
            'bg-tertiary dark:bg-tertiaryDark': !(reverseTheme ?? false),
            'bg-quaternary dark:bg-quaternaryDark': (reverseTheme ?? false),
        }" :style="{
            opacity: opacityValue,
        }">
        <div class="overflow-hidden rounded-md aspect-16/9" :class="{ 'shadow-inner': project.imagesDir, }">
            <template v-if="project.imagesDir">
                <img :src="tools.getCdnUrl(tools.combinePath(project.imagesDir, 'sample@' + screenSize + '.webp'))"
                    :alt="project.title" class="transition-transform duration-500 scale-100 group-hover:scale-110"
                    :class="{ 'w-full': project.imagesDir != null && project.imagesDir.length > 5 }" loading="lazy" />
            </template>
        </div>

        <div
            class="text-lg font-semibold text-center text-dark dark:text-light group-hover:text-primary dark:group-hover:text-primaryDark">
            <h3 class="mb-3" :class="{ 'mt-5': project.imagesDir }" v-html="project.title"></h3>
        </div>

        <p class="text-xs leading-tight text-center lan-section-desc lg:text-[13px]" v-html="shortDesc"></p>

        <div v-if="project.technologies && project.technologies.length > 0"
            class="flex flex-wrap justify-center gap-1 pt-4">
            <div v-for="(tech, index) of project.technologies" :key="index"
                class="w-auto h-6 px-2 py-1 text-xs rounded-full text-dark dark:text-light bg-secondary/10 dark:bg-secondaryDark/10"
                v-html="tech">
            </div>
        </div>

        <div class="grid w-full h-auto grid-cols-2 gap-2 pt-4">
            <a v-if="project.url" :href="project.url" @click.stop target="_blank"
                class="flex flex-row items-center justify-center grow gap-2 py-1 lan-button-secondary">
                View
                <NewTabIcon class="w-auto h-4"></NewTabIcon>
            </a>
            <div v-else
                class="flex h-9 items-center leading-tight justify-center px-2 text-[11px] text-center font-normal rounded-full border-2 border-secondary/50 dark:border-secondaryDark/50 text-secondary/50 dark:text-secondaryDark/50">
                Live not available
            </div>

            <a v-if="project.repo" :href="project.repo" @click.stop target="_blank"
                class="flex flex-row items-center justify-center grow gap-2 py-1 lan-button-secondary group/github">
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
        <!-- <div v-else
            class="flex items-center justify-center row-start-4 px-2 pt-3 pb-1 text-[11px] text-center font-normal text-secondary/50 dark:text-secondaryDark/50">
            Live and Repository are not available
        </div> -->
    </button>
    <!-- </RouterLink> -->
</template>
