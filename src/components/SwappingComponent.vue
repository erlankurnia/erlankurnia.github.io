<template>
	<div class="flex items-center justify-center h-screen">
		<p class="text-4xl font-bold">{{ text }}</p>
	</div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
	name: "SwappingComponent",
	setup() {
		const texts = ["nal.re", "_Erlan"];
		const text = ref(texts[0]);
		let index = 0,
			textIndex = 0;

		const animate = () => {
			text.value = texts[textIndex].slice(0, index + 1) + texts[1 - textIndex].slice(index + 1);
			index = (index + 1) % texts[0].length;
			if (index === 0) {
				textIndex = 1 - textIndex;
				setTimeout(animate, 2000);
			} else {
				setTimeout(animate, 500);
			}
		};

		onMounted(animate);

		return { text };
	},
};
</script>
