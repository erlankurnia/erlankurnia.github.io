<template>
    <RouterLink :to="'' + url"
        class="grid grid-rows-[auto,auto,auto,52px] w-auto h-auto p-3 transition duration-200 scale-100 rounded-lg group hover:shadow-lg hover:lan-glass-effect hover:scale-105"
        :class="{
            'bg-tertiary dark:bg-tertiaryDark': !(reverseTheme ?? false),
            'bg-quaternary dark:bg-quaternaryDark': (reverseTheme ?? false),
        }">
        <div v-if="imagesPath" class="overflow-hidden rounded-md shadow-md">
            <img v-for="(img, index) in (typeof imagesPath === 'string' ? [imagesPath] : imagesPath)" :key="index"
                :src="img" :alt="title" :class="{ 'w-full': img != null && img.length > 5 }" />
        </div>

        <div
            class="row-start-2 text-lg font-semibold text-center text-dark dark:text-light group-hover:text-primary dark:group-hover:text-primaryDark">
            <h3 class="mt-5 mb-3" v-html="title"></h3>
        </div>

        <p class="row-start-3 text-[10px] text-center lan-section-desc lg:text-xs" v-html="description"></p>

        <div v-if="urlDemo || urlRepo" class="grid w-full h-auto grid-cols-2 row-start-4 gap-2 pt-4">
            <a v-if="urlDemo" :href="urlDemo" @click.stop target="_blank"
                class="flex flex-row items-center justify-center flex-grow gap-2 py-1 lan-button-secondary">
                View
                <NewTabIcon class="w-auto h-4"></NewTabIcon>
            </a>
            <div v-else
                class="flex items-center justify-center px-2 text-[10px] font-normal text-secondary/50 dark:text-secondaryDark/50">
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
                class="flex items-center justify-center px-2 text-[10px] font-light text-secondary/50 dark:text-secondaryDark/50">
                Repository is restricted
            </div>
        </div>
        <div v-else
            class="flex items-center justify-center row-start-4 px-2 pt-3 pb-1 text-xs font-normal text-secondary/50 dark:text-secondaryDark/50">
            Live and Repository are not available
        </div>
    </RouterLink>
</template>

<script setup lang="ts">
import Icon from './icons/Icon.vue';
import NewTabIcon from './icons/NewTabIcon.vue';

defineProps<{
    title: string,
    description: string,
    imagesPath?: string | string[],
    url?: string,
    urlDemo?: string,
    urlRepo?: string,
    reverseTheme?: boolean,
}>();

</script>