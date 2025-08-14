import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Awards from "./views/Awards.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/#premios", component: Awards },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    }
    return savedPosition || { top: 0 };
  },
});

export default router;
