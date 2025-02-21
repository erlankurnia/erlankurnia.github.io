<template>
	<section v-if="generatedContent" id="markdown" class="w-full py-0 select-text max-xs:min-h-screen">
		<div id="markdown-content" class="flex-row w-full overflow-x-auto text-dark dark:text-light"
			v-html="generatedContent"></div>
	</section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUpdated, type Ref } from "vue";
// import { copyText } from 'vue3-clipboard';
import useClipboard from 'vue-clipboard3';
import 'highlight.js/styles/stackoverflow-dark.min.css';
import hljs from 'highlight.js/lib/core';
import hljsApache from 'highlight.js/lib/languages/apache';
import hljsBash from 'highlight.js/lib/languages/bash';
import hljsCsharp from 'highlight.js/lib/languages/csharp';
import hljsGradle from 'highlight.js/lib/languages/gradle';
import hljsHttp from 'highlight.js/lib/languages/http';
import hljsIni from 'highlight.js/lib/languages/ini';
import hljsJavascript from 'highlight.js/lib/languages/javascript';
import hljsProp from 'highlight.js/lib/languages/properties';
import hljsRuby from 'highlight.js/lib/languages/ruby';
import hljsShell from 'highlight.js/lib/languages/shell';
import hljsXml from 'highlight.js/lib/languages/xml';
import MarkdownIt from "markdown-it";
import type { Token } from "markdown-it/index.js";
import type ISourceContent from "@/helper/interfaces/ISourceContent";
import type IPropsMarkdownComponent from "@/helper/interfaces/IPropsMarkdownComponent";

hljs.registerLanguage('apache', hljsApache);
hljs.registerLanguage('bash', hljsBash);
hljs.registerLanguage('csharp', hljsCsharp);
hljs.registerLanguage('gradle', hljsGradle);
hljs.registerLanguage('http', hljsHttp);
hljs.registerLanguage('ini', hljsIni);
hljs.registerLanguage('javascript', hljsJavascript);
hljs.registerLanguage('properties', hljsProp);
hljs.registerLanguage('ruby', hljsRuby);
hljs.registerLanguage('shell', hljsShell);
hljs.registerLanguage('xml', hljsXml);

const mdit = new MarkdownIt({
	breaks: true,
	html: true,
	typographer: true,
});
const { toClipboard } = useClipboard();

const props = defineProps<IPropsMarkdownComponent>();
const generatedContent: Ref<string | null> = ref(null);

const originalCopyLabel = ' Copy ';
const copiedLabel = 'Copied';
const rawCodeList: string[] = [];

onMounted(() => {
	const parsedContent = mdit.parse(props.contentMarkdown, {});

	const addCopyBtn = (tokens: Token[]) => {
		for (let i = 0; i < tokens.length; i++) {
			const token = tokens[i];

			if (token.type === 'fence' && token.tag === 'code') {
				const originalContent = hljs.highlight(token.content, { language: token.info }).value;
				// console.log(token.content);
				// console.log(originalContent);

				const elButton = document.createElement("button");
				elButton.type = 'button';
				elButton.id = 'btn-copy-code-' + rawCodeList.length;
				rawCodeList.push(token.content);
				elButton.innerHTML = originalCopyLabel;
				elButton.classList.add(
					'copy-btn', 'absolute', 'top-2', 'right-[7px]', 'h-6', 'w-auto', 'text-sm', 'font-semibold', 'px-1',
					'rounded-md', 'cursor-pointer', 'text-primary', 'bg-tertiary', 'hover:text-tertiary', 'hover:bg-primary', 'hover:font-bold',
					'dark:text-primaryDark', 'dark:bg-tertiaryDark', 'dark:hover:text-tertiaryDark', 'dark:hover:bg-primaryDark'
				);

				const elLabel = document.createElement("span");
				elLabel.innerHTML = 'Type or copy the command/code below';
				elLabel.classList.add('absolute', 'top-3', 'text-xs', 'text-light', 'select-none');

				const elContent = document.createElement("code");
				elContent.innerHTML = originalContent;
				elContent.classList.add('min-w-max');

				const elCode = document.createElement("pre");
				elCode.appendChild(elLabel);
				elCode.appendChild(elContent);
				elCode.classList.add('pt-8!');
				elCode.id = "markdown-code-content";

				const elContainer = document.createElement("span");
				elContainer.appendChild(elCode);
				elContainer.appendChild(elButton);
				elContainer.classList.add('relative', 'hljs');
				elContainer.id = "markdown-code-container";

				token.type = 'html_inline';
				token.content = elContainer.outerHTML;
			}
		}
	};
	const replaceGithubAssets = (tokens: Token[]) => {
		for (let i = 0; i < tokens.length; i++) {
			const token = tokens[i];

			if (token.type === 'html_block' && token.tag == '') {
				let originalContent = token.content;

				if (originalContent.includes('src="./') && originalContent.includes('use-github-assets') && props.sourceMarkdown) {
					const rawContentUrl = props.sourceMarkdown.url.replace('github.com', 'raw.githubusercontent.com');
					originalContent = originalContent.replace('src="./', `src="${rawContentUrl}/main/`);
					token.type = 'html_inline';
					token.content = originalContent;
				}
			}
		}
	};
	addCopyBtn(parsedContent);
	if (props.sourceMarkdown?.type && props.sourceMarkdown.type == 'github') replaceGithubAssets(parsedContent);

	generatedContent.value = "" + mdit.renderer.render(parsedContent, {}, {});

	onUpdated(() => {
		if (generatedContent.value) {
			const copyToClipboard = async (content: string, button: HTMLButtonElement | null = null) => {
				if (button != null) {
					button.innerHTML = originalCopyLabel;
					try {
						await toClipboard(content);
						button.innerHTML = copiedLabel;
						setTimeout(() => {
							button.innerHTML = originalCopyLabel;
						}, 750);
					} catch (e) {
						console.log(e);
					}
				}
			}

			const preContainer = document.querySelectorAll('#markdown-content span.relative.hljs');
			for (let pre of preContainer) {
				// const content = pre.querySelector('#markdown-code-container');
				const btn = pre.querySelector('button.copy-btn') as HTMLButtonElement;
				if (btn != null) {
					const idx = Number.parseInt(btn.id.replace('btn-copy-code-', ''));
					btn.addEventListener('click', async () => await copyToClipboard(rawCodeList[idx], btn));
				}
			}
		}
	});
});

</script>
