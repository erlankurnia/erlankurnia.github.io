<script lang="ts" setup>
import type IPropsHoneycombComponent from '@/helper/contracts/props/IPropsHoneycombComponent';
import HexagonItemComponent from './HexagonItemComponent.vue';
import Icon from './icons/Icon.vue';
import { computed, onMounted, ref } from 'vue';
import tools from '@/helper/tools';
import { rand } from '@vueuse/core';

const props = defineProps<IPropsHoneycombComponent>();

const getIndexes = () => tools.getRandomIndexes(props.data.length, rand(3, props.data.length / 3));
const randomIndexes = ref<number[]>(getIndexes());

onMounted(() => {
    setInterval(() => {
        randomIndexes.value = getIndexes();
    }, 2500);
});

const gridSize = computed(() => (props.refSize - 1) + 1);
const moduloSize = computed(() => (props.refSize - 1) * 2 + 1);
const moduloEmptyFill = computed(() => (props.refSize - 1) - 1);
</script>

<template>
    <div class="grid gap-x-[37.5px] -space-y-[29.625px] justify-items-center translate-x-[54.75px]"
        :class="'grid-cols-' + gridSize">
        <template v-for="(item, index) in data" :key="item.iconName">
            <HexagonItemComponent v-if="item.iconName" class="bg-light w-18 h-15"
                :class="index % moduloSize >= refSize - 1 ? '-translate-x-[54.75px]' : ''"
                :invert-color="randomIndexes.includes(index)">
                <Icon :tech-name="item.iconName" class="size-8 m-auto" />
            </HexagonItemComponent>
            <div v-if="index % moduloSize == moduloEmptyFill"></div>
        </template>
    </div>
</template>
