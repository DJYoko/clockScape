import Index from '@js/components//index'
import Router from 'vue-router'
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

export default router
