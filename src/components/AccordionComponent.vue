<template>
	<div id="accordion" class="p-4 space-y-2 xl:max-w-2xl xl:mx-auto">
		<!-- Collection items -->
		<div v-for="(coll, index) in collection"
			class="flex flex-col p-5 text-tertiary dark:text-tertiaryDark rounded-lg bg-primary dark:bg-primaryDark group"
			tabindex="1" :key="index">
			<div class="flex items-center justify-between cursor-pointer">
				<span class="text-base font-semibold" v-html="coll.title"></span>
				<img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
					class="w-3 h-2 transition-all duration-500 group-focus:-rotate-180" />
			</div>
			<div class="items-center invisible h-auto text-sm transition-all duration-700 opacity-0 max-h-0 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 group-focus:pt-4"
				v-html="coll.description"></div>
		</div>
		<!-- Collection items -->
	</div>
</template>

<script>
// import { computed } from "vue";
export default {
	name: "AccordionComponent",
	props: ["collection"],
};
</script>
