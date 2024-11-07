import { createApp } from "vue";
import VueClipboard from 'vue3-clipboard';
import { createHead } from '@unhead/vue';
import { createPinia } from 'pinia'
// import VueCodeHighlight from "vue-code-highlight";
import App from "./App.vue";
import router from "./router";
import "./assets/css/tailwind.css";

const pinia = createPinia();
const head = createHead();
const app = createApp(App);

app.use(pinia);
app.use(head);
app.use(router);
app.use(VueClipboard, {
    autoSetContainer: true,
    appendToBody: true,
});
// app.use(VueCodeHighlight);
app.mount("#app");
