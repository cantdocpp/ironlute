import { createRouter, createWebHistory } from "vue-router";

import Upload from "./pages/upload";
import Login from "./pages/login";

const routes = [
  { path: "/login", component: Login, name: "login" },
  { path: "/upload", component: Upload, name: "upload" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = window.localStorage.getItem("auth");
  console.log(to.name);
  if (to.name === "login") {
    return next();
  }
  if (!auth) {
    return router.push("/login");
  }
  next();
});

export default router;
