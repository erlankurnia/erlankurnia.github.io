import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CreditView from "../views/CreditView.vue";
import JourneyView from "../views/JourneyView.vue";
import ArticleView from "../views/ArticleView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const urls = {
	about: '/who_iam',
	credit: '/references',
	journey: '/journey',
	article: '/journey/article',
};

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
			meta: { url: urls, hideNavbar: false },
		},
		{
			path: urls.about,
			name: "who_iam",
			component: AboutView,
			meta: { url: urls, hideNavbar: false },
		},
		{
			path: urls.credit,
			name: "references",
			component: CreditView,
			meta: { url: urls, hideNavbar: false },
		},
		{
			path: urls.journey,
			name: "journey",
			component: JourneyView,
			meta: { url: urls, hideNavbar: false },
		},
		{
			path: urls.article + "/:id",
			name: "article",
			component: ArticleView,
			meta: { url: urls, hideNavbar: false },
		},
		{
			path: "/:pathMatch(.*)*",
			name: "not-found",
			component: NotFoundView,
			meta: { url: urls, hideNavbar: true },
		},
	],
	scrollBehavior(to, from, savedPosition) {
		// always scroll to top
		return { top: 0 };
	},
});

export default router;
