<template>
	<section v-if="dataUser != null && dataUser.journey" id="credit" class="pt-24 pb-16">
		<div class="container">
			<div class="w-full pt-4 text-center">
				<h4 class="mb-3 lan-section-title">Journey</h4>
			</div>

			<!-- Articles -->
			<div class="flex flex-wrap">
				<div class="w-full mb-8 text-center" v-if="dataUser.journey.title">
					<h2 class="lan-section-subtitle" v-html="dataUser.journey.title"></h2>
					<p class="font-medium text-md text-secondary md:text-lg" v-if="dataUser.journey.description"
						v-html="dataUser.journey.description"></p>
				</div>
				<div class="w-full max-w-4xl px-3 mx-auto sm:px-6" v-if="dataUser.journey.articles.length > 0">
					<ul class="flex flex-col gap-8">
						<li v-for="(data, index) in dataUser.journey.articles" :key="index"
							class="flex flex-col w-full h-auto px-4 py-3 rounded-xl hover:bg-quaternary">
							<RouterLink
								v-if="(($route.params == null || ('' + $route.params.filter) == '') || data.topics?.includes($route.params.filter)) && $route.meta.url?.article"
								:to="$route.meta.url.article + '/' + data.id + '/' + data.title">
								<div class="mb-2 text-xl font-bold text-primary">
									<h4 v-html="data.title"></h4>
								</div>
								<p class="text-sm text-secondary" v-if="data.description"
									v-html="('' + data.description).substring(0, data.description.length > 128 ? 128 : data.description.length)">
								</p>
								<p v-if="data.date" class="mt-2 text-xs font-light text-right text-secondary">{{
									data.date }}
								</p>
							</RouterLink>
						</li>
					</ul>
				</div>
			</div>
			<!-- Articles -->
		</div>
	</section>
</template>

<script>
import { inject, watchEffect } from "vue";

export default {
	name: "JourneyView",
	setup() {
		const { dataUser } = inject("dataUser");
		watchEffect(() => {
			if (dataUser?.journey?.articles != null && Array.isArray(dataUser.journey.articles)) {
				dataUser.journey.articles.sort((a, b) => {
					const dateA = new Date(a.date);
					const dateB = new Date(b.date);
					return dateA.getTime() - dateB.getTime();
				});
				dataUser.journey.articles.reverse();
			}
		});
		return {
			dataUser,
		};
	},
};
</script>
