import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "login"
  },
  {
    path: "/login",
    mame: "Login",
    component: () => import("../views/Login")
  },
  {
    path: "/home",
    mame: "Home",
    component: () => import("../views/Home")
  }
];

const router = new VueRouter({
  routes
});

export default router;
