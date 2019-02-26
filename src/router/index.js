import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import jiance from '@/components/jiance'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/jiance',
      name: 'jiance',
      component: jiance
    }
  ]
})
