import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "survey"
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login")
  },
  {
    path: "/survey",
    mame: "Survey",
    component: () => import("../views/Survey")
  }
];

const router = new VueRouter({
  routes
});

export default router;
