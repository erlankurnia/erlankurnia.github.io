<template>
	<template v-if="isLoading">
		<main id="loading-fullpage-component" class="fixed top-0 bottom-0 left-0 right-0 z-1000">
			<div class="flex items-center justify-center w-full h-full bg-secondary/20 dark:bg-secondaryDark/20">
				<LoadingComponent></LoadingComponent>
			</div>
		</main>
	</template>
	<template v-else>
		<slot name="onSuccess"></slot>
	</template>
</template>

<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref } from 'vue';

const LoadingComponent = defineAsyncComponent(() => import('@/components/LoadingComponent.vue'));
const isLoading = ref(true);

onMounted(() => {
	setTimeout(() => {
		isLoading.value = false;
		console.log('isLoading: false');
	}, 2000);
	console.log('on mounted done!');
});
</script>
