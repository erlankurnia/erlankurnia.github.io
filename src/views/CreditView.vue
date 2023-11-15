<template>
	<section v-if="dataUser != null && dataUser.equipment" id="credit" class="pt-24 pb-16">
		<div class="container">
			<div class="w-full pt-4 text-center">
				<h4 class="mb-3 lan-section-title">INSPIRATION</h4>
			</div>

			<!-- Software -->
			<div class="flex flex-wrap" v-if="dataUser.equipment.software">
				<div class="w-full text-center">
					<h2 class="lan-section-subtitle">Soft<span class="text-primary">ware</span></h2>
					<p class="font-medium text-md text-secondary md:text-lg" v-html="dataUser.equipment.software_description"></p>
				</div>
				<div class="w-full px-4">
					<table
						class="w-full mb-6 lg:ml-4 2xl:ml-8 4xl:ml-12 text-sm font-medium border-separate table-auto text-secondary sm:text-base"
					>
						<thead>
							<tr>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<template v-for="(item, key) in dataUser.equipment.software" :key="key">
								<tr class="">
									<td class="py-6 lg:py-7 text-primary align-top">
										<h3 class="" v-html="key"></h3>
									</td>
									<td class="w-4 md:w-10 xl:w-16 2xl:w-24"></td>
									<td class="py-4 align-text-top flex flex-wrap">
										<template v-for="data in item">
											<div class="max-h-[40px] lg:max-h-[52px] w-fit max-w-xs py-2 lan-50-to-100 flex flex-row">
												<div class="h-full aspect-square mr-2 lg:mr-4">
													<TechnologyIcon :techName="data.icon"></TechnologyIcon>
												</div>
												<h4 class="h-auto text-xs font-bold my-auto min-w-min text-secondary" v-html="data.name"></h4>
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

export default {
	name: "CreditView",
	setup() {
		const { dataUser } = inject("dataUser");
		return {
			dataUser,
		};
	},
};
</script>
