<template>
	<section v-if="data && data.equipment" id="equipment" class="pt-24 max-md:px-2 pb-16">
		<div class="container">
			<div class="w-full pt-4 text-center">
				<h2 class="mb-3 lan-section-title">EQUIPMENTS</h2>
			</div>

			<!-- Hardware -->
			<!-- <div class="flex flex-wrap" v-if="data.equipment.hardware">
				<div class="w-full text-center">
					<h3 class="lan-section-subtitle" v-html="data.equipment.hardware.title"></h3>
					<p class="lan-section-desc" v-html="data.equipment.hardware.description"></p>
				</div>
				<div class="w-full px-4 lg:w-1/3">
					<div class="relative my-10 lg:my-9 lg:right-0">
						<img :src="data.equipment.hardware.image"
							class="w-full mx-auto max-md:rounded-xl lg:rounded-tr-xl lg:rounded-bl-xl" />
					</div>
				</div>
				<div class="w-full px-4 mt-6 lg:w-2/3">
					<table v-if="data.equipment.hardware && data.equipment.hardware.equipments"
						class="w-full mb-6 text-sm font-medium border-separate table-auto lg:ml-4 2xl:ml-8 4xl:ml-12 text-secondary dark:text-secondaryDark sm:text-base">
						<thead>
							<tr>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<template v-for="(item, key) in data.equipment.hardware.equipments" :key="key">
								<tr v-for="(data, index) in item" :key="index" class="">
									<td class="pb-2 align-text-top text-primary dark:text-primaryDark"
										v-html="index == 0 ? key : ''">
									</td>
									<td class="w-4 pb-2"></td>
									<td class="pb-2 align-text-top" v-html="data.name"></td>
								</tr>
							</template>
</tbody>
</table>
</div>
</div> -->
			<!-- Hardware -->

			<!-- <br /> -->

			<!-- Software -->
			<div class="flex flex-wrap" v-if="data.equipment.software">
				<div class="w-full text-center">
					<h3 class="lan-section-subtitle" v-html="data.equipment.software.title"></h3>
					<p class="lan-section-desc" v-html="data.equipment.software.description"></p>
				</div>
				<div class="w-full px-4">
					<table v-if="data.equipment.software && data.equipment.software.equipments"
						class="w-full mb-6 text-sm font-medium border-separate table-auto lg:ml-4 2xl:ml-8 4xl:ml-12 text-secondary dark:text-secondaryDark sm:text-base">
						<thead>
							<tr>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<template v-for="(item, key) in data.equipment.software.equipments" :key="key">
								<tr class="">
									<td class="py-6 align-top lg:py-7 text-primary dark:text-primaryDark">
										<h3 class="" v-html="key"></h3>
									</td>
									<td class="w-4 md:w-10 xl:w-16 2xl:w-24"></td>
									<td class="flex flex-wrap py-4 align-text-top">
										<template v-for="data in item">
											<div
												class="max-h-[36px] lg:max-h-[44px] w-fit max-w-xs py-2 lan-50-to-100 flex flex-row">
												<div class="h-full mr-2 aspect-square lg:mr-4">
													<Icon :techName="'' + data.icon"></Icon>
												</div>
												<h4 class="h-auto my-auto text-xs font-bold min-w-min text-secondary dark:text-secondaryDark"
													v-html="data.name"></h4>
											</div>
										</template>
									</td>
								</tr>
							</template>
						</tbody>
					</table>
				</div>
			</div>
			<!-- Software -->
		</div>
	</section>
</template>

<script setup lang="ts">
import { inject } from "vue";
// import { useDateTime } from "../helper/mixins/dateTime";
import Icon from "@/components/icons/Icon.vue";
import DataUserSymbol from "@/helper/symbols/DataUserSymbol";

// const {} = useDateTime();
const data = inject(DataUserSymbol);
</script>
