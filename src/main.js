import { createApp } from "vue";
import VueCodeHighlight from "vue-code-highlight";
import App from "./App.vue";
import router from "./router";
import "./assets/css/tailwind.css";

const app = createApp(App);

app.use(router);
app.use(VueCodeHighlight);
app.mount("#app");
