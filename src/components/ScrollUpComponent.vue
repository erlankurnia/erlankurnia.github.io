<template>
	<button id="scroll-up" @click="scrollToPrevSection"
		:class="['fixed h-12 w-12 z-[9999] right-4 bottom-[46%] hidden -translate-y-12 rounded-full shadow-lg border-[1px] p-1 hover:animate-pulse justify-center items-center lan-glass-effect 4xl:right-1/2 4xl:-mr-[760px]', $attrs.class]">
		<span class="w-full h-full text-primary dark:text-primaryDark">
			<svg xmlns="http://www.w3.org/2000/svg" class="fill-current" viewBox="0 0 24 24">
				<path d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z"></path>
			</svg>
		</span>
	</button>
</template>

<script setup>
function scrollToPrevSection() {
	const sections = document.querySelectorAll('section');
	let scrolled = false;

	// Convert NodeList to Array and reverse it
	const sectionsArray = Array.from(sections).reverse();

	sectionsArray.forEach((section) => {
		const rect = section.getBoundingClientRect();
		if (rect.bottom > document.body.scrollHeight && !scrolled) {
			section.scrollIntoView({ behavior: 'smooth' });
			scrolled = true;
		}
	});

	// If no previous section, scroll to the bottom of the page
	if (!scrolled) {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
}
</script>
