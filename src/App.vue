<template>
	<NavbarComponent></NavbarComponent>
	<div class="lan-container-body select-none">
		<RouterView />
	</div>
	<FooterComponent class="bg-tertiary"></FooterComponent>
	<BackToTopComponent></BackToTopComponent>
</template>

<script setup>
import { ref, onMounted, provide } from "vue";
import { RouterView } from "vue-router";
import NavbarComponent from "./components/NavbarComponent.vue";
import BackToTopComponent from "./components/BackToTopComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

const dataUser = ref({});
const nameParts = ref([]);

async function getDataUser() {
	const res = await fetch("/data_user.json");
	dataUser.value = await res.json();
	nameParts.value = ("" + dataUser.value.profile.name.value).split(" ");
}

onMounted(getDataUser);
provide("dataUser", { dataUser, nameParts });
</script>
