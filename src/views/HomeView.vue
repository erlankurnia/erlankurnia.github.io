<template>
	<div :class="['page-up', $attrs.class]">
		<HeroComponent id="home"></HeroComponent>
		<IntroComponent class="bg-quaternary dark:bg-quaternaryDark"></IntroComponent>
		<NextPageComponent class="bg-quaternary dark:bg-quaternaryDark" path="/who_iam" label="More About Me">
		</NextPageComponent>
	</div>
</template>

<script setup lang="ts">
import { onBeforeUnmount } from 'vue';
import { useHead } from '@unhead/vue';
import HeroComponent from "../components/HeroComponent.vue";
import IntroComponent from "../components/IntroComponent.vue";
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

onBeforeUnmount(() => {
	if (homepageHead !== undefined) homepageHead.dispose();
});
</script>
