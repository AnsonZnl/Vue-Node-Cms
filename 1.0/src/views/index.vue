<template>
<div> 
  <el-row>
    <el-col class="nav">
         <leftNav/>
    </el-col>
    <el-col :class="{content: true,content58: k,content180: !k,linshi: linshi}">
        <div class="top-bar">
          <topBar v-on:titleChanged="updateTitle"></topBar>
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
import store from '@/store'
export default {
  name: 'index',
  data(){
    return {
      linshi: true
    }
  },
  components:{
    leftNav,
    topBar
  },
  methods:{
      updateTitle(e){   //声明这个函数
      this.linshi= false;
    }
  },
  computed:{
    k(){
      return store.state.isCollapse;
    }
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

.content58{
  animation:content58 0.4s;
  animation-fill-mode : forwards;
  animation-timing-function:ease;
}
@keyframes content58
{
0% {margin-left:180px;}
100% {margin-left: 58px;}
}
.content180{
  animation:content180 0.4s;
  animation-fill-mode : forwards;
  animation-timing-function:ease;
}
@keyframes content180
{
0% {margin-left:58px;}
100% {margin-left: 180px;}
}

.linshi{
  animation:linshi 0.001s;
  animation-fill-mode : forwards;
}
@keyframes linshi
{
0% {margin-left:180px;}
100% {margin-left: 180px;}
}

@media screen and (max-width: 768px) {

}
</style>
