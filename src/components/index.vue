<template>
  <div class="head">
    <h2>{{title}}</h2>
    <div class="">
       <h3>天气</h3>
       <p>日期： {{ date }}</p>
       <p>城市：{{ admin_area }}</p>
       <p>天气: {{ cond_txt_d }}</p>
    </div>
    <div id="main" style="height:500px; width:500px;">

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
      title: '首页',
      admin_area: '',
      cond_txt_d: '',
      date: '',
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
        console.log(response.data.HeWeather6[0]);
        var res = response.data.HeWeather6[0];
        this.admin_area = res.basic.admin_area;
        this.cond_txt_d = res.daily_forecast[0].cond_txt_d;
        this.date = res.daily_forecast[0].date;

      }).catch(error=>{
        // console.log(error);
        alert('获取天气数据失败！')
      })
    },
    mounted(){
      var myChart = echarts.init(document.getElementById('main'));
      myChart.setOption({
          title: {
              text: 'ECharts 入门示例'
          },
          tooltip: {},
          xAxis: {
              data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
          }]
      });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
