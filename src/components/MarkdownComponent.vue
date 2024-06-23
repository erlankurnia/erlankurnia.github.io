<template>
	<section v-if="contentMarkdown" id="markdown" class="w-full py-0 max-xs:min-h-screen">
		<div id="markdown-content" class="flex-row w-full" v-html="contentMarkdown"></div>
	</section>
</template>

<script>
import { ref, onMounted, onUpdated } from "vue";
import markdownit from "markdown-it";
import { copyText } from 'vue3-clipboard';

const mdit = markdownit({
	html: true,
	typographer: true,
	break: true,
});

export default {
	name: "MarkdownComponent",
	props: ["sourceMarkdown"],
	setup(props) {
		const contentMarkdown = ref(null);
		const originalCopyLabel = ' Copy ';
		const copiedLabel = 'Copied';
		// contentMarkdown.value = mdit.render(props.sourceMarkdown);

		onMounted(() => {
			const parsedContent = mdit.parse(props.sourceMarkdown, {});

			const addCopyBtn = (tokens) => {
				for (let i = 0; i < tokens.length; i++) {
					const token = tokens[i];

					if (token.type === 'fence' && token.tag === 'code') {
						const originalContent = token.content;

						const elButton = document.createElement("button");
						elButton.type = 'button';
						elButton.innerHTML = originalCopyLabel;
						elButton.classList.add(
							'copy-btn', 'absolute', 'top-2', 'right-[7px]', 'h-6', 'w-auto', 'text-sm',
							'font-semibold', 'px-[6px]', 'rounded-md', 'cursor-pointer', 'text-primary',
							'bg-tertiary', 'hover:bg-quaternary', 'hover:text-secondary'
						);

						const elLabel = document.createElement("span");
						elLabel.innerHTML = 'Type or copy the command/code below';
						elLabel.classList.add('absolute', 'top-3', 'text-xs', 'text-primary', 'select-none');

						const elContent = document.createElement("p");
						elContent.innerText = originalContent;
						elContent.classList.add('min-w-max');

						const elCode = document.createElement("code");
						elCode.appendChild(elLabel);
						elCode.appendChild(elContent);
						elCode.classList.add('!pt-8');

						const elContainer = document.createElement("pre");
						elContainer.appendChild(elCode);
						elContainer.appendChild(elButton);
						elContainer.classList.add('relative');

						token.type = 'html_inline';
						token.content = elContainer.outerHTML;
					}
				}
			};
			addCopyBtn(parsedContent);

			contentMarkdown.value = mdit.renderer.render(parsedContent, {});

			onUpdated(() => {
				if (contentMarkdown.value) {
					const copyToClipboard = (content, button = null) => {
						button.innerHTML = originalCopyLabel;

						copyText(content, undefined, (error, event) => {
							if (error) console.log(error)
							else {
								button.innerHTML = copiedLabel;
								setTimeout(() => {
									button.innerHTML = originalCopyLabel;
								}, 750);
							}
						});
					}

					const preContainer = document.querySelectorAll('#markdown-content pre');
					for (let pre of preContainer) {
						// console.log(pre);
						const content = pre.querySelector('code p');
						const btn = pre.querySelector('button.copy-btn');
						btn.addEventListener('click', () => copyToClipboard(content.innerText, btn));
					}
				}
			});
		});

		return {
			contentMarkdown,
		};
	},
};
</script>
