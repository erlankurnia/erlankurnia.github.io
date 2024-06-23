import { createApp } from "vue";
import VueClipboard from 'vue3-clipboard';
// import VueCodeHighlight from "vue-code-highlight";
import App from "./App.vue";
import router from "./router";
import "./assets/css/tailwind.css";

const app = createApp(App);

app.use(router);
app.use(VueClipboard, {
    autoSetContainer: true,
    appendToBody: true,
});
// app.use(VueCodeHighlight);
app.mount("#app");
