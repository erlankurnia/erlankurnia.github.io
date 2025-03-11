<script setup lang="ts">
import { computed, inject, onBeforeUnmount, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useHead } from '@unhead/vue';
import SearchIcon from "@/components/icons/SearchIcon.vue";
import ProjectListComponent from "@/components/ProjectListComponent.vue";
import DataUserSymbol from "@/helper/symbols/DataUserSymbol";
import type IProjectInfo from "@/helper/interfaces/IProjectInfo";
import Dictionary from "@/helper/interfaces/Dictionary";

const projectsList = new Dictionary<IProjectInfo>();

const route = useRoute()
const data = inject(DataUserSymbol);
const filter = ref('');
const searchKeyword = ref('');

if (route.params.filter instanceof Array) {
    filter.value = route.params.filter[0].toLowerCase();
} else {
    filter.value = route.params.filter.toLowerCase();
}

watchEffect(() => {
    if (data?.value?.portfolio?.projects != null && Array.isArray(data.value.portfolio.projects)) {
        projectsList.clear();
        for (let proj of data.value.portfolio.projects) {
            if (!proj.tags.join(',').toLowerCase().includes(filter.value)) continue;
            const key = `${proj.title}_${proj.description}_${proj.tags.join(' ')}_${proj.technologies?.join(' ')}_${proj.date}`.toLowerCase();
            projectsList.set(key, proj);
        }
    }
});

const computedProjectsList = computed(() => {
    return projectsList.filter((key: string, value: IProjectInfo) => key.includes(searchKeyword.value.toLowerCase()));
})

const notesHead = useHead({
    title: "Erlan Kurnia's Projects",
});

onBeforeUnmount(() => {
    if (notesHead !== undefined) notesHead.dispose();
});
</script>

<template>
    <section v-if="data != null && data.portfolio" id="credit"
        :class="['min-h-screen pt-16 pb-16 sm:pt-24', $attrs.class]">
        <div class="container">
            <div class="w-full pt-4 text-center">
                <h2 class="mb-3 lan-section-title">My Projects{{ filter ? ' in ' + filter : '' }}</h2>
            </div>

            <!-- Projects -->
            <div class="flex flex-wrap">
                <div class="w-full mb-8 text-center" v-if="data.portfolio">
                    <h3 v-if="data.portfolio.title" class="lan-section-subtitle" v-html="data.portfolio.title"></h3>
                    <p v-if="data.portfolio.description"
                        class="text-sm font-light text-secondary dark:text-secondaryDark md:text-base"
                        v-html="data.portfolio.description"></p>
                </div>
                <div class="w-full px-0 mb-8 text-center 2xl:px-6">
                    <div class="relative w-full max-w-[848px] mx-auto">
                        <input type="search" class="w-full px-8 text-center lan-textfield-primary"
                            v-model="searchKeyword">
                        <SearchIcon class="absolute size-6 top-3 bottom-3 left-2 text-primary dark:text-primaryDark">
                        </SearchIcon>
                    </div>
                </div>
                <ProjectListComponent v-if="computedProjectsList.count()" :projects="computedProjectsList.values()"
                    reverseTheme>
                </ProjectListComponent>
            </div>
            <!-- Projects -->
        </div>
    </section>
</template>
