<template>
    <div>
        <h2>文章列表</h2>
        <el-button :plain="true" @click="success">成功</el-button>
        <el-button :plain="true" @click="warning">警告</el-button>
        <el-button :plain="true" @click="error">错误</el-button>
        <el-button :plain="true" @click="msg">普通</el-button>
        <el-button  type="" @click="send">发送请求</el-button>
        <p>{{ data }}</p>
    </div>
</template>

<script>
import axios from 'axios'
  export default {
      data(){
          return{
              data: ''
          }
      },
    methods: {
        success(){
            this.common.message(this, 'success', '成功消息')
        },
        warning(){
            this.common.message(this, 'warning', '警告消息')
        },
        error(){
            this.common.message(this, 'error', '错误消息')
        },
        msg(){
            this.common.message(this, '', '普通消息')
        },
        send(){
        axios.get('http://127.0.0.1:8080/data',{}).then(
            res=>{
                console.log(res);
                this.data = res.data;
            }
        ).catch(
            err=>{
                console.log(err)
            }
        )
    },
    }
  }
</script>
<style scoped lang="scss">
    
</style>