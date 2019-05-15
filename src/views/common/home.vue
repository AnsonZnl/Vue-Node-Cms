<template>
  <div>
    <!-- <div>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
    </div> -->
    <h2>天气</h2>
    <div>
      今天是 ：
      {{weatherData.date}}
      {{weatherData.cond_txt}}
      温度：
      {{weatherData.tmp_max}}℃ 
      -
      {{weatherData.tmp_min}}℃
    </div>
    <div>
      <h2>提醒框</h2>
        <el-button :plain="true" @click="success">成功</el-button>
        <el-button :plain="true" @click="warning">警告</el-button>
        <el-button :plain="true" @click="error">错误</el-button>
        <el-button :plain="true" @click="msg">普通</el-button>
    </div>
     <h2>Todolist</h2>   
     <Todo/>
  </div>
</template>
<script>
import Todo from './todolist/todo.vue'
import axios from 'axios'
export default {
    data() {
      return {
        weatherData:{
          date: '',//日期
          cond_txt: '',//天气
          tmp_max:'',//最高温度
          tmp_min:''//最低温度
        }
      }
    },
    components:{
      Todo
    },
  created(){
      //读取常用商品列表
      axios.get('https://free-api.heweather.net/s6/weather',{
        params: {
          key: 'f586999e15564d0d96d560485b5f4de8',
          location: '北京市'
        }
      }).then(res=>{
        if(res){
          res = res.data.HeWeather6[0]
          // console.log(res)
          this.weatherData.cond_txt = res.now.cond_txt;
          this.weatherData.date = res.update.loc;
          this.weatherData.tmp_max = res.daily_forecast[0].tmp_max;
          this.weatherData.tmp_min= res.daily_forecast[0].tmp_min;

}
      }).catch(err=>{
        console.log('获取天气数据失败！')
        throw err
      });
    },
    methods:{
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
        }
    }
  }
</script>
<style>

</style>