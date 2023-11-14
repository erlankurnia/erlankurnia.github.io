<template>
	<section id="contact" class="pt-24 pb-16 select-none bg-tertiary">
		<div class="container">
			<div class="w-full p-4">
				<div class="mx-auto mb-6 text-center">
					<h4 class="mb-2 lan-section-title">Contact_Me</h4>
					<h2 class="lan-section-subtitle lg:min-w-max">Contact Me for <span class="text-primary">Business</span> Purposes</h2>
					<p class="font-medium text-md text-secondary md:text-lg">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, veniam deserunt? Minima?
					</p>
				</div>
			</div>

			<!-- Contact button -->
			<div class="w-full px-4">
				<div class="flex flex-wrap items-center justify-center">
					<!-- Telegram -->
					<a
						v-if="dataUser.socialMedia?.telegram"
						:href="dataUser.socialMedia.telegram"
						target="_blank"
						class="flex items-center justify-center p-2 mx-1 border-2 rounded-full w-9 h-9 lan-text-primary"
						><svg role="img" width="100%" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<title>Telegram</title>
							<path
								d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
							/>
						</svg>
					</a>
					<!-- Telegram -->

					<!-- Email -->
					<a
						v-if="dataUser.socialMedia?.email"
						:href="'mailto://' + dataUser.socialMedia.email"
						target="_blank"
						class="flex items-center justify-center p-2 mx-1 border-2 rounded-full w-9 h-9 lan-text-primary"
					>
						<svg role="img" width="100%" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<title>Gmail</title>
							<path
								d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
							/>
						</svg>
					</a>
					<!-- Email -->
				</div>
			</div>
			<!-- Contact button -->

			<!-- Sparator -->
			<div class="flex items-center justify-center w-full gap-4 p-4 mx-auto my-4 xl:max-w-2xl">
				<span class="w-full border-t-2 border-quaternary"></span>
				<span class="text-sm font-bold text-primary md:text-base">OR</span>
				<span class="w-full border-t-2 border-quaternary"></span>
			</div>
			<!-- Sparator -->

			<!-- Message form -->
			<div class="xl:max-w-2xl xl:mx-auto">
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
						<button type="submit" class="w-full lan-button-primary">Send Message</button>
					</div>
				</form>
			</div>
			<!-- Message form -->
		</div>
	</section>
</template>

<script>
import { inject, ref } from "vue";

export default {
	name: "ContactComponent",
	setup() {
		const { dataUser } = inject("dataUser");
		return {
			dataUser,
		};
	},
};
</script>
