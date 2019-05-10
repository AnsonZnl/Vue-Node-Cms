<template>
<div> 
  <el-row>
    <el-col :xs='4' :sm='4' :md='4' :xl='4'>
         <leftNav/>
    </el-col>
    <el-col :xs="20" :sm='20' :md='20' :xl='20' class="main">
        <router-view/>
    </el-col>
  </el-row>
</div>
</template>

<script>
import axios from 'axios'
import echarts from 'echarts'
import leftNav from './common/nav.vue'

export default {
  name: 'index',
  components:{
    leftNav
  },
  data () {
    return {
      admin_area: '',
      cond_txt_d: '',
      date: '',
      house: [],
      rogOptions: {}
    }
  },created(){
      //读取常用商品列表
      axios.get('https://free-api.heweather.net/s6/weather',{
        params: {
          key: 'f586999e15564d0d96d560485b5f4de8',
          location: '北京市'
        }
      }).then(response=>{
        var res = response.data.HeWeather6[0];
        this.admin_area = res.basic.admin_area;
        this.cond_txt_d = res.daily_forecast[0].cond_txt_d;
        this.date = res.daily_forecast[0].date;

      }).catch(error=>{
        // console.log(error);
        alert('获取天气数据失败！')
      });
      // 展厅列表
      axios.get('https://easy-mock.com/mock/5c7cd0f89dbc90184e94358d/museum/hall_house_get',{
        params:{
        }
      }).then(response=>{
        this.house = response.data.data;
      }).catch(error=>{
        console.log('获取星座数据失败！')
      })
    },
    methods:{
      startHacking () {
        this.$notify({
          title: 'success',
          type: 'success',
          message: 'It works!',
          duration: 5000
        })
      }
    },
    mounted(){
       
    }
}
</script>

<style scoped lang="scss">
a{
  text-decoration: none;
}
.main{
  padding: 10px;
  position:fixed;
  top: 61px;
  right: 0;
}
</style>
