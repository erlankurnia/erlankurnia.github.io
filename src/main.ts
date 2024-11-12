import { createApp } from "vue";
import { createHead } from '@unhead/vue';
// import { createPinia } from 'pinia'

import App from "./App.vue";
import router from "./router";
import "./assets/css/tailwind.css";

// const pinia = createPinia();
const head = createHead();
const app = createApp(App);

// app.use(pinia);
app.use(head);
app.use(router);
app.mount("#app");
