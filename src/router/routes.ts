export const routes = [
  {
    path: "/login",
    component: () => import("@/views/login/login.vue"),
    name: "login",
    meta: {
      showNavbar: false,
    },
  },
  {
    path: "/",
    component: () => import("@/views/layout/layout.vue"),
    name: "layout",
    meta: {
      showNavbar: false,
      title: "layout",
    },
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () => import("@/views/layout/subroutingPage/home.vue"),
        meta: {
          showNavbar: true,
          title: "首页",
          icon: "House",
        },
      },
      {
        path: "/permissions",
        redirect: "/permissions/members",
        meta: {
          showNavbar: true,
          title: "限权管理",
          icon: "Lock",
        },
        children: [
          {
            path: "/permissions/members",
            component: () =>
              import("@/views/layout/subroutingPage/premissions/members.vue"),
            meta: {
              showNavbar: true,
              title: "用户管理",
              icon: "Avatar",
            },
          },
          {
            path: "/permissions/user-roles",
            component: () =>
              import("@/views/layout/subroutingPage/premissions/userRoles.vue"),
            meta: {
              showNavbar: true,
              title: "角色管理",
              icon: "Aim",
            },
          },
          {
            path: "/permissions/menu-management",
            component: () =>
              import(
                "@/views/layout/subroutingPage/premissions/menuManagement.vue"
              ),
            meta: {
              showNavbar: true,
              title: "菜单管理",
              icon: "Tickets",
            },
          },
        ],
      },
      {
        path: "/products",
        redirect: "/products/trademark",
        meta: {
          showNavbar: true,
          title: "商品管理",
          icon: "ShoppingTrolley",
        },
        children: [
          {
            path: "/products/trademark",
            component: () =>
              import("@/views/layout/subroutingPage/products/trademark.vue"),
            meta: {
              showNavbar: true,
              title: "品牌管理",
              icon: "ShoppingCart",
            },
          },
          {
            path: "/products/attr",
            component: () =>
              import("@/views/layout/subroutingPage/products/attr.vue"),
            meta: {
              showNavbar: true,
              title: "属性管理",
              icon: "PieChart",
            },
          },
          {
            path: "/products/spu",
            component: () =>
              import("@/views/layout/subroutingPage/products/spu.vue"),
            meta: {
              showNavbar: true,
              title: "SPU管理",
              icon: "Coordinate",
            },
          },
          {
            path: "/products/sku",
            component: () =>
              import("@/views/layout/subroutingPage/products/sku.vue"),
            meta: {
              showNavbar: true,
              title: "SKU管理",
              icon: "Sell",
            },
          },
        ],
      },
    ],
  },
  {
    path: "/screen",
    component: () => import("@/views/screen/screen.vue"),
    meta: {
      showNavbar: true,
      title: "数据大屏",
      icon: "DataAnalysis",
    },
  },
  {
    path: "/404",
    component: () => import("@/views/404/404.vue"),
    name: "404",
    meta: {
      showNavbar: false,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
    meta: {
      showNavbar: false,
    },
  },
];
