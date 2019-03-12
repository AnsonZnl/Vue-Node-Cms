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
