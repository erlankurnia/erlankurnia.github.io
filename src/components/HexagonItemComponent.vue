<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from 'vue';

const props = defineProps<{ invertColor?: boolean }>();

const hexRef = ref<HTMLElement | null>(null);
const bgColor = ref<string | null>(null);
let originalClasses: string[] = [];

const updateColor = () => {
    const slotEl = hexRef.value?.querySelector('.hex-content');
    const svg = slotEl?.querySelector('svg');

    if (props.invertColor) {
        if (svg) {
            const shape = svg.querySelector('path, rect, circle, polygon');
            if (shape) {
                const computed = getComputedStyle(shape);
                bgColor.value = computed.fill || null;
            }
            originalClasses = Array.from(svg.classList).filter(c => c.startsWith('text-'));
            svg.classList.remove(...originalClasses);
            svg.classList.add('text-white');
        } else if (hexRef.value?.firstElementChild) {
            const computed = getComputedStyle(hexRef.value.firstElementChild as HTMLElement);
            bgColor.value = computed.backgroundColor || null;
        }
    } else {
        if (svg) {
            bgColor.value = '';
            svg.classList.remove('text-white');
            svg.classList.add(...originalClasses);
        } else if (hexRef.value?.firstElementChild) {
            bgColor.value = '';
        }
    }
};

watch(() => props.invertColor, async () => {
    await nextTick();
    updateColor();
});

onMounted(async () => {
    await nextTick();
    updateColor();

    const observer = new MutationObserver(updateColor);
    observer.observe(hexRef.value as HTMLElement, {
        childList: true,
        subtree: true,
        // attributes: true, // If true, would be tracking everytime the attributes has changes
    });
});
</script>

<template>
    <div ref="hexRef" class="hexagon">
        <div class="hex-content size-full flex justify-center align-middle transition duration-500"
            :style="{ backgroundColor: bgColor ?? '' }">
            <slot></slot>
        </div>
    </div>
</template>

<style>
.hexagon {
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%,
            75% 100%, 25% 100%, 0% 50%);
}
</style>
