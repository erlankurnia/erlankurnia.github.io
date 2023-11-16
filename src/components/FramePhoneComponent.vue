<template>
	<div
		class="relative flex justify-center h-[520px] w-[250px] border-4 border-black rounded-2xl"
		style="box-shadow: 10px 10px 5px 12px rgb(209, 218, 218)"
	>
		<slot name="content"></slot>
		<span class="border border-black bg-black w-3 h-3 mt-2 rounded-full"></span>
		<span class="absolute -right-2 top-20 border-4 border-black h-10 rounded-md"></span>
		<span class="absolute -right-2 top-44 border-4 border-black h-24 rounded-md"></span>
	</div>
</template>

<script>
export default {
	name: "FramePhoneComponent",
};
</script>
