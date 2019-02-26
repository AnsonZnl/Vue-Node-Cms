<template>
<div>
    <h2> 图表</h2>
    <div id="main2" style="height:500px; width:1100px;"> </div>

</div>
</template>

<script>
import axios from 'axios'
import echarts from 'echarts'
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
  },created(){
      //读取常用商品列表
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
        var data1= [],timestamp1= [];
        for(var i=0; i<len; i++){
            data1.push(res[i].value);
            timestamp1.push(res[i].timestamp + '');
        }
        this.data = data1;
        this.timestamp = timestamp1;
        // console.log(this.data, this.timestamp);
      }).catch(error=>{
        console.log(error);
        console.log('获取设备数据失败！')
      })
    },mounted(){
        console.log(this.data)
    //   堆叠图
      var myChart2 = echarts.init(document.getElementById('main2'));
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
                data : this.timestamp//时间
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
                data: this.data//数据
                // data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
      })   
    }
}
</script>

<style lang="css">

</style>
