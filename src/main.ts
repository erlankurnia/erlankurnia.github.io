import { createApp } from "vue";
import { createHead } from '@unhead/vue';
import { createPinia } from "pinia";
// import { createI18n } from 'vue-i18n';

import App from "./App.vue";
import router from "./router";
import "./assets/css/tailwind.css";
// import loadingDirective from "@/directives/loadingDirective";

const head = createHead();
const app = createApp(App);
const pinia = createPinia();
// const i18n = createI18n({
//     locale: 'en',
//     legacy: false,
//     fallbackLocale: 'en',
//     messages: {
//         en: {
//             message: {
//                 hello: 'Hello World'
//             }
//         },
//         id: {
//             message: {
//                 hello: 'Halo Dunia'
//             }
//         },
//         ja: {
//             message: {
//                 hello: 'こんにちは、世界'
//             }
//         }
//     }
// });

app.use(pinia);
app.use(head);
app.use(router);
// app.directive('loading', loadingDirective);
app.mount("#app");
