<template>
    <component is=""></component>
    <!-- <RouterLink :to="'' + url" -->
    <a :href="urlDemo" target="_blank"
        class="grid grid-rows-[auto,auto,auto,auto,52px] grid-cols-1 w-auto h-auto p-3 transition duration-200 scale-100 rounded-lg group hover:shadow-lg hover:lan-glass-effect hover:scale-105"
        :class="{
            'bg-tertiary dark:bg-tertiaryDark': !(reverseTheme ?? false),
            'bg-quaternary dark:bg-quaternaryDark': (reverseTheme ?? false),
        }">
        <div class="overflow-hidden rounded-md aspect-[16/9]" :class="{ 'shadow-inner': imagesPath, }">
            <template v-if="imagesPath">
                <img :src="imagesPath" :alt="title"
                    class="transition-transform duration-500 scale-100 group-hover:scale-110"
                    :class="{ 'w-full': imagesPath != null && imagesPath.length > 5 }" />
            </template>
        </div>

        <div
            class="text-lg font-semibold text-center text-dark dark:text-light group-hover:text-primary dark:group-hover:text-primaryDark">
            <h3 class="mb-3" :class="{ 'mt-5': imagesPath }" v-html="title"></h3>
        </div>

        <p class="text-xs leading-tight text-center lan-section-desc lg:text-[13px]" v-html="shortDesc"></p>

        <div v-if="technologies && technologies.length > 0" class="flex flex-wrap justify-center gap-1 pt-4">
            <div v-for="(tech, index) of technologies" :key="index"
                class="w-auto h-6 px-2 py-1 text-xs rounded-full text-dark dark:text-light bg-secondary/10 dark:bg-secondaryDark/10"
                v-html="tech">
            </div>
        </div>

        <div class="grid w-full h-auto grid-cols-2 gap-2 pt-4">
            <a v-if="urlDemo" :href="urlDemo" @click.stop target="_blank"
                class="flex flex-row items-center justify-center flex-grow gap-2 py-1 lan-button-secondary">
                View
                <NewTabIcon class="w-auto h-4"></NewTabIcon>
            </a>
            <div v-else
                class="flex items-center leading-tight justify-center px-2 text-[11px] text-center font-normal rounded-full border-2 border-secondary/50 dark:border-secondaryDark/50 text-secondary/50 dark:text-secondaryDark/50">
                Live not available
            </div>

            <a v-if="urlRepo" :href="urlRepo" @click.stop target="_blank"
                class="flex flex-row items-center justify-center flex-grow gap-2 py-1 lan-button-secondary group/github">
                Repo
                <Icon techName="Github"
                    class="transition size-4 dark:duration-1000 dark:group-hover/github:duration-300 text-primary group-hover/github:text-tertiary dark:text-primaryDark dark:group-hover/github:text-tertiaryDark">
                </Icon>
            </a>
            <div v-else
                class="flex items-center leading-tight justify-center px-2 text-[11px] text-center font-normal rounded-full border-2 border-secondary/50 dark:border-secondaryDark/50 text-secondary/50 dark:text-secondaryDark/50">
                Repository is restricted
            </div>
        </div>
        <!-- <div v-else
            class="flex items-center justify-center row-start-4 px-2 pt-3 pb-1 text-[11px] text-center font-normal text-secondary/50 dark:text-secondaryDark/50">
            Live and Repository are not available
        </div> -->
    </a>
    <!-- </RouterLink> -->
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Icon from './icons/Icon.vue';
import NewTabIcon from './icons/NewTabIcon.vue';

const props = defineProps<{
    title: string,
    description: string,
    imagesPath?: string,
    url?: string,
    urlDemo?: string,
    urlRepo?: string,
    reverseTheme?: boolean,
    tags?: string[],
    technologies?: string[],
}>();

const shortDesc = computed(() => {
    return props.description.length > 144 ? props.description.substring(0, 120) + '..' : props.description;
});
</script>