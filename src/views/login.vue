<template>
<div class="container">
  <div class="main">
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
      <p class="tips">username: root  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  password: root</p>
      <el-form-item>
        <el-button id='btn' type="primary" @click="login()">登录</el-button>
      </el-form-item>
    </el-form>
 </div>
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
    mounted: function() {
        window.document.getElementsByTagName("body")[0].className="active";
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
              this.common.message(this, 'error', '账号不存在！');
          }else{
            var index = userNameArr.indexOf(this.userName);
            if(passWordArr[index] === this.passWord){
              // 把token放在sessionStorage中
              ses.setItem('data', res[index].token);
              ses.setItem('userName', res[index].usertitle);
              //验证成功进入首页
              this.common.message(this, 'success', '登录成功！')
              //跳转到首页
              this.$router.push('/home');
            }else{
              this.common.message(this, 'error', '密码错误！');
            }
          }
        }).catch(err=>{
          console.log('连接数据库失败！');
          this.common.message(this, 'error', '连接数据库失败！');
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.container{
  position:absolute;
  width:100%;
  height:100%;
  top:0;
  left:0;
  overflow-y:auto;
  background-color:#2d3a4b;
  .main{
    width: 500px;
    height: 500px;
    margin:0 auto;
    text-align: left;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-left: -270px;
    margin-top: -250px;
    h2{
      margin-left: 80px;
      text-align: center;
      font-weight: 100;
      color: #fff;
    }
    #btn{
      width: 100%;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
    }
    .tips{
      font-size: 14px;
      color: #c1c1c1;
      margin-left: 80px;
      margin-top: -10px;
      margin-bottom: 25px;
    }
  }
}


</style>
<style>
  .el-form-item__label{color:#889aa4;}
</style>