<template>
	<section v-if="dataUser != null && dataUser.reference" id="credit" class="pt-24 pb-16">
		<div class="container">
			<div class="w-full pt-4 text-center">
				<h4 class="mb-3 lan-section-title">References</h4>
			</div>

			<!-- Software -->
			<div class="flex flex-wrap" v-if="dataUser.reference.title">
				<div class="w-full text-center mb-8">
					<h2 class="lan-section-subtitle" v-html="dataUser.reference.title"></h2>
					<p class="font-medium text-md text-secondary md:text-lg" v-html="dataUser.reference.description"></p>
				</div>
				<div class="w-full px-4 max-w-4xl mx-auto">
					<ul class="flex flex-col gap-4">
						<li v-for="(data, index) in dataUser.reference.credit" :key="index" class="w-full h-auto flex flex-col">
							<a class="text-primary font-bold" target="_blank" :href="data.url"><h4 v-html="data.title"></h4></a>
							<p class="text-sm text-secondary" v-html="data.description"></p>
						</li>
					</ul>
				</div>
			</div>
			<!-- Software -->
		</div>
	</section>
</template>

<script>
import { inject } from "vue";
import NewTabIcon from "../components/icons/NewTabIcon.vue";

export default {
	name: "CreditView",
	components: { NewTabIcon },
	setup() {
		const { dataUser } = inject("dataUser");
		return {
			dataUser,
		};
	},
};
</script>
