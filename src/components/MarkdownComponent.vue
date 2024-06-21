<template>
	<section v-if="contentMarkdown" id="markdown" class="w-full py-0 max-xs:min-h-screen">
		<div id="markdown-content" class="flex-row w-full" v-highlight v-html="contentMarkdown"></div>
	</section>
</template>

<script>
import { ref } from "vue";
import markdownit from "markdown-it";
// import { markdownItTable } from "markdown-it-table";

const mdit = markdownit({
	html: true,
	typographer: true,
	break: true,
});
// .use(markdownItTable);

export default {
	name: "MarkdownComponent",
	props: ["sourceMarkdown"],
	setup(props) {
		const contentMarkdown = ref(null);
		contentMarkdown.value = mdit.render(props.sourceMarkdown);
		return {
			contentMarkdown
		};
	}
};
</script>
