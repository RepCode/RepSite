import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'RepSite' },
  },
  {
    path: '/code',
    name: 'Code',
    meta: { title: 'RepCode' },
    component: () =>
      import(/* webpackChunkName: "repcode" */ '../views/Code.vue'),
  },
  {
    path: '/pics',
    name: 'Pics',
    meta: { title: 'RepPics' },
    component: () =>
      import(/* webpackChunkName: "reppics" */ '../views/Pics.vue'),
  },
];

const router: VueRouter = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
