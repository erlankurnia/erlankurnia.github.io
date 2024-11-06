<template>
	<a id="back-to-top" href="#home"
		class="fixed h-12 w-12 z-[9999] right-4 bottom-24 sm:bottom-4 rounded-full hidden shadow-lg border-[1px] border-tertiary bg-primary p-2 hover:animate-pulse justify-center items-center">
		<span class="w-full h-full text-quaternary">
			<!-- <svg viewBox="0 0 24 24" id="up-arrow" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg"
				class="fill-current">
				<path id="primary"
					d="M15.71,5.29l-3-3a1,1,0,0,0-1.42,0l-3,3A1,1,0,0,0,9.71,6.71L11,5.41V21a1,1,0,0,0,2,0V5.41l1.29,1.3a1,1,0,0,0,1.42,0A1,1,0,0,0,15.71,5.29Z">
				</path>
			</svg> -->
			<svg xmlns="http://www.w3.org/2000/svg" class="fill-current" viewBox="0 0 24 24">
				<path d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z"></path>
			</svg>
		</span>
	</a>
</template>

<script>
export default {
	name: "BackToTopComponent",
	setup() { },
};
</script>
