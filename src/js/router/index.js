import index from '@js/components/index';
import { createRouter, createWebHistory } from 'vue-router';
import constants from '@js/utils/constants';

const baseUri = window.location.pathname.replace(/\?.*/g, '').replace(/index\.html/g, '');

const router = createRouter({
  mode: 'history',
  base: baseUri,
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      alias: constants.WEB_ROOT + 'index.html',
    },
    {
      path: '/index.html',
      component: index,
    },
  ],
});

export default router;
