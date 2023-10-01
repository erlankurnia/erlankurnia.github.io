<template>
	<div
		:class="{
			hidden: !useNewImg,
		}"
	>
		<GlitchedElement
			ref="glitched1"
			:options="{
				playMode: 'manual',
				createContainers: false,
				hideOverflow: true,
				timing: {
					duration: 2000,
				},
				glitchTimeSpan: {
					start: 0,
					end: 1,
				},
				shake: {
					velocity: 20,
					amplitudeX: 0,
					amplitudeY: 0,
				},
				slice: {
					count: 20,
					velocity: 10,
					minHeight: 0.02,
					maxHeight: 0.1,
					hueRotate: true,
				},
				pulse: true,
			}"
		>
			<img class="w-full h-auto max-w-sm" src="/img/ek.png" />
		</GlitchedElement>
	</div>
	<div
		:class="{
			hidden: useNewImg,
		}"
	>
		<GlitchedElement
			ref="glitched2"
			:options="{
				playMode: 'manual',
				createContainers: false,
				hideOverflow: true,
				timing: {
					duration: 2000,
				},
				glitchTimeSpan: {
					start: 0,
					end: 1,
				},
				shake: {
					velocity: 20,
					amplitudeX: 0,
					amplitudeY: 0,
				},
				slice: {
					count: 20,
					velocity: 10,
					minHeight: 0.02,
					maxHeight: 0.1,
					hueRotate: true,
				},
				pulse: true,
			}"
		>
			<img class="w-full h-auto max-w-sm" src="/img/portfolio/1.png" />
		</GlitchedElement>
	</div>

	<button @click="startGlitch" class="w-full max-w-sm px-6 py-2 my-8 rounded-full text-tertiary bg-primary">Play Glitch</button>
</template>

<script>
import { ref } from "vue";

export default {
	name: "SwappingComponent",
	data() {
		return {
			useNewImg: ref(false),
		};
	},
	setup() {
		const glitched1 = ref(null);
		const glitched2 = ref(null);
		return { glitched1, glitched2 };
	},
	methods: {
		startGlitch() {
			if (this.useNewImg) this.glitched1.startGlitch();
			else this.glitched2.startGlitch();
			setTimeout(() => {
				this.useNewImg = !this.useNewImg;
				console.log("Change image!");
			}, 2000);
		},
	},
};
</script>
