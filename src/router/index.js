import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import index from '@/views/index'
import lineChart from '@/views/common/lineChart'
import mixChart from '@/views/common/mixChart'
import home from '@/views/common/home'
import addText from '@/views/common/addText'
import docList from '@/views/common/docList'
import error from '@/views/error'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    }, 
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
        { path: '/addDoc', name: 'addText', component: addText, meta:{ needLogin: true } },
        { path: '/docList', name: 'docList', component: docList, meta:{ needLogin: true } },
        { path: '/lineChart', name: 'lineChart', component: lineChart, meta:{ needLogin: true } },
        { path: '/mixChart', name: 'mixChart', component: mixChart, meta:{ needLogin: true } }
      ]
    },
    {
      path: '/*',
      component: error,
      meta:{
        needLogin: false
      }
    }
  ]
})

export default router