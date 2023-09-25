<template>
	<section id="story" class="pt-24 pb-16 bg-bgPrimary">
		<div class="container">
			<div class="w-full p-4">
				<div class="mx-auto mb-6 text-center">
					<h4 class="mb-2 text-lg font-semibold uppercase text-primary">My_History</h4>
					<h2 class="mb-4 text-3xl font-bold text-dark sm:text-4xl lg:5xl">
						How Did I <span class="text-primary">Reach</span> This Moment
					</h2>
					<p class="font-medium text-md text-secondary md:text-lg">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus consectetur minus iure? Sint in doloribus
						accusamus aspernatur quidem sequi ut!
					</p>
				</div>
			</div>

			<!-- Timeline -->
			<div class="w-full px-4">
				<ol>
					<li class="border-l-2 border-primary">
						<div class="md:flex flex-start">
							<div class="flex items-center justify-center w-6 h-6 -ml-[13px] translate-y-6 rounded-full bg-primary">
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									class="w-3 h-3 text-white"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512"
								>
									<path
										fill="currentColor"
										d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
									></path>
								</svg>
							</div>
							<div class="block max-w-md p-6 ml-6 rounded-lg shadow-lg bg-bgSecondary">
								<div class="flex justify-between mb-4">
									<a href="#!" class="px-2 text-base font-medium -translate-x-2 rounded-full lan-text-primary"
										>Unity Developer</a
									>
									<p class="px-2 text-sm font-medium translate-x-2 text-primary">Now</p>
								</div>
								<p class="mb-6 text-sm text-secondary">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et
									elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.
								</p>
								<button
									type="button"
									class="inline-block px-4 mr-1 py-1.5 font-medium text-xs leading-tight uppercase lan-button-primary"
									data-mdb-ripple="true"
								>
									Preview
								</button>
								<button
									type="button"
									class="inline-block px-4 py-1.5 font-medium text-xs leading-tight uppercase lan-button-secondary"
									data-mdb-ripple="true"
								>
									See demo
								</button>
							</div>
						</div>
					</li>
					<li class="border-l-2 border-bgSecondary">
						<div class="md:flex flex-start">
							<div class="flex items-center justify-center w-6 h-6 -ml-[13px] translate-y-6 rounded-full bg-bgSecondary">
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									class="w-3 h-3 text-primary"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512"
								>
									<path
										fill="currentColor"
										d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
									></path>
								</svg>
							</div>
							<div class="block max-w-md p-6 ml-6 rounded-lg shadow-lg bg-bgSecondary">
								<div class="flex justify-between mb-4">
									<a href="#!" class="px-2 text-base font-medium -translate-x-2 rounded-full lan-text-primary">Kitchen Staff</a>
									<p class="px-2 text-sm font-medium translate-x-2 text-primary">2021-02-07</p>
								</div>
								<p class="mb-6 text-sm text-secondary">
									Libero expedita explicabo eius fugiat quia aspernatur autem laudantium error architecto recusandae natus
									sapiente sit nam eaque, consectetur porro molestiae ipsam an deleniti.
								</p>
								<button
									type="button"
									class="inline-block px-4 mr-1 py-1.5 font-medium text-xs leading-tight uppercase lan-button-primary"
									data-mdb-ripple="true"
								>
									Preview
								</button>
								<button
									type="button"
									class="inline-block px-4 py-1.5 font-medium text-xs leading-tight uppercase lan-button-secondary"
									data-mdb-ripple="true"
								>
									See demo
								</button>
							</div>
						</div>
					</li>
				</ol>
			</div>
			<!-- Timeline -->
		</div>
	</section>
</template>

<script>
import { ref } from "vue";
export default {
	name: "StoryComponent",
	data() {
		histories: [
			{
				title: "Unity Developer",
				date: "Now",
				desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolorum at dolor, veritatis eos cum quaerat vitae aut sit atque.",
			},
			{
				title: "Kitchen Staff",
				date: "2021-02-07",
				desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates temporibus tempore cumque delectus dolore itaque pariatur recusandae, reprehenderit iusto voluptatem.",
			},
		];
	},
	setup() {},
};
</script>
