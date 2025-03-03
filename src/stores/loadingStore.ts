import { defineStore } from 'pinia';

export const useLoadingStore = defineStore('loading', {
    state: () => ({
        isLoading: false,
        loadingCount: 0,
    }),
    actions: {
        pushLoading() {
            this.loadingCount += 1;
            if (this.loadingCount > 0) {
                this.isLoading = true;
            }
        },
        pullLoading() {
            if (this.loadingCount > 0) {
                this.loadingCount -= 1;
            }
            if (this.loadingCount === 0) {
                this.isLoading = false;
            }
        }
    }
});
