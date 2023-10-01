<template>
	<div id="accordion" class="p-8 space-y-2 xl:max-w-4xl xl:mx-auto">
		<!-- Collection items -->
		<div v-for="coll in collections" class="flex flex-col p-5 text-white rounded-lg bg-primary group" tabindex="1">
			<div class="flex items-center justify-between cursor-pointer">
				<span class="text-base font-semibold">{{ coll.title }}</span>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
					class="w-3 h-2 transition-all duration-500 group-focus:-rotate-180"
				/>
			</div>
			<div
				class="items-center invisible h-auto text-sm transition-all duration-700 opacity-0 max-h-0 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 group-focus:pt-4"
			>
				{{ coll.desc }}
			</div>
		</div>
		<!-- Collection items -->
	</div>
</template>

<script>
export default {
	name: "AccordionComponent",
	props: {
		collections: [
			{
				title: {
					type: String,
					required: true,
				},
				desc: {
					type: String,
					required: true,
				},
				date: {
					type: String,
					required: false,
				},
			},
		],
	},
	// data() {
	// 	return {
	// 		collection: [
	// 			{
	// 				title: "HTML",
	// 				desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad atque est amet deleniti, ipsam tempora voluptatibus quisquam qui rem sequi omnis dicta eveniet maxime ratione sint minima incidunt culpa repudiandae, fugiat quos!",
	// 			},
	// 			{
	// 				title: "Vue.js",
	// 				desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad atque est amet deleniti, ipsam tempora voluptatibus quisquam qui rem sequi omnis dicta eveniet maxime ratione sint minima incidunt culpa repudiandae, fugiat quos!",
	// 			},
	// 			{
	// 				title: "Tailwind CSS",
	// 				desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad atque est amet deleniti, ipsam tempora voluptatibus quisquam qui rem sequi omnis dicta eveniet maxime ratione sint minima incidunt culpa repudiandae, fugiat quos!",
	// 			},
	// 		],
	// 	};
	// },
	setup(props) {
		console.log(props.collections);
	},
	created() {
		console.log("created:", this.collections);
	},
	mounted() {
		console.log("mounted:", this.collections);
	},
	beforeUpdate() {
		console.log("beforeUpdate:", this.collections);
	},
};
</script>
