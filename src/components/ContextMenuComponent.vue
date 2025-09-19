<script setup lang="ts">
import type ICoordinate from '@/helper/interfaces/ICoordinate';
import { computed, ref, type Ref } from 'vue';

const options = ref<HTMLElement | null>(null);
const targetCoords: Ref<ICoordinate> = ref({ x: 0, y: 0 });
const isVisible = ref(false);
const navbarMenu = document.querySelector('#navbar-menu') as HTMLElement;

const outerStyles = computed(() => {
    let left = targetCoords.value.x;
    let top = targetCoords.value.y;

    if (left < 0) left = 0;
    if (top < 0) top = 0;

    const styles: { top?: string, left?: string } = {
        top: `${top}px`,
        left: `${left}px`,
    };
    return {
        styles
    };
});

const menuStyles = computed(() => {
    const rect = options.value?.getBoundingClientRect();
    if (rect) {
        let containerWidth = rect.width;
        let containerHeight = rect.height;
        let left = targetCoords.value.x;
        let top = targetCoords.value.y;

        let offsideX = false;
        let offsideY = false;

        if (window.innerWidth < left + containerWidth + 16) offsideX = true;
        if (window.innerHeight < top + containerHeight + 16) offsideY = true;

        const styles: { width?: string, height?: string, transform?: string } = {
            width: `${containerWidth}px`,
            // height: `${optionHeight}px`,
        };

        if (!offsideX) containerWidth = 0;
        if (!offsideY) containerHeight = 0;
        if (offsideY || offsideX) styles.transform = `translate(-${containerWidth}px, -${containerHeight}px)`;

        return {
            styles
        };
    }

    return {};
});

const preventScroll = (event: Event) => {
    event.preventDefault();
};

const disableScroll = () => {
    window.addEventListener('scroll', preventScroll, { passive: false });
    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
};

const enableScroll = () => {
    window.removeEventListener('scroll', preventScroll);
    window.removeEventListener('wheel', preventScroll);
    window.removeEventListener('touchmove', preventScroll);
};

const applyPadding = () => {
    let paddingShow = '0';
    if (window.matchMedia('(min-width: 560px)').matches) {
        paddingShow = '0 8px 0 0';
    }
    document.body.style.overflow = isVisible.value ? 'hidden' : 'auto';
    document.body.style.padding = isVisible.value ? paddingShow : '0';
    if (navbarMenu != null) navbarMenu.style.padding = document.body.style.padding;
};

const show = (coords: ICoordinate) => {
    isVisible.value = true;
    targetCoords.value = coords;
    applyPadding();
    disableScroll();
};

const hide = (event: MouseEvent) => {
    isVisible.value = false;
    applyPadding();
    enableScroll();
};

applyPadding();
defineExpose({
    show,
    hide,
});
window.addEventListener('resize', applyPadding);
</script>

<template>
    <div v-if="isVisible" class="fixed z-9999 bg-transparent top-0 right-0 bottom-0 left-0" @click="hide">
        <div class="fixed size-auto bg-transparent" :style="outerStyles.styles">
            <transition name="show-up" appear>
                <div ref="options" :style="menuStyles.styles"
                    class="flex w-auto h-auto rounded-lg origin-top shadow-md min-w-32 max-w-[75vw] shadow-dark/25 bg-tertiary dark:bg-light">
                    <slot></slot>
                </div>
            </transition>
        </div>
    </div>
</template>
