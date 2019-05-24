<template>
  <div>
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
     <h2>layout</h2>
      <el-row :gutter="10">
        <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6">
          <div class="grid-content bg-purple">
                社区官网
            </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6">
          <div class="grid-content bg-purple">
                总文章数
            </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6">
          <div class="grid-content bg-purple">
                访问量
            </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6">
          <div class="grid-content bg-purple">
                留言统计
            </div>
        </el-col>
      </el-row>
  </div>
</template>
<script>
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

<style scoped lang="scss">
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 10px;
    }
  }
  .bg-purple {
    background: #d3dce6;
    text-align:center;
  }
  .grid-content {
    min-height: 36px;
  }
</style>