export const routes = [
  {
    path: "/login",
    component: () => import("@/views/login/login.vue"),
    name: "login",
  },
  {
    path: "/",
    component: () => import("@/views/home/home.vue"),
    name: "home",
  },
  {
    path: "/404",
    component: () => import("@/views/404/404.vue"),
    name: "404",
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
  },
];
