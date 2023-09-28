<template>
	<section id="story" class="pt-24 pb-0">
		<div class="container">
			<div class="w-full p-4 pb-0">
				<div class="mx-auto mb-6 text-center">
					<h4 class="mb-2 lan-section-title">My_History</h4>
					<h2 class="mb-4 text-3xl font-bold text-dark sm:text-4xl xl:5xl">
						How Did I <span class="text-primary">Reach</span> This Moment
					</h2>
					<p class="font-medium text-md text-secondary lg:text-lg">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus consectetur minus iure? Sint in doloribus
						accusamus aspernatur quidem sequi ut!
					</p>
				</div>
			</div>

			<!-- Timeline -->
			<Timeline2Component></Timeline2Component>
			<!-- Timeline -->
		</div>
	</section>
</template>

<script setup>
import Timeline2Component from "./Timeline2Component.vue";
</script>

<script>
export default {
	name: "StoryComponent",
	setup() {},
};
</script>
