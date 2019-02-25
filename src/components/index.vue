<template>
  <div class="head">
    <h2>{{title}}</h2>
    <div class="">
       <h3>天气</h3>
       <p>日期： {{ date }}</p>
       <p>城市：{{ admin_area }}</p>
       <p>天气: {{ cond_txt_d }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'index',
  data () {
    return {
      title: '首页',
      admin_area: '',
      cond_txt_d: '',
      date: ''
    }
  },created(){
      //读取常用商品列表
      axios.get('https://free-api.heweather.net/s6/weather',{
        params: {
          key: 'HE1812191016481373',
          location: '北京市'
        }
      }).then(response=>{
        console.log(response.data.HeWeather6[0]);
        var res = response.data.HeWeather6[0];
        this.admin_area = res.basic.admin_area;
        this.cond_txt_d = res.daily_forecast[0].cond_txt_d;
        this.date = res.daily_forecast[0].date;

      }).catch(error=>{
        // console.log(error);
        alert('获取天气数据失败！')
      })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
