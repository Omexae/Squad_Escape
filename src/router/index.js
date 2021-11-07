import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../components/LoginPage.vue"),
  },
  {
    path: "/register",
    name: "Register Page",
    component: () => import("../components/CreateAccount.vue"),
  },
  {
    path: "/cart",
    name: "Cart page",
    component: () => import("../components/CartPage.vue"),
  },
  {
    path: "/account",
    name : "AccountPage",
    component: () => import("../components/AccountPage.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
