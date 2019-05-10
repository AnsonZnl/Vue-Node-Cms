// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import echarts from 'echarts'
import router from './router'
import axios from 'axios'
import qs from 'qs'
Vue.prototype.$qs = qs
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios;
// 那么在其他vue组件中就可以this.$axios调用使用
import './assets/style.css'
// 引入公共js 注意路径
import common from './commonFunction/common.js'
Vue.prototype.common = common

import global_ from './views/GlobalConfig'//引用文件
Vue.prototype.GLOBAL = global_//挂载到Vue实例上面

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(ElementUI); 
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
//路由守卫
router.beforeEach((to, from, next)=>{
    //路由中设置的needLogin字段就在to当中 
    if(window.sessionStorage.data){
      console.log(window.sessionStorage);
      // console.log(to.path) //每次跳转的路径
      if(to.path === '/login'){
        //登录状态下 访问login.vue页面 会跳到index.vue
        next({path: '/home'});
      }else{
        next();
      }
    }else{
      // 如果没有session ,访问任何页面。都会进入到 登录页
      if (to.path === '/login') { // 如果是登录页面的话，直接next() -->解决注销后的循环执行bug
        next();
      } else { // 否则 跳转到登录页面
        next({ path: '/login' });
      }
    }
})