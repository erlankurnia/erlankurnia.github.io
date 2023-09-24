<template>
	<section id="contact" class="pt-24 pb-16 bg-bgPrimary">
		<div class="container">
			<div class="w-full p-4">
				<div class="mx-auto mb-16 text-center">
					<h4 class="mb-2 text-lg font-semibold uppercase text-primary">Contact</h4>
					<h2 class="mb-4 text-3xl font-bold text-dark sm:text-4xl lg:5xl">Contact <span class="text-primary">Me</span></h2>
					<p class="font-medium text-md text-secondary md:text-lg">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, veniam deserunt? Minima?
					</p>
				</div>
			</div>

			<form action="">
				<div class="w-full px-4 mb-8">
					<label for="name" class="text-base font-bold text-primary">Name</label>
					<input type="text" id="name" class="w-full lan-textfield-primary" />
				</div>
				<div class="w-full px-4 mb-8">
					<label for="email" class="text-base font-bold text-primary">Email</label>
					<input type="email" id="email" class="w-full lan-textfield-primary" />
				</div>
				<div class="w-full px-4 mb-8">
					<label for="message" class="text-base font-bold text-primary">Message</label>
					<textarea type="text" id="message" class="w-full h-24 lan-textfield-primary"></textarea>
				</div>
				<div class="w-full px-4">
					<button type="submit" class="w-full lan-button-primary">Send</button>
				</div>
			</form>
		</div>
	</section>
</template>

<script>
export default {
	name: "ContactComponent",
	setup() {
		return {};
	},
};
</script>
