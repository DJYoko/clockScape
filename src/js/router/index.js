import index from '@js/components/index';
import { createRouter, createWebHistory } from 'vue-router';

const base = window.location.pathname.replace(/\?.*/g, '').replace(/index\.html/g, '');

const router = createRouter({
  mode: 'history',
  base,
  history: createWebHistory('/'),
  routes: [
    {
      path: base + '/',
      name: 'index',
      component: index,
    },
    {
      path: base + '/index.html',
      name: '_index',
      component: index,
    },
  ],
});

export default router;
