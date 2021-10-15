import Vue from "vue";
import VueRouter from "vue-router";
import List from "../views/List.vue";
import ListInfinite from "../views/ListInfinite.vue";
import View from "../views/View.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/list/1",
  },
  {
    path: "/list/:page",
    name: "List",
    component: List,
  },
  {
    path: "/infinite",
    redirect: "/infinite/1",
  },
  {
    path: "/infinite/:page",
    name: "ListInfinite",
    component: ListInfinite,
  },
  {
    path: "/View/:idx",
    name: "View",
    component: View,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
