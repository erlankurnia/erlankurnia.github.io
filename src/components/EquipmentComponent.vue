<script setup lang="ts">
import { inject, ref, watch } from "vue";
import Icon from "@/components/icons/Icon.vue";
import EndpointSymbol from "@/helper/symbols/EndpointSymbol";
import type IEquipment from "@/helper/interfaces/IEquipment";
import tools from "@/helper/tools";
import type IEquipmentItem from "@/helper/interfaces/IEquipmentItem";
import type IPropsEquipmentComponent from "@/helper/contracts/props/IPropsEquipmentComponent";
import type ContextMenuComponent from "./ContextMenuComponent.vue";

const dataEndpoint = inject(EndpointSymbol);
const dataEquipment = ref<IEquipment>({});
const props = defineProps<IPropsEquipmentComponent>();

const selectedItem = ref<IEquipmentItem | null>(null);
type ContextMenuType = InstanceType<typeof ContextMenuComponent>;
const optionComponent = ref<ContextMenuType | null>(null);
const showOptions = (event: MouseEvent | null, item: IEquipmentItem | null) => {
	if (event != null && item != null) {
		selectedItem.value = item;
		optionComponent.value?.show({
			x: event.clientX,
			y: event.clientY,
		});
	}
};

watch(() => dataEndpoint?.value, async (newVal) => {
	if (newVal) {
		const resEquipment = (await tools.fetch<IEquipment>(newVal.equipment));
		dataEquipment.value = resEquipment.data ?? dataEquipment.value;

		const resSoftware = (await tools.fetch<Record<string, IEquipmentItem[]>>(newVal.software));
		if (dataEquipment.value.software && resSoftware.data) {
			dataEquipment.value.software.equipments = resSoftware.data;
		}

		const resHardware = (await tools.fetch<Record<string, IEquipmentItem[]>>(newVal.hardware));
		if (dataEquipment.value.hardware && resHardware.data) {
			dataEquipment.value.hardware.equipments = resHardware.data;
		}
	}
}, { immediate: true });
</script>

<template>
	<section v-if="dataEquipment" id="equipment" class="pt-24 max-md:px-2 pb-16">
		<div class="container"><!-- flex flex-col gap-8 -->
			<div class="w-full pt-4 text-center">
				<h2 class="mb-3 lan-section-title">EQUIPMENTS</h2>
			</div>

			<!-- Equipments -->
			<template v-for="(equipment, index) in dataEquipment" :key="index">
				<div class="flex flex-wrap my-8" v-if="equipment && ((index == 'software' && props.showSoftware) || (index == 'hardware' && props.showHardware))">
					<div class="w-full mx-auto mb-4 text-center">
						<h3 class="lan-section-subtitle" v-html="equipment.title"></h3>
						<p class="lan-section-desc" v-html="equipment.description"></p>
					</div>
					<!-- <div v-if="dataEquipment.hardware.image" class="w-full px-4 lg:w-1/3">
						<div class="relative my-10 lg:my-9 lg:right-0">
							<img :src="tools.getCdnUrl(dataEquipment.hardware.image)"
								class="w-full mx-auto max-md:rounded-xl lg:rounded-tr-xl lg:rounded-bl-xl" />
						</div>
					</div> -->
					<div class="w-full px-4">
						<table v-if="equipment && equipment.equipments"
							class="w-full mb-6 text-sm font-medium border-separate table-auto text-secondary dark:text-secondaryDark sm:text-base">
							<thead>
								<tr>
									<th></th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								<template v-for="(item, key) in equipment.equipments" :key="key">
									<tr
										class="w-auto grid grid-cols-[150px_auto_1fr] md:grid-cols-[168px_auto_1fr] max-lg:py-2">
										<td class="flex flex-row pt-6 lg:pt-7 align-top text-primary dark:text-primaryDark">
											<div class="max-h-[24px] lg:max-h-[28px] -mt-0.5 mr-1.5 aspect-square lg:mr-3">
												<Icon :techName="key"></Icon>
											</div>
											<h3 class="" v-html="key"></h3>
										</td>
										<td class="w-1 md:w-2 xl:w-4 2xl:w-6"></td>
										<td class="grid grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3 pt-4 align-text-top">
											<template v-for="data in item">
												<button type="button" @click="showOptions($event, data)"
													class="max-h-[36px] lg:max-h-[44px] w-fit max-w-xs py-2 lan-50-to-100 flex flex-row">
													<div class="h-full mr-2 aspect-square lg:mr-4">
														<Icon :techName="'' + data.icon"></Icon>
													</div>
													<h4 class="h-auto my-auto text-xs text-left font-bold min-w-min line-clamp-2 text-secondary dark:text-secondaryDark"
														v-html="data.name"></h4>
												</button>
											</template>
										</td>
									</tr>
								</template>
							</tbody>
						</table>
					</div>
				</div>
			</template>
			<!-- Equipments -->
		</div>

		<!-- <ContextMenuComponent v-if="selectedItem" ref="optionComponent">
			<div class="flex flex-col w-auto text-sm font-light divide-y divide-quaternary dark:divide-quaternaryDark">
				<RouterLink :to="'/projects/' + selectedItem.name"
					class="flex items-center justify-start w-full px-3 py-1 rounded-lg min-h-8 hover:bg-quaternary/90 dark:hover:bg-quaternaryDark/50">
					Show Related Project
				</RouterLink>
				<a v-if="selectedItem.urlInfo" :href="selectedItem.urlInfo" target="_blank"
					class="flex items-center justify-start w-full px-3 py-1 rounded-lg min-h-8 hover:bg-quaternary/90 dark:hover:bg-quaternaryDark/50">
					What is <span class="pl-2 font-medium"> {{ selectedItem.title }}</span>?
				</a>
			</div>
		</ContextMenuComponent> -->
	</section>
</template>
