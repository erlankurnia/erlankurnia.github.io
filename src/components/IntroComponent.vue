<template>
	<section v-if="dataUser && dataUser.intro && dataUser.intro.length > 0" id="intro" class="pt-24 pb-16">
		<div class="container">
			<div class="flex flex-wrap gap-x-[2%]">
				<div class="w-full px-4 pt-4 text-center">
					<h4 class="mb-3 lan-section-title">Intro</h4>
				</div>
				<div
					v-for="(data, index) of dataUser.intro"
					class="w-full px-2 mb-8"
					:class="{
						'lg:w-[49%]': dataUser.intro.length >= 2,
					}"
					:key="index"
				>
					<h2
						class="lan-section-subtitle"
						:class="{
							'lg:text-left lg:ml-0': dataUser.intro.length >= 2,
							'lg:min-w-max': dataUser.intro.length == 1,
						}"
						v-html="data.title"
					></h2>
					<p class="mb-5 text-base font-medium text-justify text-secondary lg:text-lg" v-html="data.description"></p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { inject } from "vue";

export default {
	name: "IntroComponent",
	setup() {
		const { dataUser } = inject("dataUser");
		return {
			dataUser,
		};
	},
};
</script>
