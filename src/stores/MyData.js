import { ref } from "vue";
import { defineStore } from "pinia";
import tools from '../helper/tools';

export const useMyDataStore = defineStore("my-data", async () => {
    const dataUser = ref({});
    const nameParts = ref([]);

    dataUser.value = await tools.getDataUser();
    nameParts.value = ("" + dataUser.value?.profile?.name?.value).split(" ");
    // async function getData() {
    // }

    console.log(dataUser.value);

    return { dataUser, nameParts };
});
