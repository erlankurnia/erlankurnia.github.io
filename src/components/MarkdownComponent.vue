<template>
	<section v-if="sourceMarkdown" id="markdown" class="w-full py-0 max-xs:min-h-screen">
		<div id="markdown-content" class="flex-row w-full p-4" v-highlight v-html="sourceMarkdown"></div>
	</section>
</template>

<script>
export default {
	name: "MarkdownComponent",
	props: ["sourceMarkdown"],
};
</script>
