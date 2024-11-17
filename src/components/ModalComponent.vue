<template>
    <transition name="show-up">
        <div v-show="isVisible" id="block-modal"
            class="fixed top-0 bottom-0 left-0 right-0 z-[99999] flex items-end md:items-center justify-center bg-dark dark:bg-light bg-opacity-30 dark:bg-opacity-30 -m-64 p-64"
            @click="onCloseModal($event)">
            <div
                class="flex flex-col shadow-md bg-tertiary dark:bg-tertiaryDark max-h-screen md:max-w-[92%] md:max-h-[80%] xl:max-w-3xl rounded-t-xl md:rounded-b-xl">
                <!-- Modal Header -->
                <section
                    class="relative z-10 flex flex-col items-center justify-center w-full h-auto px-6 py-4 text-center min-h-16 text-dark dark:text-light">
                    <slot name="header"></slot>

                    <button type="button"
                        class="absolute flex items-center justify-center p-1 font-bold bg-transparent border-2 rounded-full cursor-pointer top-4 right-6 lan-text-danger"
                        @click="onCloseModal()">
                        <CloseIcon class="w-auto h-5"></CloseIcon>
                    </button>
                    <div
                        class="absolute bottom-0 border-b-[2px] border-quaternary dark:border-quaternaryDark w-full h-px">
                    </div>
                </section>
                <!-- Modal Header -->

                <!-- Modal Body -->
                <section class="relative px-6 py-3 overflow-x-hidden overflow-y-auto" ref="modalBody">
                    <slot name="body"></slot>
                </section>
                <!-- Modal Body -->

                <!-- Modal Footer -->
                <section class="relative flex items-center justify-center min-h-16">
                    <div class="absolute top-0 border-b-[2px] border-quaternary dark:border-quaternaryDark w-full h-px">
                    </div>
                    <!-- <button type="button"
                        class="p-2 m-3 text-xl font-bold bg-transparent border-2 rounded-full cursor-pointer lan-text-danger"
                        @click="onCloseModal()">
                        <CloseIcon class="w-auto h-6"></CloseIcon>
                    </button> -->
                </section>
                <!-- Modal Footer -->
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import CloseIcon from "./icons/CloseIcon.vue";

const isVisible = ref(false);
const modalBody = useTemplateRef<HTMLElement>('modalBody');
const emit = defineEmits<{
    (e: 'close'): void
}>();

const onVisibleChange = (status: boolean) => {
    isVisible.value = status;
    // console.log(`onVisibleChange: ${status}`);
    document.body.style.overflow = isVisible.value ? 'hidden' : 'auto';
    document.body.style.padding = isVisible.value ? '0 8px 0 0' : '0';
    if (modalBody.value) modalBody.value.scrollTop = 0;
}

function onCloseModal(event: Event | null = null) {
    const target = event?.target as HTMLElement;
    if (event == null || event.target == null || target.id == "block-modal") {
        emit('close');
        onVisibleChange(false);
    }
}

defineExpose({
    onVisibleChange
});
</script>
