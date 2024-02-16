<template>
	<section v-if="dataUser != null && dataUser.reference" id="credit" class="pt-24 pb-16">
		<div class="container">
			<div class="w-full pt-4 text-center">
				<h4 class="mb-3 lan-section-title">References</h4>
			</div>

			<!-- Attribution -->
			<div class="flex flex-wrap" v-if="dataUser.reference.title">
				<div class="w-full mb-8 text-center">
					<h2 class="lan-section-subtitle" v-html="dataUser.reference.title"></h2>
					<p class="font-medium text-md text-secondary md:text-lg" v-html="dataUser.reference.description"></p>
				</div>
				<div class="w-full max-w-4xl px-4 mx-auto">
					<ul class="flex flex-col gap-4">
						<li v-for="(data, index) in dataUser.reference.credit" :key="index" class="flex flex-col w-full h-auto">
							<a class="flex font-bold text-primary" target="_blank" :href="data.url">
								<h4 v-html="data.title"></h4>
								<NewTabIcon class="w-auto h-[18px] pl-[2px] pt-[6px]"></NewTabIcon>
							</a>
							<p class="text-sm text-secondary" v-html="data.description"></p>
						</li>
					</ul>
				</div>
			</div>
			<!-- Attribution -->
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
