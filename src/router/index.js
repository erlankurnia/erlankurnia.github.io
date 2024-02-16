import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CreditView from "../views/CreditView.vue";
import BlogView from "../views/BlogView.vue";
import ArticleView from "../views/ArticleView.vue";
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
			name: "references",
			component: CreditView,
			meta: { hideNavbar: false },
		},
		{
			path: "/blog",
			name: "blog",
			component: BlogView,
			meta: { hideNavbar: false },
		},
		{
			path: "/article/:id",
			name: "article",
			component: ArticleView,
			meta: { hideNavbar: false },
		},
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
