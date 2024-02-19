<template>
	<section id="loading-component" class="w-full h-64 py-0">
		<div class="flex items-center justify-center w-full h-full p-5">
			<div class="flex space-x-2 animate-pulse">
				<div class="w-3 h-3 rounded-full bg-primary"></div>
				<div class="w-3 h-3 rounded-full bg-primary"></div>
				<div class="w-3 h-3 rounded-full bg-primary"></div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "LoadingComponent",
};
</script>
