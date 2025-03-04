<template>
	<div :class="['page-up', $attrs.class]">
		<HeroComponent id="home" class="bg-quaternary dark:bg-quaternaryDark"></HeroComponent>
		<IntroComponent class="bg-tertiary dark:bg-tertiaryDark"></IntroComponent>
		<PortfolioComponent class="bg-quaternary dark:bg-quaternaryDark"></PortfolioComponent>
		<ContactComponent class="bg-tertiary dark:bg-tertiaryDark"></ContactComponent>
		<NextPageComponent class="bg-tertiary dark:bg-tertiaryDark" path="/who_iam" label="More About Me">
		</NextPageComponent>
	</div>
</template>

<script setup lang="ts">
import { onBeforeUnmount } from 'vue';
import { useHead } from '@unhead/vue';
import HeroComponent from "@/components/HeroComponent.vue";
import IntroComponent from "@/components/IntroComponent.vue";
import NextPageComponent from '@/components/NextPageComponent.vue';
import ContactComponent from '@/components/ContactComponent.vue';
import PortfolioComponent from '@/components/PortfolioComponent.vue';

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
