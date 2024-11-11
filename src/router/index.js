import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CreditView from "../views/CreditView.vue";
import NotesView from "../views/NotesView.vue";
import ArticleView from "../views/ArticleView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import CMSView from "../views/CMSView.vue";

const urls = {
	about: '/who_iam',
	credit: '/references',
	notes: '/notes',
	article: '/note',
	project: '/project',
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
			path: urls.notes + "/:filter?",
			name: "notes",
			component: NotesView,
			meta: { url: urls, hideNavbar: false },
		},
		{
			path: urls.article + "/:id/:title",
			name: "note",
			component: ArticleView,
			meta: { url: urls, hideNavbar: false },
		},
		{
			path: "/cms",
			name: "cms",
			component: CMSView,
			meta: { url: urls, hideNavbar: false },
		},
		{
			path: "/404",
			name: "404",
			component: NotFoundView,
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
		if (savedPosition) {
			return savedPosition
		} else {
			return { top: -8 }
		}
	},
});

export default router;
