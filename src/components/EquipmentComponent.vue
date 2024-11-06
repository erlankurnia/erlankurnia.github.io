<template>
	<section v-if="dataUser != null && dataUser.equipment" id="equipment" class="pt-24 pb-16">
		<div class="container">
			<div class="w-full pt-4 text-center">
				<h4 class="mb-3 lan-section-title">EQUIPMENTS</h4>
			</div>

			<!-- Hardware -->
			<!-- <div class="flex flex-wrap" v-if="dataUser.equipment.hardware">
				<div class="w-full text-center">
					<h2 class="lan-section-subtitle">Hard<span class="text-primary">ware</span></h2>
					<p class="lan-section-desc" v-html="dataUser.equipment.hardware_description"></p>
				</div>
				<div class="w-full px-4 lg:w-1/3">
					<div class="relative my-10 lg:my-9 lg:right-0">
						<img :src="dataUser.equipment.image"
							class="w-full mx-auto max-md:rounded-xl lg:rounded-tr-xl lg:rounded-bl-xl" />
					</div>
				</div>
				<div class="w-full px-4 mt-6 lg:w-2/3">
					<table
						class="w-full mb-6 text-sm font-medium border-separate table-auto lg:ml-4 2xl:ml-8 4xl:ml-12 text-secondary sm:text-base">
						<thead>
							<tr>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<template v-for="(item, key) in dataUser.equipment.hardware" :key="key">
								<template v-for="(data, index) in item" :key="index">
									<tr class="">
										<td class="pb-2 align-text-top text-primary" v-html="index == 0 ? key : ''">
										</td>
										<td class="w-4 pb-2"></td>
										<td class="pb-2 align-text-top" v-html="data.name"></td>
									</tr>
								</template>
</template>
</tbody>
</table>
</div>
</div> -->
			<!-- Hardware -->

			<!-- <br /> -->

			<!-- Software -->
			<div class="flex flex-wrap" v-if="dataUser.equipment.software">
				<div class="w-full text-center">
					<h2 class="lan-section-subtitle">Soft<span class="text-primary">ware</span></h2>
					<p class="lan-section-desc" v-html="dataUser.equipment.software_description"></p>
				</div>
				<div class="w-full px-4">
					<table
						class="w-full mb-6 text-sm font-medium border-separate table-auto lg:ml-4 2xl:ml-8 4xl:ml-12 text-secondary sm:text-base">
						<thead>
							<tr>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<template v-for="(item, key) in dataUser.equipment.software" :key="key">
								<tr class="">
									<td class="py-6 align-top lg:py-7 text-primary">
										<h3 class="" v-html="key"></h3>
									</td>
									<td class="w-4 md:w-10 xl:w-16 2xl:w-24"></td>
									<td class="flex flex-wrap py-4 align-text-top">
										<template v-for="data in item">
											<div
												class="max-h-[36px] lg:max-h-[44px] w-fit max-w-xs py-2 lan-50-to-100 flex flex-row">
												<div class="h-full mr-2 aspect-square lg:mr-4">
													<TechnologyIcon :techName="data.icon"></TechnologyIcon>
												</div>
												<h4 class="h-auto my-auto text-xs font-bold min-w-min text-secondary"
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

<script>
import { inject } from "vue";
import dateTimeMixins from "../helper/mixins/dateTime";
import TechnologyIcon from "./icons/Icon.vue";

export default {
	mixins: [dateTimeMixins],
	name: "EquipmentComponent",
	components: { TechnologyIcon },
	setup() {
		const { dataUser } = inject("dataUser");
		return {
			dataUser,
		};
	},
};
</script>
