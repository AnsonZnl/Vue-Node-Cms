import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import index from '@/views/index'
import jiance from '@/views/common/jiance'
import home from '@/views/common/home'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
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
      children:[
        { path: '/home', name: 'home', component: home, meta:{ needLogin: true } },
        { path: '/jiance', name: 'jiance', component: jiance, meta:{ needLogin: true } }
      ]
    }
  ]
})

export default router