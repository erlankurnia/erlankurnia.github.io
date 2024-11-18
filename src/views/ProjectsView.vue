<template>
    <section v-if="data != null && data.portfolio" id="credit"
        :class="['min-h-screen pt-16 pb-16 sm:pt-24', $attrs.class]">
        <div class="container">
            <div class="w-full pt-4 text-center">
                <h4 class="mb-3 lan-section-title">My Projects</h4>
            </div>

            <!-- Articles -->
            <div class="flex flex-wrap">
                <div class="w-full mb-8 text-center" v-if="data.portfolio">
                    <h2 v-if="data.portfolio.title" class="lan-section-subtitle" v-html="data.portfolio.title"></h2>
                    <p v-if="data.portfolio.description"
                        class="text-sm font-light text-secondary dark:text-secondaryDark md:text-base"
                        v-html="data.portfolio.description"></p>
                </div>
                <div class="w-full px-3 mb-8 text-center sm:px-6">
                    <div class="relative w-full max-w-[848px] mx-auto">
                        <input type="search" class="w-full px-8 text-center lan-textfield-primary"
                            v-model="searchKeyword">
                        <SearchIcon class="absolute size-6 top-3 bottom-3 left-2 text-primary dark:text-primaryDark">
                        </SearchIcon>
                    </div>
                </div>
                <div v-if="data.portfolio.projects"
                    class="grid justify-center w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 2xl:grid-cols-3 2xl:gap-6 2xl:mx-auto">
                    <transition name="slide-up" v-for="[index, proj] of computedListNotes.items()" :key="proj.id"
                        appear>
                        <RouterLink :to="`${route.meta.url.project}/${proj.slug ?? proj.id}`" :id="proj.id"
                            class="w-auto h-auto p-3 transition duration-200 scale-100 bg-transparent rounded-lg group hover:bg-tertiary dark:hover:bg-tertiaryDark hover:shadow-lg hover:lan-glass-effect hover:scale-105"
                            :class="{
                                'opacity-0': !isVisible,
                                'opacity-100': isVisible,
                            }">
                            <div v-if="proj.imagesDir" class="overflow-hidden rounded-md shadow-md">
                                <img :src="proj.imagesDir" :alt="proj.title"
                                    :class="{ 'w-full': proj.imagesDir != null && proj.imagesDir.length > 5 }" />
                            </div>
                            <div
                                class="text-lg font-semibold text-dark dark:text-light group-hover:text-primary dark:group-hover:text-primaryDark">
                                <h3 class="mt-5 mb-3" v-html="proj.title"></h3>
                            </div>
                            <p class="text-xs lan-section-desc lg:text-sm" v-html="proj.description"></p>
                            <div class="flex flex-row w-full h-auto gap-2 pt-4">
                                <a :href="`${route.meta.url.project}/${proj.slug}`" target="_blank"
                                    class="flex flex-row items-center justify-center flex-grow gap-2 py-1 lan-button-secondary">
                                    View
                                    <NewTabIcon class="w-auto h-4"></NewTabIcon>
                                </a>
                                <a v-if="proj.repo" :href="proj.repo" target="_blank"
                                    class="flex flex-row items-center justify-center flex-grow gap-2 py-1 lan-button-secondary group/github">
                                    Repo
                                    <Icon techName="Github"
                                        class="transition size-4 dark:duration-1000 dark:group-hover/github:duration-300 text-primary group-hover/github:text-tertiary dark:text-primaryDark dark:group-hover/github:text-tertiaryDark">
                                    </Icon>
                                </a>
                            </div>
                        </RouterLink>
                    </transition>
                </div>
            </div>
            <!-- Articles -->
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed, inject, onBeforeUnmount, onMounted, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useHead } from '@unhead/vue';
import DataUserSymbol from "@/helper/symbols/DataUserSymbol";
import Dictionary from "@/helper/interfaces/Dictionary";
import type IProjectInfo from "@/helper/interfaces/IProjectInfo";
import SearchIcon from "@/components/icons/SearchIcon.vue";

const projectList = new Dictionary<IProjectInfo>();

const route = useRoute()
const data = inject(DataUserSymbol);
const isVisible = ref(false);
const filter = ref('');
const searchKeyword = ref('');

if (route.params.filter instanceof Array) {
    filter.value = route.params.filter[0];
} else {
    filter.value = route.params.filter;
}

watchEffect(() => {
    if (data?.value?.portfolio?.projects != null && Array.isArray(data.value.portfolio.projects)) {
        data.value.portfolio.projects.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateA.getTime() - dateB.getTime();
        });
        data.value.portfolio.projects.reverse();

        projectList.clear();
        for (let note of data.value.portfolio.projects) {
            const key = `${note.title}_${note.description}_${note.features.join(' ')}_${note.technologies.join(' ')}_${note.date}`.toLowerCase();
            projectList.add(key, note);
        }
    }
});

const computedListNotes = computed(() => {
    return projectList.filter((key: string, value: IProjectInfo) => key.includes(searchKeyword.value.toLowerCase()));
})

const notesHead = useHead({
    title: "Erlan Kurnia's Projects",
});

const onScroll = () => {
    const viewportCenterY = window.innerHeight * 9 / 10;

    if (data?.value?.portfolio?.projects) {
        for (let a = 0; a < data.value.portfolio.projects.length; a++) {
            const itemElement = document.querySelector("#" + data.value.portfolio.projects[a].id) as HTMLElement;
            const offset = itemElement.offsetTop - window.scrollY - viewportCenterY;
            // const offscreen = itemElement.offsetTop - window.scrollY - window.innerHeight;
            // console.log(offset);
            const status = offset <= 0;
            isVisible.value = status;
        }
    }
};
onMounted(() => {
    window.addEventListener("scroll", onScroll);
});
onBeforeUnmount(() => {
    window.removeEventListener("scroll", onScroll);
    if (notesHead !== undefined) notesHead.dispose();
});
</script>
