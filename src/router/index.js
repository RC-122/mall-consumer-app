import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Classify from '../views/Classify.vue';
import Shopping from '../views/Shopping.vue';
import My from '../views/My.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'classify',
        name: 'Classify',
        component: Classify,
      },
      {
        path: 'shopping',
        name: 'Shopping',
        component: Shopping,
      },
      {
        path: 'my',
        name: 'My',
        component: My,
      },
    ],
  },
  {
    path: '*',
    redirect: '/home/classify',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
