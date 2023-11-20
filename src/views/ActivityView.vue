<template>
	<TimelineComponent class="bg-quaternary" :histories="repositories"></TimelineComponent>
</template>

<script>
import { inject, onMounted, provide, ref } from "vue";
import TimelineComponent from "../components/TimelineComponent.vue";

export default {
	name: "ActivityView",
	components: { TimelineComponent },
	setup() {
		const { dataUser } = inject("dataUser");
		const repositories = ref([]);

		async function getDataUser() {
			console.log(dataUser.value.socialMedia);
			if (typeof dataUser.value.socialMedia !== "object" && typeof dataUser.value.socialMedia.github !== "string") return;
			const url = ("" + dataUser.value.socialMedia.github).replace("github.com", "api.github.com/users") + "/repos";
			const res = await fetch(url);
			repositories.value = await res.json();
			console.log(repositories.value);
		}

		onMounted(getDataUser);
		provide("repositories", { repositories });

		return {
			dataUser,
		};
	},
};
</script>
