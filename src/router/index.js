import store from '../store';
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import Orders from '../pages/Orders.vue';
import NewOrder from '../pages/NewOrder.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { guest: true },
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders,
    meta: { requiresAuth: true },
  },
  {
    path: '/neworder',
    name: 'NewOrder',
    component: NewOrder,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // if (store.getters.isAuthenticated) {
    //   next();
    //   return;
    // }
    next('/login');
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    // if (store.getters.isAuthenticated) {
    //   next('/');
    //   return;
    // }
    next();
  } else {
    next();
  }
});

export default router;
