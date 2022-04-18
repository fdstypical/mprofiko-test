import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import EmptyLayout from "@/layouts/EmptyLayout.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/auth",
    component: EmptyLayout,
    children: [
      {
        path: "/",
        name: "auth",
        component: () =>
          import(/* webpackChunkName: "auth" */ "@/views/Auth/Auth.vue"),
      },
    ],
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
