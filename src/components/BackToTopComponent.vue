<template>
	<a
		id="back-to-top"
		href="#home"
		class="fixed h-14 w-14 z-[9999] right-4 bottom-4 rounded-full hidden bg-primary p-4 hover:animate-pulse justify-center items-center"
	>
		<span class="w-full h-full text-bgSecondary">
			<svg viewBox="0 0 24 24" id="up-arrow" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="fill-current">
				<path
					id="primary"
					d="M15.71,5.29l-3-3a1,1,0,0,0-1.42,0l-3,3A1,1,0,0,0,9.71,6.71L11,5.41V21a1,1,0,0,0,2,0V5.41l1.29,1.3a1,1,0,0,0,1.42,0A1,1,0,0,0,15.71,5.29Z"
				></path>
			</svg>
		</span>
	</a>
</template>

<script>
export default {
	name: "BackToTopComponent",
};
</script>
