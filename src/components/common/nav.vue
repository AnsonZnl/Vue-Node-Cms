<template>
    <div>
        <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#409EFF"
        text-color="#fff"
        active-text-color="#fff">
        <el-menu-item index="1"><router-link to="/index">首页</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="/jiance">图表</router-link></el-menu-item>
        <el-submenu index="3">
            <template slot="title">{{ this.$parent.$data.userTitle }}</template>
            <el-menu-item index="4" @click="loginOut()">注销</el-menu-item>
        </el-submenu>
        </el-menu>
    </div>
</template>
<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        user: '未登录'
      };
    },
    props:{
        ip: String
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      },
      loginOut(){
        // 注销后 清楚session信息 ，并返回登录页
        window.sessionStorage.removeItem('data');
        this.common.startHacking(this, 'success', '注销成功！');
        this.$router.push('/');
        this.$parent.$data.userTitle = ''
      }
    }
  }
</script>
<style scope>
    .nav-right{
      float: right;
    }
</style>