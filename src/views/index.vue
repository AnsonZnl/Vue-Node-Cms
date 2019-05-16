<template>
<div> 
  <el-row>
    <el-col class="nav">
         <leftNav/>
    </el-col>
    <el-col class="content">
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
$navMinWidth: 58px;
$navMaxWidth: 180px;

a{
  text-decoration: none;
}

.box-padding{
  padding: 10px;
}
.nav{
  max-width: $navMaxWidth;
  position: fixed;
  top: 0;
  left: 0;
  // z-index: 2;
}
.content{
  margin-left: 180px;
  width: -webkit-fill-available;
  .top-bar{
      top: 0;
      right: 0;
      height: 50px;
      padding:5px;
      background: #edf2fc;
  }
  .content-fixed{
      right: 0;
      top:50px;
    }
}
@media screen and (max-width: 768px) {

}
</style>
