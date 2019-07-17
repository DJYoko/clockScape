import 'babel-polyfill'
import Vue from 'vue'
import router from './router/'
import store from './store/'

// eslint-disable-next-line
new Vue({
  el: '#wrapper',
  router,
  store
})
