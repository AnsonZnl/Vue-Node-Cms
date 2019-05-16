<template>
   <div class="wrap">
   <el-row class="tac">
           <el-col class="leftNavMinWidth">
              <el-menu
                  default-active="$route.path"
                  class="el-menu-vertical-demo"
                  background-color="#304156"
                  text-color="#fff"
                  active-text-color="#ffd04b"
                  :collapse="count"
                  router
              >
                <el-menu-item index="/home">
                  <i class="el-icon-menu"></i>
                  <span class="nav-title" slot="title">首页</span>
                </el-menu-item>
                <el-menu-item index="/articleList">
                  <i class="el-icon-document"></i>
                  <span class="nav-title" slot="title">文档</span>
                </el-menu-item>
                <el-menu-item index="/lineChart">
                  <i class="el-icon-view"></i>
                  <span class="nav-title" slot="title">统计</span>
                </el-menu-item>
                <el-menu-item index="">
                  <a href="https://github.com/AnsonZnl/Vue-Node-Cms" target="_blank" class="font-color-white">
                      <i class="el-icon-link"></i>
                      <span class="nav-title" slot="title">Github Link</span>
                  </a>
                </el-menu-item>
              </el-menu>
        </el-col>
      </el-row>
    </div> 
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
import store from '@/store'
export default {
  name: 'leftNav',
  store,
    data() {
      return {
        
      };
    },
    computed:{
        count(){
            return store.state.isCollapse;
        }
    },
    methods: {

    }
  }
</script>
<style scoped lang='scss'>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
}
.el-menu--collapse {
    width: 58px;
}
.el-menu--horizontal>.el-submenu {
    float: right;
}
.el-menu-vertical-demo{
    height:100vh;
}
.float-right{
    float: right;
}
#nav-title{
  line-height:61px;
  padding: 10px;
  cursor: default;
  border: 0;
  outline:none;
  :hover{
    background-color: #fff;
  }
}
</style>
<style lang="">
.wrap{
  position: relative;
}

.el-menu--popup{
    box-shadow: 0 0 0 0 rgba(0,0,0,0);
    background: #303133;
}
.font-color-white{
  color: #fff;
}
.nav-title{
  display: inline-block;
  margin-left: 4px;
}
@media screen and (max-width: 990px) {
  /* .wrap{
    width: 64px;
  } */
}
</style>