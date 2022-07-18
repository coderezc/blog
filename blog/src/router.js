import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/note",
      name: "note",
      component: () => import("./views/Note.vue"),
    },
    {
      path: "/live",
      name: "live",
      component: () => import("./views/Live.vue"),
    },
    {
      path: "/message",
      name: "message",
      component: () => import("./views/Message.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue"),
    },
  ],
});
