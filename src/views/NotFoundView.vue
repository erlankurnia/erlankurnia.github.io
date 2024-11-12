<script setup lang="ts">
import { onBeforeUnmount } from 'vue';
import { useHead } from '@unhead/vue';

const notFoundHead = useHead({
	title: "Page not found",
});

onBeforeUnmount(() => {
	if (notFoundHead !== undefined) notFoundHead.dispose();
});
</script>

<template>
	<div :class="['flex items-center justify-center w-10/12 min-h-[80vh] m-auto', $attrs.class]">
		<div class="w-full p-2 md:w-1/2 md:p-4">
			<h1 class="mb-4 text-2xl font-bold text-secondary dark:text-secondaryDark md:text-4xl">
				404<span class="text-primary dark:text-primaryDark">_</span>Not<span
					class="text-primary dark:text-primaryDark">_</span>Found
			</h1>
			<p class="mb-8 text-lg text-secondary dark:text-secondaryDark md:text-xl">
				Oops!<br />I have no intention of creating the page you are looking for.
			</p>
			<a href="/" class="inline-block px-3 py-1 lan-button-primary">Go to Home</a>
		</div>
	</div>
</template>
