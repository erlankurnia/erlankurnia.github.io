import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CreditView from "../views/CreditView.vue";
import ActivityView from "../views/ActivityView.vue";
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
			path: "/who_iam",
			name: "who_iam",
			component: AboutView,
			meta: { hideNavbar: false },
		},
		{
			path: "/references",
			name: "credit",
			component: CreditView,
			meta: { hideNavbar: false },
		},
		// {
		// 	path: "/activity",
		// 	name: "activity",
		// 	component: ActivityView,
		// 	meta: { hideNavbar: false },
		// },
		{
			path: "/:pathMatch(.*)*",
			name: "not-found",
			component: NotFoundView,
			meta: { hideNavbar: true },
		},
	],
	scrollBehavior(to, from, savedPosition) {
		// always scroll to top
		return { top: 0 };
	},
});

export default router;
