<script setup lang="ts">
import { ref, onMounted, provide, type Ref, useTemplateRef, onUnmounted, defineAsyncComponent } from "vue";
import { RouterView } from "vue-router";
import { useHead } from "@unhead/vue";
import tools from "./helper/tools";
import FooterComponent from "@/components/FooterComponent.vue";
import ToggleDarkModeComponent from "@/components/ToggleDarkModeComponent.vue";
import type IDataUser from "./helper/interfaces/IDataUser";
import DataUserSymbol from "./helper/symbols/DataUserSymbol";
import ThemeModeSymbol from "./helper/symbols/ThemeModeSymbol";
import NamePartSymbol from "./helper/symbols/NamePartSymbol";
import EventBus, { EventBusEnum } from "./helper/EventBus";
import type { TDynamicModalComponent } from "./helper/interfaces/TDynamicModalComponent";
import LoadingFullPageComponent from "@/components/LoadingFullPageComponent.vue";
import { useLoadingStore } from "@/stores/loadingStore";
import { useScreenSizeStore } from "./stores/screenSizeStore";
import { ScreenSizeEnum } from "./helper/interfaces/ScreenSizeEnum";
import RetroTvCollapseComponent from "./components/RetroTvCollapseComponent.vue";

const ModalComponent = defineAsyncComponent(() => import('@/components/ModalComponent.vue'));
const NavbarComponent = defineAsyncComponent(() => import('@/components/NavbarComponent.vue'));
const NavbarMobileComponent = defineAsyncComponent(() => import('@/components/NavbarMobileComponent.vue'));
const ScrollUpComponent = defineAsyncComponent(() => import('@/components/ScrollUpComponent.vue'));
const ScrollDownComponent = defineAsyncComponent(() => import('@/components/ScrollDownComponent.vue'));

useHead({
	meta: [
		{
			charset: "utf-8",
		},
		{
			name: "viewport",
			content: "width=device-width, initial-scale=1",
		},
		{
			property: "og:type",
			content: "website",
		},
		{
			property: "og:url",
			content: "https://erlankurnia.github.io/",
		},
		{
			property: "twitter:url",
			content: "https://erlankurnia.github.io/",
		},
		{
			property: "twitter:card",
			content: "summary",
		},
	],
});

type ModalType = InstanceType<typeof ModalComponent>;
const modalComponent = useTemplateRef<ModalType>('modalComponent');
const dynamicComponent = ref<TDynamicModalComponent | null>(null);
const screenSizeStore = useScreenSizeStore();
const loadingStore = useLoadingStore();
const themeMode = ref(false);
const dataUser: Ref<IDataUser | null> = ref(null);
const nameParts: Ref<string[]> = ref([]);

const screenWidth = window.innerWidth;
// if (screenWidth <= 480) {
// 	screenSizeStore.setScreen(ScreenSizeEnum.SMALL);
// } else
if (screenWidth <= 768) {
	screenSizeStore.setScreen(ScreenSizeEnum.MEDIUM);
} else {
	screenSizeStore.setScreen(ScreenSizeEnum.LARGE);
}

async function getDataUser() {
	dataUser.value = await tools.getDataUser<IDataUser>();
	nameParts.value = ("" + dataUser.value.profile.name.value).split(" ");
}

function showModal(component: TDynamicModalComponent | null = null) {
	if (component && dynamicComponent) dynamicComponent.value = component;
	modalComponent.value?.onVisibleChange(true);
}

function hideModal(): void {
	modalComponent.value?.onVisibleChange(false);
	if (dynamicComponent) dynamicComponent.value = null;
}

onMounted(async () => {
	EventBus.$on(EventBusEnum.ShowModal, showModal);
	EventBus.$on(EventBusEnum.HideModal, hideModal);
	await getDataUser();
});
onUnmounted(() => {
	EventBus.$off(EventBusEnum.ShowModal, showModal);
	EventBus.$off(EventBusEnum.HideModal, hideModal);
});
provide(DataUserSymbol, dataUser);
provide(NamePartSymbol, nameParts);
provide(ThemeModeSymbol, themeMode);
</script>

<template>
	<div :class="{ 'dark': themeMode }">
		<NavbarComponent class="hidden sm:block"></NavbarComponent>
		<div v-if="dataUser" class="select-none lan-container-body">
			<router-view v-slot="{ Component }">
				<transition name="page-up" mode="out-in">
					<component :is="Component" />
				</transition>
			</router-view>
		</div>
		<FooterComponent></FooterComponent>
		<ScrollUpComponent></ScrollUpComponent>
		<ScrollDownComponent></ScrollDownComponent>
		<ToggleDarkModeComponent class="lan-floating size-12 sm:hidden"></ToggleDarkModeComponent>
		<NavbarMobileComponent class="block sm:hidden"></NavbarMobileComponent>

		<ModalComponent @close="hideModal" ref="modalComponent">
			<template #body v-if="dynamicComponent">
				<component :is="dynamicComponent.component" v-bind="dynamicComponent.props"></component>
			</template>
		</ModalComponent>

		<LoadingFullPageComponent v-if="loadingStore.isLoading"></LoadingFullPageComponent>
		<RetroTvCollapseComponent></RetroTvCollapseComponent>
	</div>
</template>
