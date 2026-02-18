<script lang="ts" setup>
import { inject, onBeforeUnmount } from 'vue';
import { useHead } from '@unhead/vue';
import DataAppSymbol from '@/helper/symbols/DataAppSymbol';
import EquipmentComponent from "@/components/EquipmentComponent.vue";

const dataApp = inject(DataAppSymbol);
const equipmentHead = useHead({
	title: dataApp?.value?.fullname + "'s Equipment",
});

onBeforeUnmount(() => {
	if (equipmentHead !== undefined) equipmentHead.dispose();
});
</script>

<template>
	<div :class="['page-up', $attrs.class]">
		<EquipmentComponent show-hardware show-software class="bg-tertiary dark:bg-tertiaryDark"></EquipmentComponent>
	</div>
</template>
