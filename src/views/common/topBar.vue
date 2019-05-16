<template>
    <el-row class="clearfloat">
          <el-col class="tac clearfloat">
             <el-radio-group class="isCollapse">
                 <i class="navIcon el-icon-arrow-right"></i>
                 <i class="navIcon el-icon-arrow-left"></i>
                <button @click="isCollapseFn()">isCollapse</button>
              </el-radio-group>
          <el-menu
           class="el-menu-demo"
           mode="vertical" 
           background-color="#edf2fc"
           @open="handleOpen"
           @close="handleClose"
           :class="{user:true,clearfloat: true}"
           >
            <el-submenu index="2" class="user" :show-timeout='show'>
                <div slot="title" class="userIcon">
                    <i class="el-icon-s-custom"></i>
                </div>
                <div class="user-list">
                    <el-menu-item-group>
                        <el-menu-item index="2-1">{{ ses.userName }}</el-menu-item>  
                        <el-menu-item index="2-2" class="logout" @click="loginOut()">退出登录</el-menu-item>
                    </el-menu-item-group>
                </div>
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
            show: 100,
            ses: window.sessionStorage
        }
    },
    methods:{
    loginOut(){
        // 注销后 清楚session信息 ，并返回登录页
        this.ses.removeItem('data');
        this.ses.removeItem('userName');
        this.common.message(this, 'success', '退出成功！')
        this.$router.push('/login');
      },
      isCollapseFn(){
          store.commit('StorsIsCollapseFn');
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style scoped lang='scss'>
.user{
    position: absolute;
    float: right;
    width:80px;
    top:0;
    right: 0;
    .user-list{
        // position: absolute;
        right: 0;
        text-align: center;
        width: 100px;
        padding: 0;
    }
    .el-menu-item-group__title {
        padding: 0!important;
    }
}
.el-submenu .el-menu-item {
    padding: 0!important;
    width: 0;
}
.el-menu-item-group{
    position: absolute;
    right: 0;
    top: 0;
}

</style>