<template>
    <el-row >
        <el-col  :xs="24" :sm='24' :md='24' :xl='24'>
             <el-radio-group v-model="msg" class="isCollapse">
                <button @click="isCollapseFn()">isCollapse</button>
              </el-radio-group>
          <el-menu
           :default-active="activeIndex"
           class="el-menu-demo"
           mode="horizontal" 
           @select="handleSelect"
           background-color="#fff"
           :class="{user:true}"
           >
                <el-submenu index="1">
                    <template slot="title">
                      <i class="el-icon-s-custom"></i>
                      <span slot="title" class="hidden-sm-and-down">{{ ses.userName }}</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="3" class="logout" @click="loginOut()">退出登录</el-menu-item>
                   </el-menu-item-group>
                </el-submenu>
          </el-menu>
        </el-col>
    </el-row>
</template>
<script>
import store from '@/store'
export default {
    name: 'topBart',
    store,
    data(){
        return{
            msg: '',
            activeIndex:'1',
            ses: window.sessionStorage
        }
    },
    methods:{
         oginOut(){
            // 注销后 清楚session信息 ，并返回登录页
            this.ses.removeItem('data');
            this.ses.removeItem('userName');
            this.common.message(this, 'success', '退出成功！')
            this.$router.push('/login');
      },
       handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
      isCollapseFn(){
          console.log('1')
          store.commit('StorsIsCollapseFn')
        //   使用vuex  或者使用
      }
    }
}
</script>
<style scoped lang='scss'>
    .user{
        float: right;
        width: 175px;
    }
</style>