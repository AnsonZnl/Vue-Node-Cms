<template>
    <div>
        <h2>文档管理</h2>
        <el-button type="primary">
            <router-link to="/addArticle">添加文章</router-link>
        </el-button>
        <!-- <p>{{ data }}</p> -->
        <div v-for="datalist in data" :key='datalist.id'> 
            <span>{{datalist.age}}</span>
            <span>{{datalist.name}}</span>
            <span>{{datalist.age}}</span>
            <span>{{datalist.remarks}}</span>
         </div>
        <p>{{ this.GLOBAL.userSite }}</p>
    </div>
</template>

<script>
import axios from 'axios'
  export default {
      data(){
          return{
              data: null
          }
      },
      created(){
        axios.get(this.GLOBAL.serverIp+'dataList',{}).then(
            (res)=>{
                console.log(res)
                this.data = res.data
            }
        ).catch(
            err=>{
                console.log(err)
            }
        )
      },
    methods: {
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
    }
    }
  }
</script>
<style scoped lang="scss">
    a{
        color: #fff;
    }
</style>