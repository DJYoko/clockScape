import Vue from 'vue'
import 'babel-polyfill'
import Router from 'vue-router'
import store from './store/'
import router from './router'

window.addEventListener(
  'DOMContentLoaded',
  function() {
    Vue.use(Router)

    new Vue({
      router,
      store
    }).$mount('#wrapper')
  },
  false
)
