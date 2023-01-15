import { createApp } from 'vue';
import store from './store';
import router from './router';

window.addEventListener(
  'DOMContentLoaded',
  function () {
    const app = createApp({});
    app.use(store);
    app.use(router);
    app.mount('#wrapper');
  },
  false
);
