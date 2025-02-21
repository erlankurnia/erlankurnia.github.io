<template>
	<section v-if="data && data.contact" id="contact" :class="['pt-24 pb-16', $attrs.class]">
		<div class="container">
			<div v-if="data.contact.title && data.contact.description" class="w-full p-4">
				<div class="mx-auto mb-6 text-center">
					<h4 class="mb-2 lan-section-title">Contact_Me</h4>
					<h2 class="lan-section-subtitle lg:min-w-max" v-html="data.contact.title"></h2>
					<p class="lan-section-desc" v-html="data.contact.description"></p>
				</div>
			</div>

			<!-- Contact button -->
			<div class="w-full px-4">
				<div class="flex flex-wrap items-center justify-center">
					<!-- Telegram -->
					<a v-if="data.socialMedia?.telegram" :href="data.socialMedia.telegram" target="_blank"
						class="flex items-center justify-center p-2 mx-1 border-2 rounded-full w-9 h-9 lan-text-primary"><svg
							role="img" width="100%" class="fill-current" viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<title>Telegram</title>
							<path
								d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
						</svg>
					</a>
					<!-- Telegram -->

					<!-- Email -->
					<a v-if="data.socialMedia?.email" :href="'mailto:' + data.socialMedia.email" target="_blank"
						class="flex items-center justify-center p-2 mx-1 border-2 rounded-full w-9 h-9 lan-text-primary">
						<svg role="img" width="100%" class="fill-current" viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<title>Gmail</title>
							<path
								d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
						</svg>
					</a>
					<!-- Email -->
				</div>
			</div>
			<!-- Contact button -->

			<!-- Sparator -->
			<div class="flex items-center justify-center w-full gap-4 p-4 mx-auto my-4 xl:max-w-2xl">
				<span class="w-full border-t-2 border-quaternary dark:border-quaternaryDark"></span>
				<span class="text-sm font-bold text-primary dark:text-primaryDark md:text-base">OR</span>
				<span class="w-full border-t-2 border-quaternary dark:border-quaternaryDark"></span>
			</div>
			<!-- Sparator -->

			<!-- Message form -->
			<div class="xl:max-w-2xl xl:mx-auto">
				<form @submit.prevent="submitForm">
					<div class="w-full px-4 mb-8">
						<label for="name" class="text-base font-bold text-primary dark:text-primaryDark">Name</label>
						<input type="text" id="name" class="w-full lan-textfield-primary" v-model="formName" />
					</div>
					<div class="w-full px-4 mb-8">
						<label for="email" class="text-base font-bold text-primary dark:text-primaryDark">Email</label>
						<input type="email" id="email" class="w-full lan-textfield-primary" v-model="formEmail" />
					</div>
					<div class="w-full px-4 mb-8">
						<label for="message"
							class="text-base font-bold text-primary dark:text-primaryDark">Message</label>
						<textarea type="text" id="message" class="w-full h-24 lan-textfield-primary"
							v-model="formMessage"></textarea>
					</div>
					<div class="w-full px-4">
						<button type="submit" class="w-full lan-button-secondary">Send Message</button>
					</div>
				</form>
			</div>
			<!-- Message form -->
		</div>
	</section>

	<ModalComponent @close="closeModal" ref="modalComponent">
		<template #body>
			<div class="flex items-center justify-center grow text-dark dark:text-light min-w-96 min-h-24">
				<p class="flex items-center justify-center grow w-full h-full" v-html="modalMessage"></p>
			</div>
		</template>
	</ModalComponent>

	<transition appear>
		<div v-if="showLoading"
			class="fixed z-9998 top-0 bottom-0 left-0 right-0 bg-dark/20 flex justify-center items-center">
			<LoadingComponent></LoadingComponent>
		</div>
	</transition>
</template>

<script setup lang="ts">
import { inject, ref, useTemplateRef } from "vue";
import { useRouter } from 'vue-router';
import ModalComponent from './ModalComponent.vue';
import LoadingComponent from "./LoadingComponent.vue";
import DataUserSymbol from "@/helper/symbols/DataUserSymbol";

type ModalType = InstanceType<typeof ModalComponent>
const modalComponent = useTemplateRef<ModalType>('modalComponent');

const router = useRouter();
const showLoading = ref(false);
const data = inject(DataUserSymbol);
const formName = ref('');
const formEmail = ref('');
const formMessage = ref('');
const modalMessage = ref('');

function closeModal() {
	document.body.style.overflow = '';
	modalComponent.value?.onVisibleChange(false);
	router.replace({ path: '/' });
}

async function submitForm() {
	showLoading.value = true;
	document.body.style.overflow = 'hidden';
	const response = await fetch('https://formspree.io/f/myzywvog', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			name: formName.value,
			email: formEmail.value,
			message: formMessage.value,
		})
	});

	if (response.ok) {
		formName.value = '';
		formEmail.value = '';
		formMessage.value = '';
		modalMessage.value = 'Thank you for your message! We will get back to you soon.';
	} else {
		modalMessage.value = 'There was an error submitting the form. Please try again.';
	}

	modalComponent.value?.onVisibleChange(true);
	showLoading.value = false;
}
</script>
