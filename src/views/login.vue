<template>
  <div class="head">
    <h2>欢迎登录</h2> 
    <br>
      <el-form :label-position="labelPosition" label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="userName"></el-input>
      </el-form-item>
      <br>
      <el-form-item label="密码">
        <el-input v-model="passWord"></el-input>
      </el-form-item>
      <br>
      <el-form-item>
        <el-button id='btn' type="primary" @click="login()">登录</el-button>
      </el-form-item>
    </el-form>
 </div>
</template>

<script> 
import axios from 'axios'
 export default {
    data() {
        return {
          userName:'root',
          passWord:'root',
          userTitle: '', 
          labelPosition: 'right'
        }
    },
    methods:{
    startHacking (msg) {
        this.$notify({
          title: msg,
          type: 'success',
          message: '',
          duration: 5000
        })
      },
      login(){
        const self = this;
        axios.get('https://easy-mock.com/mock/5c7cd0f89dbc90184e94358d/museum/login',{
          params:{
            // userName: this.userName,
            // passWord: this.passWord
          }
        }).then(response=>{
          var res =response.data.data,
              len = res.length,
              userNameArr= [],
              passWordArr= [],
              ses= window.sessionStorage;
          // 拿到所有的username
          for(var i=0; i<len; i++){
            userNameArr.push(res[i].username);
            passWordArr.push(res[i].password);
          }
          console.log(userNameArr, passWordArr);
          if(userNameArr.indexOf(this.userName) === -1){
              alert('账号不存在！');
          }else{
            var index = userNameArr.indexOf(this.userName);
            if(passWordArr[index] === this.passWord){
              // 把token放在sessionStorage中
              ses.setItem('data', res[index].token);
              ses.setItem('userName', res[index].usertitle);
              //验证成功进入首页
              this.startHacking ('登录成功！');
              //跳转到首页
              this.$router.push('/home');
            }else{
              alert('密码错误！')
            }
          }
        }).catch(err=>{
          console.log('连接数据库失败！')
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  padding: 0;
  margin: 0;
}
h2{
  margin-left: 80px;
  text-align: center;
  font-weight: 100;
}
.head{
  width: 500px;
  height: 500px;
  margin:0 auto;
  text-align: left;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -270px;
  margin-top: -250px;
}
#btn{
    width: 100%;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
}
</style>
