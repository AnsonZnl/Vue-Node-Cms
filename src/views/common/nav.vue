<template>
   <div class="wrap">
   <el-row class="tac">
           <el-col class="leftNavMinWidth">
              <!-- <el-radio-group v-model="isCollapse" class="isCollapse">
                <el-radio-button :label="false">展开</el-radio-button>
                <el-radio-button :label="true">收起</el-radio-button>
              </el-radio-group> -->
              {{count}}
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
                  <span slot="title" class="hidden-sm-and-down">首页</span>
                </el-menu-item>
                <el-menu-item index="/articleList">
                  <i class="el-icon-document"></i>
                  <span class="hidden-sm-and-down" slot="title">文档</span>
                </el-menu-item>
                <el-menu-item index="/lineChart">
                  <i class="el-icon-view"></i>
                  <span class="hidden-sm-and-down" slot="title">统计</span>
                </el-menu-item>
                <el-menu-item index="">
                  <a href="https://github.com/AnsonZnl/Vue-Node-Cms" target="_blank" class="font-color-white">
                      <i class="el-icon-link"></i>
                      <span class="hidden-sm-and-down" slot="title">Github Link</span>
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
        msg:store.state.isCollapse,
        isCollapse: store.state.isCollapse//导航栏伸缩
      };
    },
    computed:{
        count(){
            return store.state.isCollapse;
        }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    }
  }
</script>
<style scoped lang='scss'>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
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
.leftNavMinWidth{
  // min-width: 200px;
}
.topNavMinWidth{
  // min-width: 200px;
}
</style>
<style lang="">
.wrap{
  position: relative;
}
.logout{
    position: absolute;
    top: 0;
    right: 10px;
    width: 150px;
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,.1);
}
.el-menu--popup{
    box-shadow: 0 0 0 0 rgba(0,0,0,0);
    background: #303133;
}
/* .isCollapse{
  position:absolute;
  top:0;
  right: -139px;
  z-index: 2;
} */
.font-color-white{
  color: #fff;
}
</style>