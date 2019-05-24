import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import index from '@/views/index'
import lineChart from '@/views/common/lineChart'
import home from '@/views/common/home'
import articleList from '@/views/common/articleList'
import addArticle from '@/views/common/addArticle'
import showArticle from '@/views/common/showArticle'
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
        { path: '/articleList', name: 'articleList', component: articleList, meta:{ needLogin: true } },
        { path: '/addArticle', name: 'addArticle', component: addArticle, meta:{ needLogin: true } },
        { path: '/lineChart', name: 'lineChart', component: lineChart, meta:{ needLogin: true } },
        { path: '/showArticle', name: 'showArticle', component: showArticle, meta:{ needLogin: true } }
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