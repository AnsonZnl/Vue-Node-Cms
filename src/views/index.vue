<template>
<div> 
  <el-row>
    <el-col :xs="4" :sm='4' :md='4' :xl='4' class="nav">
    <!-- <el-col class="nav"> -->
         <leftNav/>
    </el-col>
    <el-col :xs="20" :sm='20' :md='20' :xl='20' class="content">
    <!-- <el-col class="content"> -->
        <div class="top-bar">
          <topBar/>
        </div>
        <div class="box-padding content-fixed">
            <router-view/>
        </div>
    </el-col>
  </el-row>
</div>
</template>

<script>
import leftNav from './common/nav.vue'
import topBar from './common/topBar.vue'

export default {
  name: 'index',
  data(){
    return {
      
    }
  },
  components:{
    leftNav,
    topBar
  }
}
</script>

<style scoped lang="scss">
a{
  text-decoration: none;
}

.box-padding{
  padding: 10px;
}
.nav{
  max-width: 180px;
  position: fixed;
  top: 0;
  z-index: 2;
}
.content{
  // width: 100%;
  margin-left: 200px;
  .top-bar{
      // position: fixed;
      top: 0;
      right: 0;
      height: 50px;
      padding:5px;
      background: #edf2fc;
  }
  .content-fixed{
      // position: absolute;
      right: 0;
      top:50px;
    }
}
@media screen and (max-width: 768px) {

}
</style>
