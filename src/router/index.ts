import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import EmptyLayout from "@/layouts/EmptyLayout.vue";
import BaseLayout from "@/layouts/BaseLayout.vue";

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
    component: BaseLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home/Home.vue"),
      },
      {
        path: "/staff",
        name: "staff",
        component: () =>
          import(/* webpackChunkName: "staff" */ "@/views/Staff/Staff.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
