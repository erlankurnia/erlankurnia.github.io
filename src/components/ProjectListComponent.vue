<template>
    <section v-if="computedProjectList && computedProjectList.length > 0"
        class="grid justify-center w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 2xl:grid-cols-3 2xl:gap-6 2xl:mx-auto">
        <transition-group name="slide-up" appear>
            <CardItemComponent v-for="proj in computedProjectList" :key="proj.slug ?? proj.id"
                :id="'project-' + proj.id" :title="proj.title" :description="proj.description"
                :imagesPath="proj.imagesDir" :url="`${route.meta.url.project}/${proj.slug ?? proj.id}`"
                :urlDemo="proj.url" :urlRepo="proj.repo" :reverseTheme="reverseTheme"></CardItemComponent>
        </transition-group>
    </section>
</template>

<script setup lang="ts">
import type IProjectInfo from '@/helper/interfaces/IProjectInfo';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import CardItemComponent from './CardItemComponent.vue';

const route = useRoute();
let projectList: IProjectInfo[] = [];
const props = defineProps<{
    projects: IProjectInfo[],
    limit?: number,
    reverseTheme?: boolean,
}>();

const computedProjectList = computed(() => {
    projectList = [];

    if (props.projects != null && Array.isArray(props.projects)) {
        let a = 0;
        for (let note of props.projects) {
            projectList.push(note);
            a++;
            if (props.limit != undefined && a >= props.limit) break;
        }
    }

    return projectList;
});
</script>