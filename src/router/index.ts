import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Container from '../components/container/src/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Container,
    children: [
      {
        path: '/',
        component: () => import('../views/home-view.vue'),
      },
      {
        path: '/chooseIcon',
        component: () => import('../views/chooseIcon/index.vue'),
      },
      {
        path: '/chooseArea',
        component: () => import('../views/chooseArea/index.vue'),
      },
      {
        path: '/trend',
        component: () => import('../views/trend/index.vue'),
      },
      {
        path: '/notification',
        component: () => import('../views/notification/index.vue'),
      },
      {
        path: '/menu',
        component: () => import('../views/menu/index.vue'),
      },
      {
        path: '/progress',
        component: () => import('../views/progress/index.vue'),
      },
      {
        path: '/form',
        component: () => import('../views/form/index.vue'),
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
