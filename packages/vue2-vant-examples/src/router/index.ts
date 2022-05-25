import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/formily/template",
    name: "FormTemp",
    component: () =>
      import(
        /* webpackChunkName: "formily-template" */ "../views/formily/Template.vue"
      ),
  },
  {
    path: "/formily/markup",
    name: "FormMarkup",
    component: () =>
      import(
        /* webpackChunkName: "formily-markup" */ "../views/formily/MarkupSchema.vue"
      ),
  },
  {
    path: "/formily/json",
    name: "FormJson",
    component: () =>
      import(
        /* webpackChunkName: "formily-json" */ "../views/formily/JsonSchema.vue"
      ),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
