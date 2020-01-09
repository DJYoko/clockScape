import Index from '@js/components//index'
import Router from 'vue-router'
import CONSTANTS from '@js/utils/constants'

const baseUri = window.location.pathname.replace(/\?.*/g, '')

const router = new Router({
  mode: 'history',
  base: baseUri,
  routes:[
    {
      path: '/',
      name: 'index',
      component: Index,
      alias: CONSTANTS.WEB_ROOT + 'index.html'
    }
  ]
})

export default router
