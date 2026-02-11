<script setup lang="ts">
import { inject, onBeforeUnmount } from 'vue';
import { useHead } from '@unhead/vue';
import HeroComponent from "@/components/HeroComponent.vue";
import IntroComponent from "@/components/IntroComponent.vue";
import NextPageComponent from '@/components/NextPageComponent.vue';
import ContactComponent from '@/components/ContactComponent.vue';
import PortfolioComponent from '@/components/PortfolioComponent.vue';
import DataAppSymbol from '@/helper/symbols/DataAppSymbol';

const dataApp = inject(DataAppSymbol);
const metaTitle = dataApp?.value?.appName + " | " + dataApp?.value?.fullname;
const metaDesc = '' + dataApp?.value?.description;
const homepageHead = useHead({
	title: '' + dataApp?.value?.fullname,
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

<template>
	<div :class="['page-up', $attrs.class]">
		<HeroComponent id="home" class="bg-quaternary dark:bg-quaternaryDark"></HeroComponent>
		<IntroComponent class="bg-tertiary dark:bg-tertiaryDark"></IntroComponent>
		<NextPageComponent class="bg-tertiary dark:bg-tertiaryDark" path="/who_iam" label="More About Me">
		</NextPageComponent>
		<PortfolioComponent class="bg-quaternary dark:bg-quaternaryDark"></PortfolioComponent>
		<ContactComponent class="bg-tertiary dark:bg-tertiaryDark"></ContactComponent>
	</div>
</template>
