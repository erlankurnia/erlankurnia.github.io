<template>
	<div class="w-auto px-4 mx-auto">
		<ol class="w-auto max-w-md mx-auto xl:max-w-2xl">
			<!-- Item list timeline -->
			<li v-for="(tl, index) in histories" class="flex flex-row mt-6" :key="index">
				<div class="hidden h-1 w-[480px] xl:block"></div>
				<div class="w-6 h-[260px] xl:h-[300px]">
					<div class="flex items-center justify-center w-6 h-6 rounded-full" :class="{
						'bg-quaternary': index != 0,
						'bg-primary': index == 0,
					}">
						<svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3" :class="{
							'text-quaternary': index == 0,
							'text-primary': index != 0,
						}" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
							<path fill="currentColor"
								d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z">
							</path>
						</svg>
					</div>
					<div class="w-[3px] h-full mx-auto" :class="{
						'bg-quaternary': index != 0,
						'bg-primary': index == 0,
					}"></div>
				</div>
				<div class="min-w-[280px] max-w-md xl:min-w-[320px] xl:max-w-2xl">
					<div class="w-auto">
						<div class="block max-w-md p-6 ml-6 rounded-xl bg-quaternary">
							<div class="flex justify-between mb-4">
								<a href="#!"
									class="px-2 text-base font-medium -translate-x-2 rounded-full lan-text-primary">{{
										tl.title }}</a>
								<p class="px-2 text-sm font-medium translate-x-2 text-primary">
									{{ tl.date }}
								</p>
							</div>
							<p class="mb-6 text-sm text-secondary">
								{{ tl.desc }}
							</p>
							<button v-if="tl.url.length > 10" type="button"
								class="inline-block px-4 mr-1 py-1.5 font-medium text-xs leading-tight uppercase lan-button-primary"
								data-mdb-ripple="true">
								Preview
							</button>
							<button v-if="false" type="button"
								class="inline-block px-4 py-1.5 font-medium text-xs leading-tight uppercase lan-button-secondary"
								data-mdb-ripple="true">
								See demo
							</button>
						</div>
					</div>
				</div>
			</li>
			<!-- Item list timeline -->
		</ol>
	</div>
</template>

<script>
import dateTimeMixins from "../helper/mixins/dateTime";

export default {
	mixins: [dateTimeMixins],
	name: "TimelineComponent",
	props: ["histories"],
};
</script>
