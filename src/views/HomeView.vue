<template>
	<HeroComponent id="home"></HeroComponent>
	<IntroComponent class="bg-quaternary"></IntroComponent>
	<ContactComponent class="bg-tertiary"></ContactComponent>
</template>

<script setup>
import { useHead } from '@unhead/vue';
import HeroComponent from "../components/HeroComponent.vue";
import IntroComponent from "../components/IntroComponent.vue";
import ContactComponent from "../components/ContactComponent.vue";
import { onBeforeUnmount } from 'vue';

const metaTitle = "Erlan Kurnia | LAN";
const metaDesc = "Hello, I'm Erlan Kurnia, Unity Developer, 'to entertain a group, you don't have to join that group'.";

const homepageHead = useHead({
	title: "Homepage",
	meta: [
		{
			name: "title",
			content: metaTitle,
		},
		{
			name: "description",
			content: metaDesc,
		},
		{
			property: "og:title",
			content: metaTitle,
		},
		{
			property: "og:description",
			content: metaDesc,
		},
		{
			property: "twitter:title",
			content: metaTitle,
		},
		{
			property: "twitter:description",
			content: metaDesc,
		},
	]
});

onBeforeUnmount(() => homepageHead.dispose());
</script>
