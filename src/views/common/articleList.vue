<template>
    <div>
        <h2>文档管理</h2>
        <el-button type="primary">
            <router-link to="/addArticle">添加文章</router-link>
        </el-button>
          <el-table
            :data="data"
            border
            style="width: 100%">
            <el-table-column
            prop="pv"
            label="ID"
            width="auto">
            </el-table-column>
            <el-table-column
            prop="author"
            label="用户名"
            width="auto">
            </el-table-column>
            <el-table-column
            prop="title"
            label="标题"
            width="auto">
            </el-table-column>
            <el-table-column
                label="操作"
                width="auto">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
             </el-table-column>
        </el-table>
        

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
                console.log(res.data)
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
    },
    handleClick(thisData){
        this.$router.push({name: 'showArticle',params:{data: thisData}})
        console.log(thisData)
    }
    }
  }
</script>
<style scoped lang="scss">
    a{
        color: #fff;
    }
</style>