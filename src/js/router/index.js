import Vue from 'vue'
import Index from '@js/components//index'
import VueRouter from 'vue-router'
import CONSTANTS from '@js/utils/constants'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: CONSTANTS.WEB_ROOT,
      name: 'index',
      component: Index,
      alias: CONSTANTS.WEB_ROOT + 'index.html'
    },
    {
      path: CONSTANTS.WEB_ROOT + ':region',
      name: 'region',
      component: Index
    }
  ]
})

export default router
