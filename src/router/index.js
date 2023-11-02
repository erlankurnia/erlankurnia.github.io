import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
			meta: { hideNavbar: false },
		},
		{
			path: "/about",
			name: "about",
			component: AboutView,
			meta: { hideNavbar: false },
		},
		{
			path: "/:pathMatch(.*)*",
			name: "not-found",
			component: NotFoundView,
			meta: { hideNavbar: true },
		},
	],
});

export default router;
