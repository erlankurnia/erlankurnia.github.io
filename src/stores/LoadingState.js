import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useLoadingState = defineStore("loadingState", () => {
    const progress = ref(0);

    const isDone = () => {
        console.log(`loadingState.isDone: ${progress.value <= 0}`);
        return progress.value <= 0;
    };

    const progressCount = computed(() => {
        console.log(`loadingState.progressCount: ${progress.value}`);
        return progress.value;
    });

    const addProgressByOne = () => {
        progress.value++;
        console.log(`loadingState.addProgressByOne: ${progress.value}`);
    };

    const removeProgressByOne = () => {
        progress.value--;
        console.log(`loadingState.addProgressByOne: ${progress.value}`);
    };

    return { progressCount, addProgressByOne, removeProgressByOne, isDone };
});
