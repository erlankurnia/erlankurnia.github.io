<script lang="ts" setup>
import { nextTick, ref } from 'vue';

const topCurtainRef = ref<HTMLElement | null>(null);
const bottomCurtainRef = ref<HTMLElement | null>(null);

setTimeout(async () => {
    await nextTick();
    if (topCurtainRef.value) {
        topCurtainRef.value.classList.remove('overflow-hidden');
        topCurtainRef.value.classList.add('scale-y-0');
    }
    if (bottomCurtainRef.value) {
        bottomCurtainRef.value.classList.remove('overflow-hidden');
        bottomCurtainRef.value.classList.add('scale-y-0');
    }
}, 500);
</script>

<template>
    <div ref="bottomCurtainRef"
        class="fixed z-9999 overflow-hidden h-[50vh] w-screen origin-bottom bottom-0 left-0 right-0 bg-quaternary dark:bg-quaternaryDark transition-all duration-500 scale-100 ease-in-out">
    </div>
    <div ref="topCurtainRef"
        class="fixed z-9999 overflow-hidden h-[50vh] w-screen origin-top top-0 left-0 right-0 bg-quaternary dark:bg-quaternaryDark transition-all duration-500 scale-100 ease-in-out">
    </div>
</template>
