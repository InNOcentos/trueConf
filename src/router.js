import Vue from "vue";
import Router from "vue-router";

import red from "@/views/screens/red";
import yellow from "@/views/screens/yellow";
import green from "@/views/screens/green";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/red",
      component: red,
    },
    {
      path: "/yellow",
      component: yellow,
    },
    {
      path: "/green",
      component: green,
    },
    {
      path: "*",
      redirect: "/red",
    },
  ],
});
