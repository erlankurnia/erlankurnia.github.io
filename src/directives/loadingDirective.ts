import type { DirectiveBinding } from 'vue';
import { useLoadingStore } from '@/stores/loadingStore';

export default {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
        const loadingStore = useLoadingStore();
        loadingStore.pushLoading();
    },
    unmounted(el: HTMLElement, binding: DirectiveBinding) {
        const loadingStore = useLoadingStore();
        loadingStore.pullLoading();
    },
};
