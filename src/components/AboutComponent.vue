<template>
	<section id="about" class="pt-24 pb-16">
		<div class="container">
			<div class="flex flex-wrap">
				<div class="w-full px-4 pt-4 pb-0 mb-0 text-center">
					<h4 class="mb-3 lan-section-title">About_Me</h4>
				</div>
				<div class="w-full p-4 pt-0 mb-10 lg:w-1/2">
					<h2 class="lan-section-subtitle text-left lg:ml-0">
						Every<span class="text-primary">thing</span> Start from No<span class="text-primary">thing</span>
					</h2>
					<p class="mb-5 text-base font-medium text-secondary lg:text-lg">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, exercitationem ea quasi earum culpa aut tenetur
						aliquam corrupti minima numquam ut quaerat repellendus tempore maxime hic delectus perferendis dolores autem nisi
						vero cum architecto! Error suscipit autem vel quas molestias!
					</p>
				</div>
				<div class="w-full px-4 lg:w-1/2">
					<h3 class="lan-section-subtitle text-left lg:ml-0">
						Make <span class="text-primary">Connection</span>s on Social Media
					</h3>
					<p class="mb-6 text-base font-medium text-secondary lg:text-lg">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique maxime autem voluptas laboriosam perspiciatis
						nobis libero iste rerum consectetur eum tempore vitae dolorum magni et facere ipsam, tenetur veniam minima quidem
						reiciendis.
					</p>

					<SocialMediaComponent></SocialMediaComponent>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import SocialMediaComponent from "./SocialMediaComponent.vue";

export default {
	name: "AboutComponent",
	components: { SocialMediaComponent },
};
</script>
