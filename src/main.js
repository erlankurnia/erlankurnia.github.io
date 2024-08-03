import { createApp } from "vue";
import VueClipboard from 'vue3-clipboard';
import { createHead } from '@unhead/vue';
// import VueCodeHighlight from "vue-code-highlight";
import App from "./App.vue";
import router from "./router";
import "./assets/css/tailwind.css";

const app = createApp(App);
const head = createHead();

app.use(head);
app.use(router);
app.use(VueClipboard, {
    autoSetContainer: true,
    appendToBody: true,
});
// app.use(VueCodeHighlight);
app.mount("#app");
