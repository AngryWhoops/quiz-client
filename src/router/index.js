import IndexPage from "@/views/IndexPage.vue";
import QuestionPage from "@/views/QuestionPage.vue";
import ResultsPage from "@/views/ResultsPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "IndexPage",
    component: IndexPage,
  },
  {
    path: "/question",
    name: "QuestionPage",
    component: QuestionPage,
  },
  {
    path: "/results",
    name: "ResultsPage",
    component: ResultsPage,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),}
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
