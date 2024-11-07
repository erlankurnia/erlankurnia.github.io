<template>
	<div class="page-up">
		<HeroComponent id="home"></HeroComponent>
		<IntroComponent class="bg-quaternary"></IntroComponent>
		<ContactComponent class="bg-tertiary"></ContactComponent>
		<NextPageComponent path="/who_iam" label="Goto My Profile"></NextPageComponent>
	</div>
</template>

<script setup>
import { onBeforeUnmount } from 'vue';
import { useHead } from '@unhead/vue';
import HeroComponent from "../components/HeroComponent.vue";
import IntroComponent from "../components/IntroComponent.vue";
import ContactComponent from "../components/ContactComponent.vue";
import NextPageComponent from '../components/NextPageComponent.vue';

const metaTitle = "Erlan Kurnia | LAN";
const metaDesc = "Hello, I'm Erlan Kurnia, Unity Developer, 'to entertain a group, you don't have to join that group'.";

const homepageHead = useHead({
	title: "Erlan Kurnia",
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
