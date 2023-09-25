<template>
	<section id="story" class="pt-24 pb-16 bg-bgPrimary">
		<div class="container">
			<div class="w-full p-4">
				<div class="mx-auto mb-6 text-center">
					<h4 class="mb-2 text-lg font-semibold uppercase text-primary">My_History</h4>
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
			<div class="w-auto px-4 mx-auto">
				<ol class="w-auto max-w-md mx-auto xl:max-w-2xl">
					<!-- Item list timeline -->
					<li v-for="(tl, index) in histories" class="flex flex-row mt-6" :key="index">
						<div class="hidden h-1 w-[480px] xl:block"></div>
						<div class="w-6 h-[300px] xl:h-[340px]">
							<div
								class="flex items-center justify-center w-6 h-6 rounded-full"
								:class="{
									'bg-bgSecondary': index != 0,
									'bg-primary': index == 0,
								}"
							>
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									class="w-3 h-3"
									:class="{
										'text-bgSecondary': index == 0,
										'text-primary': index != 0,
									}"
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
							<div
								class="w-[3px] h-full mx-auto"
								:class="{
									'bg-bgSecondary': index != 0,
									'bg-primary': index == 0,
								}"
							></div>
						</div>
						<div class="min-w-[280px] max-w-md xl:min-w-[320px] xl:max-w-2xl">
							<div class="w-auto">
								<div class="block max-w-md p-6 ml-6 rounded-xl bg-bgSecondary">
									<div class="flex justify-between mb-4">
										<a href="#!" class="px-2 text-base font-medium -translate-x-2 rounded-full lan-text-primary">{{
											tl.title
										}}</a>
										<p class="px-2 text-sm font-medium translate-x-2 text-primary">
											{{ tl.date }}
										</p>
									</div>
									<p class="mb-6 text-sm text-secondary">
										{{ tl.desc }}
									</p>
									<button
										v-if="tl.url.length > 10"
										type="button"
										class="inline-block px-4 mr-1 py-1.5 font-medium text-xs leading-tight uppercase lan-button-primary"
										data-mdb-ripple="true"
									>
										Preview
									</button>
									<button
										v-if="false"
										type="button"
										class="inline-block px-4 py-1.5 font-medium text-xs leading-tight uppercase lan-button-secondary"
										data-mdb-ripple="true"
									>
										See demo
									</button>
								</div>
							</div>
						</div>
					</li>
					<!-- Item list timeline -->

					<!-- <li class="flex flex-row mt-6">
						<div class="hidden h-1 w-[480px] xl:block"></div>
						<div class="w-6 h-[284px] xl:h-[304px]">
							<div class="flex items-center justify-center w-6 h-6 rounded-full bg-primary">
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
							<div class="w-[3px] h-full mx-auto bg-primary"></div>
						</div>
						<div class="max-w-md xl:max-w-2xl">
							<div class="w-auto">
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
						</div>
					</li>
					<li class="flex flex-row mt-6">
						<div class="hidden h-1 w-[480px] max-w-md xl:block"></div>
						<div class="w-6 h-[284px] xl:h-[304px]">
							<div class="flex items-center justify-center w-6 h-6 rounded-full bg-bgSecondary">
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
							<div class="w-[3px] h-full mx-auto bg-bgSecondary"></div>
						</div>
						<div class="max-w-md xl:max-w-2xl">
							<div class="w-auto">
								<div class="block max-w-md p-6 ml-6 rounded-lg shadow-lg bg-bgSecondary">
									<div class="flex justify-between mb-4">
										<a href="#!" class="px-2 text-base font-medium -translate-x-2 rounded-full lan-text-primary"
											>Kitchen Staff</a
										>
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
						</div>
					</li> -->
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
		return {
			histories: ref([
				{
					title: "Unity Developer",
					date: "Now",
					desc: "Anak Pintar Studio, Bogor, Indonesia",
					url: "",
				},
				{
					title: "Kitchen Staff",
					date: "2021-02-07",
					desc: "Rokupang Surabaya, Surabaya, Indonesia",
					url: "",
				},
				{
					title: "Tax Admin",
					date: "2019-10-26",
					desc: "CV. Karya Mandiri Sejahtera, Surabaya, Indonesia",
					url: "",
				},
			]),
		};
	},
	setup() {},
};
</script>
