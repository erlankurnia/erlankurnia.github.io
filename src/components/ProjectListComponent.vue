<template>
    <section v-if="computedProjectList && computedProjectList.items().length > 0"
        class="grid justify-center w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 2xl:grid-cols-3 2xl:gap-6 2xl:mx-auto">
        <transition name="slide-up" v-for="[index, proj] in computedProjectList.items()" :key="index" appear>
            <CardItemComponent :id="'project-' + proj.id" :title="proj.title" :description="proj.description"
                :imagesPath="proj.imagesDir" :url="`${route.meta.url.project}/${proj.slug ?? proj.id}`"
                :urlDemo="proj.url" :urlRepo="proj.repo" :reverseTheme="reverseTheme"></CardItemComponent>
        </transition>
    </section>
</template>

<script setup lang="ts">
import Dictionary from '@/helper/interfaces/Dictionary';
import type IProjectInfo from '@/helper/interfaces/IProjectInfo';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import CardItemComponent from './CardItemComponent.vue';

const route = useRoute();
const projectList = new Dictionary<IProjectInfo>();
const projectKeys = ref(new Dictionary<string>());
const props = defineProps<{
    projects: IProjectInfo[],
    limit?: number,
    reverseTheme?: boolean,
}>();

const computedProjectList = computed(() => {
    projectList.clear();

    if (props.projects != null && Array.isArray(props.projects)) {
        // props.projects.sort((a, b) => {
        //     const dateA = new Date(a.date);
        //     const dateB = new Date(b.date);
        //     return dateA.getTime() - dateB.getTime();
        // });
        // props.projects.reverse();

        let a = 0;
        for (let note of props.projects) {
            const key = `${note.title}_${note.description}_${note.features?.join(' ')}_${note.technologies.join(' ')}_${note.date}`.toLowerCase();
            projectList.set(key, note);
            projectKeys.value.set('' + note.id, note.id + '_HIDE');
            a++;
            if (props.limit != undefined && a >= props.limit) break;
        }
    }

    return projectList;
})

const onScroll = () => {
    const viewportCenterY = window.innerHeight * 1 / 3;

    if (props.projects) {
        for (let a = 0; a < props.projects.length; a++) {
            const id = props.projects[a].id;
            const itemElement = document.querySelector("#project-" + id) as HTMLElement;
            const offset = itemElement.offsetTop - window.scrollY - viewportCenterY;
            // const offscreen = itemElement.offsetTop - window.scrollY - window.innerHeight;
            // console.log(offset);
            if (offset <= 0) projectKeys.value.set('' + id, id + "_SHOW");
        }
    }
};

onMounted(() => {
    window.addEventListener("scroll", onScroll);
});
onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
});
</script>