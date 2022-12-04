import Vue from "vue";
import VueRouter, { NavigationGuard, RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const loginGuard: NavigationGuard = (to, from, next) => {
  if (localStorage.getItem("Token") != null) {
    next();
  } else {
    next("Login");
  }
};

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    // beforeEnter: firstPageForAuthUser
  },
  {
    path: "/sale",
    name: "Sale",
    // route level code-splitting
    // this generates a separate chunk (sale.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "sale" */ "../views/Sale.vue"),
  },
  {
    path: "/category/:id/:categoryId?/:subcategoryId?",
    name: "Category",
    // route level code-splitting
    // this generates a separate chunk (category.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "category" */ "../views/Category.vue"),
  },
  {
    path: "/search",
    name: "Search",
    // route level code-splitting
    // this generates a separate chunk (search.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "search" */ "../views/Search.vue"),
  },
  {
    path: "/product/:segmentShop/:segmentProduct",
    name: "Product",
    // route level code-splitting
    // this generates a separate chunk (product.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/Product.vue"),
  },
  {
    path: "/shop",
    name: "Shop",
    // route level code-splitting
    // this generates a separate chunk (shop.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "shop" */ "../views/Shop.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    // route level code-splitting
    // this generates a separate chunk (profile.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
    beforeEnter: loginGuard,
  },
  {
    path: "/settings",
    name: "Settings",
    // route level code-splitting
    // this generates a separate chunk (settingsTest.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "settingsTest" */ "../views/Settings.vue"),
    children: [
      {
        path: "",
        name: "",
        // route level code-splitting
        // this generates a separate chunk (account.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "account" */ "../views/Settings/Account.vue"
          ),
        children: [
          {
            path: "",
            name: "",
            // route level code-splitting
            // this generates a separate chunk (accountAddress.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
              import(
                /* webpackChunkName: "accountAddress" */ "../views/Settings/Account/AccountAddress.vue"
              ),
          },
          {
            path: "accountPayment",
            name: "AccountPayment",
            // route level code-splitting
            // this generates a separate chunk (accountPayment.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
              import(
                /* webpackChunkName: "accountPayment" */ "../views/Settings/Account/AccountPayment.vue"
              ),
          },
          {
            path: "accountSecurity",
            name: "accountSecurity",
            // route level code-splitting
            // this generates a separate chunk (accountSecurity.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
              import(
                /* webpackChunkName: "accountSecurity" */ "../views/Settings/Account/AccountSecurity.vue"
              ),
          },
        ],
      },
      {
        path: "notification",
        name: "Notification",
        // route level code-splitting
        // this generates a separate chunk (notificationTest.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "notificationTest" */ "../views/Settings/Notification.vue"
          ),
      },
    ],
    beforeEnter: loginGuard,
  },
  {
    path: "/cart",
    name: "Cart",
    // route level code-splitting
    // this generates a separate chunk (cart.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cart" */ "../views/Cart.vue"),
  },
  {
    path: "/checkout",
    name: "Checkout",
    // route level code-splitting
    // this generates a separate chunk (checkout.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "checkout" */ "../views/Checkout.vue"),
  },
  {
    path: "/orders",
    name: "Orders",
    // route level code-splitting
    // this generates a separate chunk (checkout.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "checkout" */ "../views/Orders.vue"),
    children: [
      {
        path: "",
        name: "",
        // route level code-splitting
        // this generates a separate chunk (list.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "list" */ "../views/Orders/List.vue"),
        beforeEnter: loginGuard,
      },
      {
        path: "Order/:id",
        name: "order",
        // route level code-splitting
        // this generates a separate chunk (list.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "list" */ "../views/Orders/Order.vue"),
      },
      {
        path: "details/:id",
        name: "Details",
        // route level code-splitting
        // this generates a separate chunk (details.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "details" */ "../views/Orders/Details.vue"
          ),
      },
      {
        path: "/wishlist",
        name: "Wishlist",
        // route level code-splitting
        // this generates a separate chunk (wishlist.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "wishlist" */ "../views/Wishlist.vue"),
        beforeEnter: loginGuard,
      },
      {
        path: "/login",
        name: "Login",
        // route level code-splitting
        // this generates a separate chunk (login.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "login" */ "../views/Authorization/Login.vue"
          ),
      },
      {
        path: "/confirm-email/:token",
        name: "Confirm-email",
        // route level code-splitting
        // this generates a separate chunk (login.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "login" */ "../views/Authorization/Confirm-email.vue"
          ),
      },
      {
        path: "/Registration",
        name: "registration",
        // route level code-splitting
        // this generates a separate chunk (registration.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "registration" */ "../views/Authorization/Registration.vue"
          ),
      },
      {
        path: "/Check-email",
        name: "check-email",
        // route level code-splitting
        // this generates a separate chunk (registration.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "registration" */ "../views/Authorization/CheckEmail.vue"
          ),
      },
      {
        path: "/ResetPassword",
        name: "reset-password",
        // route level code-splitting
        // this generates a separate chunk (reset-password.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "reset-password" */ "../views/Authorization/ResetPassword.vue"
          ),
      },
      {
        path: "/restore-password/:token",
        name: "restore-password",
        // route level code-splitting
        // this generates a separate chunk (restore-password.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "restore-password" */ "../views/Authorization/RestorePassword.vue"
          ),
      },
      {
        path: "/ChangePassword",
        name: "change-password",
        // route level code-splitting
        // this generates a separate chunk (change-password.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "change-password" */ "../views/Authorization/ChangePassword.vue"
          ),
      },
      {
        path: "/Success",
        name: "success",
        // route level code-splitting
        // this generates a separate chunk (success.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "success" */ "../views/Authorization/Success.vue"
          ),
      },
    ],
  },

  {
    path: "/track/:id",
    name: "Track",
    // route level code-splitting
    // this generates a separate chunk (track.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "track" */ "../views/Track.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (contact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "contact" */ "../views/FooterLinks/Contact.vue"
      ),
  },
  //privacy pages
  {
    path: "/privacy",
    name: "Privacy",
    // route level code-splitting
    // this generates a separate chunk (privacy.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "privacy" */ "../views/FooterLinks/Privacy/Privacy.vue"
      ),
  },
  {
    path: "/terms",
    name: "Terms",
    // route level code-splitting
    // this generates a separate chunk (terms.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "terms" */ "../views/FooterLinks/Privacy/Terms.vue"
      ),
  },

  //404
  {
    path: "*",
    name: "404",
    // route level code-splitting
    // this generates a separate chunk (404.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "404" */ "../views/Error/404.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

export default router;
