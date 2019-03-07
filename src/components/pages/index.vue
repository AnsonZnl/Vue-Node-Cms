<template>
  <div class="head">
    <h2>Home</h2>
    <div><el-button @click="startHacking">Start</el-button></div>
    <div class="">
       <h2>天气</h2>
       <p>日期： {{ date }}</p>
       <p>城市：{{ admin_area }}</p>
       <p>天气: {{ cond_txt_d }}</p>
       <!-- <p>{{ this.$parent.$data.ip }}</p> -->
    </div>
    <div id="main">
      <h2>星座列表</h2>
      <ul>
        <li v-for="list in house" :key="list.id">{{ list.name }}</li>
      </ul>
    </div>
 </div>
</template>

<script>
import axios from 'axios'
import echarts from 'echarts'
export default {
  name: 'index',
  data () {
    return {
      // ip: 'http://xj-api-v2.chingsoft.com:8088/v2/api/',
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
          key: 'HE1812191016481373',
          location: '北京市'
        }
      }).then(response=>{
        // console.log(response.data.HeWeather6[0]);
        var res = response.data.HeWeather6[0];
        this.admin_area = res.basic.admin_area;
        this.cond_txt_d = res.daily_forecast[0].cond_txt_d;
        this.date = res.daily_forecast[0].date;

      }).catch(error=>{
        // console.log(error);
        alert('获取天气数据失败！')
      });
      // 展厅列表
      // axios.get(this.$parent.$data.ip + 'museum/dashboard/hall_house_get',{
      axios.get('https://easy-mock.com/mock/5c7cd0f89dbc90184e94358d/museum/hall_house_get',{
        params:{
          // token: 'token',
          // sessionId: '5'
        }
      }).then(response=>{
        // console.log(response.data);
        // console.log(response.data.result);
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
