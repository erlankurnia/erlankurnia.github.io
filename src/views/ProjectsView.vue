<script setup lang="ts">
import { inject, onBeforeUnmount, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useHead } from '@unhead/vue';
import SearchIcon from "@/components/icons/SearchIcon.vue";
import ProjectListComponent from "@/components/ProjectListComponent.vue";
import Dictionary from "@/helper/interfaces/Dictionary";
import type IDictionary from "@/helper/interfaces/IDictionary";
import type IProjectInfo from "@/helper/interfaces/IProjectInfo";
import DataAppSymbol from "@/helper/symbols/DataAppSymbol";
import EndpointSymbol from "@/helper/symbols/EndpointSymbol";
import tools from "@/helper/tools";
import type { IPortfolio } from "@/helper/interfaces/IPortfolio";

const route = useRoute();
const router = useRouter();

const dataApp = inject(DataAppSymbol);
const dataEndpoint = inject(EndpointSymbol);
const dataPortfolio = ref<IPortfolio>({ title: "", description: "", });
const availableTags = ref(new Set<string>());
const selectedTags = ref(new Set<string>());
const searchKeyword = ref('');
const projectsList = ref<IDictionary<IProjectInfo>>(new Dictionary<IProjectInfo>());
const filteredProjectsList = ref<IDictionary<IProjectInfo>>(new Dictionary<IProjectInfo>());

if (route.params.filter instanceof Array) {
    selectedTags.value = new Set<string>(route.params.filter.map(val => val.toLowerCase()));
} else if (typeof route.params.filter == 'string') {
    selectedTags.value = new Set<string>(route.params.filter.toLowerCase().split(','));
} else {
    selectedTags.value?.clear();
}
selectedTags.value?.delete('');

const toggleFilter = (tag: string) => {
    selectedTags.value?.delete('');
    if (selectedTags.value?.has(tag)) selectedTags.value?.delete(tag);
    else selectedTags.value?.add(tag);

    router.replace({
        name: route.name,
        params: {
            filter: Array.from(selectedTags.value).join(','),
        },
    });
};

const filterProjects = (keyword: string, tags: Set<string>) => {
    const filtered = projectsList.value.filter((key: string, value: IProjectInfo) => {
        const isMatch = value.tags.find(t => key.includes(keyword.toLowerCase()) && (tags.size == 0 || tags.has(t)))
        return isMatch !== undefined;
    });
    filteredProjectsList.value = filtered;
};

watch(() => dataEndpoint?.value, async (newVal) => {
    if (newVal) {
        dataPortfolio.value = (await tools.fetch<IPortfolio>(newVal.portfolio)).data ?? dataPortfolio.value;
        dataPortfolio.value.projects = (await tools.fetch<IProjectInfo[]>(newVal.project)).data ?? [];
        projectsList.value.clear();
        availableTags.value.clear();
        for (let proj of dataPortfolio.value.projects) {
            const key = `${proj.title}_${proj.description}_${proj.technologies?.join(' ')}_${proj.date}`.toLowerCase();
            projectsList.value.set(key, proj);
            for (let tag of proj.tags) {
                availableTags.value.add(tag);
            }
        }
        filterProjects(searchKeyword.value, selectedTags.value);
    }
}, { immediate: true });
watch([searchKeyword, selectedTags], ([newKeyword, newTags]) => {
    filterProjects(newKeyword, newTags);
}, { immediate: true, deep: true });

const notesHead = useHead({
    title: dataApp?.value?.fullname + "'s Projects",
});

onBeforeUnmount(() => {
    if (notesHead !== undefined) notesHead.dispose();
});
</script>

<template>
    <section v-if="dataApp != null && dataPortfolio" id="credit"
        :class="['min-h-screen pt-16 pb-16 sm:pt-24', $attrs.class]">
        <div class="container">
            <div class="w-full pt-4 text-center">
                <h2 class="mb-3 lan-section-title">My Projects ({{ filteredProjectsList.count() }})</h2>
            </div>

            <div class="flex flex-wrap">
                <div class="w-full mb-8 text-center" v-if="dataPortfolio">
                    <h3 v-if="dataPortfolio.title" class="lan-section-subtitle" v-html="dataPortfolio.title">
                    </h3>
                    <p v-if="dataPortfolio.description"
                        class="text-sm font-light text-secondary dark:text-secondaryDark md:text-base"
                        v-html="dataPortfolio.description">
                    </p>
                </div>

                <!-- Searchbar -->
                <div class="w-full px-4 mb-8 text-center 2xl:px-6">
                    <div class="relative w-full max-w-[848px] mx-auto">
                        <input type="search" class="w-full px-8 text-center lan-textfield-primary"
                            v-model="searchKeyword">
                        <SearchIcon class="absolute size-6 top-3 bottom-3 left-2 text-primary dark:text-primaryDark">
                        </SearchIcon>
                    </div>
                </div>
                <!-- Searchbar -->

                <!-- Tags filters -->
                <div class="flex flex-wrap gap-2 justify-center w-full px-0 mb-8 text-center 2xl:px-6">
                    <span v-for="(tag, index) of availableTags" :key="tag">
                        <input type="checkbox" :id="'tag-' + tag + '-' + index" class="hidden peer" :value="tag"
                            :checked="selectedTags?.has(tag)" @change="toggleFilter(tag)" />
                        <label :for="'tag-' + tag + '-' + index"
                            class="flex items-center justify-center text-xs py-1 px-2 font-normal select-none cursor-pointer rounded-lg border-2 border-primary dark:border-primaryDark text-secondary dark:text-secondaryDark transition-colors duration-200 ease-in-out peer-checked:bg-primary dark:peer-checked:bg-primaryDark peer-checked:text-tertiary dark:peer-checked:text-tertiaryDark">
                            #{{ tag }}
                        </label>
                    </span>
                </div>
                <!-- Tags filters -->

                <ProjectListComponent v-if="filteredProjectsList.count()" :projects="filteredProjectsList.values()"
                    reverseTheme>
                </ProjectListComponent>
            </div>
        </div>
    </section>
</template>
