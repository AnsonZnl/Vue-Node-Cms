<template>
<div>
    <h2> 图表</h2>
    <div id="main2" style="height:500px; width:1100px;"> </div>

</div>
</template>

<script>
import axios from 'axios'
import echarts from 'echarts'
// import common from '../util/util.js'
export default {
  name: 'index',
  data () {
    return {
      ip:'http://xj-api-v2.chingsoft.com:8088/v2/api/',
      title: '首页',
      admin_area: '',
      cond_txt_d: '',
      date: '',
      rogOptions: {},
      data: [],
      timestamp: []
    }
  },methods: {
      loadChart (){
          //创建一个echarts实例
          var myChart2 = echarts.init(document.getElementById('main2'));
          //绘制基本图表

        // myChart2.hideLoading();  
        // axios请求数据 
      axios.get(this.ip + 'museum/network_topology/device_history_data',{
        params: {
          token: 'token',
          sessionId: 5,
          id: 91,
          endTime:'1551161940000',
          startTime:'1551075540000',
          monitorType:'TEMPERATURE',
          max: '',
          min: '',
        }
      }).then(response=>{
        // console.log(response.data.result);
        var res = response.data.result;
        var len = res.length;
        var data1= [],
            timestamp1= [];
        for(var i=0; i<len; i++){
            data1.push(res[i].value);
            timestamp1.push(res[i].timestamp);
            // timestamp1.push(this.common.toDate(res[i].timestamp));
        }
        var timestamp2 = this.common.unique(timestamp1);
        var timestamp3 = this.common.sort1(timestamp2);
        var len2= timestamp3.length;
        var timestamp4 = [];
        for(var j=0; j<len2; j++){
          timestamp4.push(this.common.toDate(timestamp3[j]));
        }


         myChart2.setOption({
          title: {
              text: '堆叠区域图'
          },
          tooltip : {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross',
                  label: {
                      backgroundColor: '#6a7985'
                  }
              }
          },
          legend: {
              data:['邮件营销']
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis : [
              {
                  type : 'category',
                  boundaryGap : false,
                  data : timestamp4//时间
                  // data : ['周一','周二','周三','周四','周五','周六','周日']
              }
          ],
          yAxis : [
              {
                  type : 'value'
              }
          ],
          series : [
              {
                  name:'邮件营销',
                  type:'line',
                  stack: '总量',
                  areaStyle: {},
                  data: data1//数据
                  // data:[820, 932, 901, 934, 1290, 1330, 1320]
              }
          ],
          dataZoom: [
              {
                  id: 'dataZoomX',
                  type: 'slider',
                  xAxisIndex: [0],
                  filterMode: 'filter',
                  start: 25,
                  end: 70
              }
          ]
        });
        // console.log(this.data, this.timestamp);
      }).catch(error=>{
        console.log(error);
        console.log('获取设备数据失败！')
      })
      }
    },mounted(){
      this.common.log1('er');
      this.loadChart();
    }
}
</script>

<style lang="css">

</style>
