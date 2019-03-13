# bowuguanxitong

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 错误日志：
- 报错提示：`Module build failed: Error: No PostCSS Config found`- （找不到PostCss配置）
- 解决方案：在项目根目录新建postcss.config.js文件，并对postcss进行配置：
```
module.exports = {
  plugins: {
    'autoprefixer': {browsers: 'last 5 version'}
  }
}
```
- 在 webpack 中使用 ECharts：https://echarts.baidu.com/tutorial.html#%E5%9C%A8%20webpack%20%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts
-

## Vue 中引入抽离自定义的公共方法
1. src下创建`commonFunction/common.js`文件
```
export default{
    login: function(){
        console.log('11')
    }
}
```
2. `main.js`中引入并使用
```
// 引入公共js 注意路径
import common from './commonFunction/common.js'
Vue.prototype.common = common
```
3. 在`xx.vue`页面中使用
```
mounted(){
  this.common.login();//'11'
}
```

- 参考 - vue学习笔记五：在vue项目里面使用引入公共方法：https://blog.csdn.net/fiona_lms/article/details/80075227

## 使用组件
components下新建common文件夹，用来存放共用组件，`/src/components/common/nav.vue`
 - 新建`nav.vue`组件，写入代码。
 - 然后在`App.vue`中引入并注册。
 引入：
 ``` 
<template>
  <div id="app">
    <!-- 左侧导航 -->
    <leftNav></leftNav>
    <div class="main">
        <router-view/>
    </div>
  </div>
</template>
<script>
// 引入导航组件
import leftNav from '@/components/common/nav.vue'
export default {
  name: 'App',
  components: {
    // 注册组件
    leftNav
  }
}
</script>
<style></style>

```
- 参考：vue.js-组件基础: https://cn.vuejs.org/v2/guide/components.html

## vue-组件嵌套之——父组件向子组件传值
vue-组件嵌套之——父组件向子组件传值: https://www.cnblogs.com/padding1015/p/7878710.html

1. 首先，值肯定是定义在父组件中的，供所有子组件共享。所以要在父组件的data中定义值：
```
export default {
  name: 'App',
  data() {
    return {
        ip: 'http://xj-api-v2.chingsoft.com:8088/v2/api/'
    }
  }
}
```
2. 其次，父组件要和子组件有契合点：就是在父组件中调用、注册、引用子组件：

- 引用：
```
import leftNav from '@/components/common/nav.vue'
```
- 注册：
```
export default {
  name: 'App',
  data() {
    return {
        ip: 'http://xj-api-v2.chingsoft.com:8088/v2/api/'
    }
  },
  components: {
    leftNav
  }
}
```
- 引用
```
<leftNav v-bind:ip="ip"></leftNav>
```

3. 最后，子组件内部肯定要去接受父组件传过来的值：props（小道具）来接收：
```
//与data平级
    props:{
        ip: String
    },
```

4. 正常使用父级组件值
```
{{ ip }}
```

- vue组件之间如何互相获取$data数据？
vue组件之间如何互相获取$data数据？： https://segmentfault.com/q/1010000008023002
非父组件获取App.vue中的data值使用：`this.$parent.$data`
`this.parent.data` 可以获取父级数据,也可以给父级数据赋值
App.vue:
```
data() {
   return {
		name:''
	}
}
```
nav.vue:
```
this.$parent.$data.name = 1    //赋值
console.log(this.$parent.$data.name)    //获取
```

## Vue中的验证登录状态
vue-router导航守卫：https://router.vuejs.org/zh/guide/advanced/ 
参考：https://cloud.tencent.com/developer/article/1199255

## sass安装
- 安装依赖
```
npm install node-sass --save-dev
npm install sass-loader --save-dev
```
- 二、打开webpack.base.config.js在loaders里面加上
```
{
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
```
- 在vue中使用
```
<style scoped lang="scss">
    @import url('common/css/reset.css');
    $vw_base: 375; 
    @function vw($px) {
        @return ($px / 375) * 100vw;
    }
    .main {
        display: flex;
        width: vw(50);
        p{
          font-size:30px;
        }
    }
</style>
```

## 配置子路由

参考：https://www.imooc.com/video/18569


## ElementUI bug

```javascript
 <el-menu
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#fff"
        text-color="#409EFF"
        router
        active-text-color="#409EFF">
    <el-menu-item index="/home">首页</el-menu-item>
    <el-menu-item index="/jiance">图表</el-menu-item>
    <el-submenu index="">
        <template slot="title">{{ ses.userName }}</template>
        <el-menu-item @click="loginOut()">注销</el-menu-item>
    </el-submenu>
</el-menu>
```
active跟随路径切换    
`:default-active="$route.path"`    
使用router模式    
`router`    
index是router-link的替代        
`index='/hemo'`

## 打包上线
把绝对路径改成相对路径 
```
config/index.js/注意是build{...}assetsPublicPath: '/' ---> 改为----> assetsPublicPath: './' 
```
就在前面加一个点改为决对路径。 
然后执行 打包命令`npm run build` 打包成功后会有一个dist文件就可用了。
然后打开`dist`文件使用node`http-server`就可以访问了，

## 打包上线后的css样式混乱
项目开发完成后，执行`npm run build` 进行打包，将打包完成的dist文件部署在服务器。配置好域名解析，就可以实现工程上线。
上线后，我们有时候会发现，它怎么和本地调试时长得不一样？
长得不一样是样式问题，是打包的时候顺序先后问题，有一些样式没有生效，有一些样式被覆盖了。这时候可以考虑以下几种方法。
1. main.js样式引入顺序问题
有时候我们发现组件内的样式没有生效，可能是被第三方组件样式覆盖了，在`mian.js`中把`router`放在最后引入，就可以实现组件样式在第三方样式之后渲染。
```Javascript
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import router from './router'//router放在最后引用
```
2. 使用范围样式`<style scoped>`
`<style scoped>`是H5的新特性，它限制样式只适用于当前组件，避免组件间的样式干扰。

3. 还有一些是第三方组件的默认样式，在本地调试时没有显现出来，想要最直接地得到效果，就是在控制台里找到对应的类，再手动在组件里修改成自己想要的值。这种方式比较简单粗暴，只适合临时解决问题，不建议经常使用此种方法。

Vue工程打包上线样式错乱问题：https://blog.csdn.net/feiyu_may/article/details/81100255


## 组件切换过度效果-transition
我之前的Vue笔记：https://github.com/AnsonZnl/vueCli
Vue.js-transition过渡动画教程：https://cn.vuejs.org/v2/guide/transitions.html

## Vue中使用axios请求node接口时如何跨域请求
- 今天被跨域请求的问题困扰了很久，跨域一句话的理解就是：**服务端和请求端的地址不一样。**
Vue项目使用axios请求Node接口跨域时，当使用CORS在服务器端解决跨域时。一定要把设置Header头部信息放在最上面    
Node服务端的server.js中：
```js
//server.js
const express = require('express');
const app = express();

//以下 配置允许跨域请求； **********一定要放在上面**********
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('X-Powered-By', ' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
})

app.get('/data', (req, res)=>{
    res.send('我是data-响应成功!');
}).listen(8080, "127.0.0.1");
console.log('Server is running at http://127.0.0.1:8080/');

```
Vue客户端list.vue中：
```js
send(){
    axios.get('http://127.0.0.1:8080/data',{}).then(
        res=>{
            console.log(res);
            this.data = res.data;
        }
    ).catch(
        err=>{
            console.log(err)
        }
    )
}
```
**参考资料：**    
- 知乎-关于跨域，你想知道的全在这里 ：https://zhuanlan.zhihu.com/p/25778815
- node与vue结合的前后端分离跨域问题: https://www.cnblogs.com/bfwbfw/p/7893691.html
- 阮一峰-跨域资源共享 CORS 详解：http://www.ruanyifeng.com/blog/2016/04/cors.html


## 使用http-proxy代理



nodejs之http-proxy几点常见问题：https://blog.csdn.net/xiaokhaha/article/details/81674510
Http 请求头中的 Proxy-Connection：https://imququ.com/post/the-proxy-connection-header-in-http-request.html
http-proxy代理nodejs服务器转发跨域资源：http://www.mizuiren.com/490.html
Node.js配合node-http-proxy解决本地开发ajax跨域问题：https://www.cnblogs.com/woodk/p/5817755.html
七天学会NodeJS：https://www.jqhtml.com/7264.html

## 打包上线
打包之后只需要放在Nginx里运行就行了---先记下 我也没试过