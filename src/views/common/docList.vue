<template>
    <div>
        <h2>文章列表</h2>
        <el-button :plain="true" @click="success">成功</el-button>
        <el-button :plain="true" @click="warning">警告</el-button>
        <el-button :plain="true" @click="error">错误</el-button>
        <el-button :plain="true" @click="msg">普通</el-button>
        <el-button  type="" @click="send">发送请求</el-button>
        <el-button  type="" @click="getDocList">名字列表</el-button>
        <p>{{ data }}</p>
        <p>{{ this.GLOBAL.userSite }}</p>
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
      created(){
        //   axios.get(this.GLOBAL.serverIP + 'test',{}).then(
        //       res=>{
        //         console.log(res);
        //         this.data = res.data;
        //       }
        //   ).catch(
        //       err=>{
        //           console.log(err)
        //       }
        //   )
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
        axios.get(this.GLOBAL.serverIp+'data',{}).then(
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
    getDocList(){
        axios.get(this.GLOBAL.serverIp+'dataList',{}).then(
            (res)=>{
                console.log(res)
                this.data = res
            }
        ).catch(
            err=>{
                console.log(err)
            }
        )
    }
    }
  }
</script>
<style scoped lang="scss">
    
</style>