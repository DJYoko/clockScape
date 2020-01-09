import Vue from 'vue'
import 'babel-polyfill'
import Router from 'vue-router'
import store from './store/'
import Index from '@js/components//index'
import CONSTANTS from '@js/utils/constants'

const router = new Router({
  mode: 'history',
  base: '/',
  routes:[
    {
      path: CONSTANTS.WEB_ROOT,
      name: 'index',
      component: Index,
      alias: CONSTANTS.WEB_ROOT + 'index.html'
    }
  ]
})

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
