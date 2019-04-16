<template>
   <div class="top clearfloat">
   <el-row class="tac">
      <el-col :span="20" class="float-right topNavMinWidth">
        <el-menu
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#fff"
        text-color="#409EFF"
        router
        active-text-color="#409EFF"
        >
        <span id="nav-title">
            后台管理系统
        </span>
        <el-submenu index="">
            <template slot="title">上午好！ {{ ses.userName }}</template>
            <el-menu-item class="logout" @click="loginOut()">退出登录</el-menu-item>
        </el-submenu>
        </el-menu>
        </el-col>
        <el-col :span="4" class="leftNavMinWidth">
        <!--
        <el-radio-group v-model="isCollapse">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group> 
        -->
          <el-menu
            default-active="$route.path"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :collapse="isCollapse"
            router
            >
            <el-menu-item index="/home">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>文档</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/docList">文章列表</el-menu-item>
                <el-menu-item index="/addDoc">添加文章</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-view"></i>
                <span>图表</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/lineChart">折线图</el-menu-item>
                <el-menu-item index="/mixChart">混合图</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/option">
              <i class="el-icon-setting"></i>
              <span slot="title">功能</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div> 
</template>
<script>
export default {
    data() {
      return {
        ses: window.sessionStorage,
        isCollapse: false
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      loginOut(){
        // 注销后 清楚session信息 ，并返回登录页
        this.ses.removeItem('data');
        this.ses.removeItem('userName');
        this.common.message(this, 'success', '退出成功！')
        this.$router.push('/login');
      }
    }
  }
</script>
<style scoped lang='scss'>
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
  min-width: 200px;
}
.topNavMinWidth{
  min-width: 200px;
}
</style>
<style lang="">
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
</style>