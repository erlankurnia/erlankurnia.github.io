<template>
	<section v-if="dataUser != null && dataUser.blog" id="credit" class="pt-24 pb-16">
		<div class="container">
			<div class="w-full pt-4 text-center">
				<h4 class="mb-3 lan-section-title">Blog</h4>
			</div>

			<!-- Articles -->
			<div class="flex flex-wrap" v-if="dataUser.blog.title">
				<div class="w-full mb-8 text-center">
					<h2 class="lan-section-subtitle" v-html="dataUser.blog.title"></h2>
					<p
						class="font-medium text-md text-secondary md:text-lg"
						v-if="dataUser.blog.description"
						v-html="dataUser.blog.description"
					></p>
				</div>
				<div class="w-full max-w-4xl px-4 mx-auto sm:px-8">
					<ul class="flex flex-col gap-6">
						<li v-for="(data, index) in dataUser.blog.articles" :key="index" class="flex flex-col w-full h-auto">
							<RouterLink :to="'/article/' + data.id" class="mb-2 text-xl font-bold text-primary"
								><h4 v-html="data.title"></h4
							></RouterLink>
							<p
								class="text-sm text-secondary"
								v-if="data.description"
								v-html="('' + data.description).substring(0, data.description.length > 128 ? 128 : data.description.length)"
							></p>
						</li>
					</ul>
				</div>
			</div>
			<!-- Articles -->
		</div>
	</section>
</template>

<script>
import { inject } from "vue";

export default {
	name: "BlogView",
	setup() {
		const { dataUser } = inject("dataUser");
		return {
			dataUser,
		};
	},
};
</script>
