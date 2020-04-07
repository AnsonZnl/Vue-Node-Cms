<template>
    <el-row class="clearfloat">
          <el-col class="tac clearfloat">
             <el-radio-group class="isCollapse">
                 <el-button @click="isCollapseFn()" type="" icon="el-icon-s-operation"></el-button>
              </el-radio-group>
            <div class="user">
                <el-button @click="show = !show" class="userIcon">
                    <i class="el-icon-s-custom"></i>
                </el-button>
                <div style="margin-top: 20px; height: 20px;">
                <el-collapse-transition>
                    <div v-show="show">
                    <div class="transition-box">{{ ses.userName }}</div>
                    <div class="transition-box logout" @click="loginOut()">退出登录</div>
                    </div>
                </el-collapse-transition>
                </div>
            </div>
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
            show: false,
            ses: window.sessionStorage,
            topBarIsCollapseFn: store.state.isCollapse
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
          this.$emit("titleChanged",this.topBarIsCollapseFn);//自定义事件  传递值“子向父组件传值”
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
    position:absolute;
    top: 0;
    right: 0;
    .userIcon{
        width:100px;
        background: #edf2fc;
    }
}


.transition-box {
    width: 100px;
    height: 40px;
    background-color: #edf2fc;
    text-align: center;
    color: #000;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
  }
.transition-box:hover{
    background-color:#b4bdce ;
    color:#fff;
}
</style>