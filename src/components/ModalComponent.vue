<template>
    <div v-show="isVisible" id="block-modal"
        class="fixed top-0 bottom-0 left-0 right-0 z-[99999] flex items-center justify-center bg-dark bg-opacity-30"
        @click="onCloseModal($event)">
        <div class="flex flex-col shadow-md bg-tertiary max-w-[92%] max-h-[80%] xl:max-w-3xl rounded-2xl">
            <section
                class="relative z-10 flex flex-col items-center justify-center w-full h-auto px-6 py-4 text-center text-dark">
                <slot name="header"></slot>
                <div class="absolute bottom-0 border-b-[2px] border-quaternary w-full h-px"></div>
            </section>

            <section class="relative px-6 py-3 overflow-x-hidden overflow-y-auto" ref="modalBody">
                <slot name="body"></slot>
            </section>

            <section class="relative flex items-center justify-center">
                <div class="absolute top-0 border-b-[2px] border-quaternary w-full h-px"></div>
                <button type="button"
                    class="p-1 m-3 text-xl font-bold bg-transparent border-2 rounded-full cursor-pointer lan-text-primary"
                    @click="onCloseModal()">
                    <CloseIcon class="w-auto h-8"></CloseIcon>
                </button>
            </section>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import CloseIcon from "./icons/CloseIcon.vue";

export default {
    name: 'ModalComponent',
    components: { CloseIcon },
    setup() {
        const isVisible = ref(false);
        const modalBody = ref(null);
        return {
            isVisible,
            modalBody
        };
    },
    expose: ['onVisibleChange'],
    methods: {
        onCloseModal(event = null) {
            if (event == null || event.target.id == "block-modal") {
                this.$emit('close');
                this.onVisibleChange(false);
            }
        },
        onVisibleChange(status) {
            this.isVisible = status;
            console.log(`onVisibleChange: ${status}`);
            document.documentElement.style.overflow = this.isVisible ? 'hidden' : 'auto';
            this.modalBody.scrollTop = 0;
        }
    }
};
</script>
