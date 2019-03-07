import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/pages/index'
import jiance from '@/components/pages/jiance'
import login from '@/components/pages/login'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
      meta:{
        needLogin: false
      }
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      meta:{
        needLogin: true
      }
    },
    {
      path: '/jiance',
      name: 'jiance',
      component: jiance,
      meta:{
        needLogin: true
      }
    }
  ]
})

export default router