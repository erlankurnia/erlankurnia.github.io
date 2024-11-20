<template>
    <section v-if="data != null && data.portfolio" id="credit"
        :class="['min-h-screen pt-16 pb-16 sm:pt-24', $attrs.class]">
        <div class="container">
            <div class="w-full pt-4 text-center">
                <h4 class="mb-3 lan-section-title">My Projects</h4>
            </div>

            <!-- Projects -->
            <div class="flex flex-wrap">
                <div class="w-full mb-8 text-center" v-if="data.portfolio">
                    <h2 v-if="data.portfolio.title" class="lan-section-subtitle" v-html="data.portfolio.title"></h2>
                    <p v-if="data.portfolio.description"
                        class="text-sm font-light text-secondary dark:text-secondaryDark md:text-base"
                        v-html="data.portfolio.description"></p>
                </div>
                <!-- <div class="w-full px-3 mb-8 text-center sm:px-6">
                    <div class="relative w-full max-w-[848px] mx-auto">
                        <input type="search" class="w-full px-8 text-center lan-textfield-primary"
                            v-model="searchKeyword">
                        <SearchIcon class="absolute size-6 top-3 bottom-3 left-2 text-primary dark:text-primaryDark">
                        </SearchIcon>
                    </div>
                </div> -->
                <ProjectListComponent v-if="data.portfolio.projects" :projects="data.portfolio.projects"
                    :reverseTheme="true">
                </ProjectListComponent>
            </div>
            <!-- Projects -->
        </div>
    </section>
</template>

<script setup lang="ts">
import { inject, onBeforeUnmount, ref } from "vue";
import { useRoute } from "vue-router";
import { useHead } from '@unhead/vue';
import DataUserSymbol from "@/helper/symbols/DataUserSymbol";
// import SearchIcon from "@/components/icons/SearchIcon.vue";
import ProjectListComponent from "@/components/ProjectListComponent.vue";

const route = useRoute()
const data = inject(DataUserSymbol);
const filter = ref('');
// const searchKeyword = ref('');

if (route.params.filter instanceof Array) {
    filter.value = route.params.filter[0];
} else {
    filter.value = route.params.filter;
}

const notesHead = useHead({
    title: "Erlan Kurnia's Projects",
});

onBeforeUnmount(() => {
    if (notesHead !== undefined) notesHead.dispose();
});
</script>
