import { onMounted } from 'vue';
<template>
	<template v-if="isLoading">
		<main id="loading-fullpage-component" class="fixed top-0 bottom-0 left-0 right-0 z-50">
			<div class="flex items-center justify-center w-full h-full bg-primary">
			</div>
		</main>
	</template>
	<template v-else>
		<slot name="onSuccess"></slot>
	</template>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
	name: "LoadingFullPageComponent",
	// props: ["isLoading"],
	setup() {
		const isLoading = ref(true);

		onMounted(() => {
			isLoading.value = false;
		});

		return { isLoading };
	}
};
</script>
