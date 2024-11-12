<template>
	<div class="flex justify-end w-screen h-screen text-tertiary bg-dark perspective">
		<div class="absolute flex items-end w-1/2 h-screen transition duration-1000 origin-left transform page"
			data-page="2" @click="togglePageFlip">
			<div
				class="absolute right-0 flex items-center justify-start w-full h-full px-2 text-xl font-bold bg-gray-900 front sm:text-3xl md:text-5xl sm:px-5 md:px-20">
				Page 3
			</div>
			<div
				class="absolute flex items-center justify-start w-full h-full px-2 text-xl font-bold bg-gray-800 back sm:text-3xl md:text-5xl sm:px-5 md:px-20">
				Page 4
			</div>
		</div>

		<div class="absolute flex items-end w-1/2 h-screen transition duration-1000 origin-left transform page"
			data-page="1" @click="togglePageFlip">
			<div
				class="absolute right-0 flex flex-col items-start justify-center w-full h-full px-2 text-xl font-bold bg-gray-900 front sm:text-3xl md:text-5xl sm:px-5 md:px-20">
				Welcome to this Page
				<p class="text-sm text-gray-500">Click me to open</p>
			</div>
			<div
				class="absolute flex items-center justify-start w-full h-full px-2 text-xl font-bold bg-gray-800 back sm:text-3xl md:text-5xl sm:px-5 md:px-20">
				This is Page 2
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

function setAllPagesBack() {
	var pages = document.getElementsByClassName("page");
	for (var i = 0; i < pages.length; i++) {
		pages[i].classList.remove("z-50");
	}
}

function setClickedPageForward(event: Event) {
	const target = event?.target as HTMLElement;

	target.classList.add("z-50");
}

function togglePageFlip(event: Event) {
	const target = event?.target as HTMLElement;

	setAllPagesBack();
	setClickedPageForward(event);
	target.classList.toggle("turn");
}
</script>

<style scoped>
.perspective {
	-webkit-perspective: 1800px;
	perspective: 1800px;
}

.page {
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
	-webkit-transform: rotateY(0deg);
	transform: rotateY(0deg);
}

.page.turn {
	-webkit-transform: rotateY(-180deg);
	transform: rotateY(-180deg);
}

.front,
.back {
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
}

.back {
	-webkit-transform: rotateY(-180deg);
	transform: rotateY(-180deg);
}
</style>
