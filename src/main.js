import { createApp } from "vue";
import PowerGlitchPlugin from "vue-powerglitch";

import App from "./App.vue";
import router from "./router";
import "./assets/css/tailwind.css";

const app = createApp(App);

app.use(router);
app.use(PowerGlitchPlugin);
app.mount("#app");
