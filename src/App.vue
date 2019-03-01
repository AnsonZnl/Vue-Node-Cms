<template>
  <div id="app">
    <!-- 左侧导航 -->
    <leftNav v-bind:ip="ip"></leftNav>
    <div class="main">
        <!-- <index v-bind:ip="ip"></index> -->
        <router-view/>
    </div>
  </div>
</template>

<script>
// 引入导航组件
import index from '@/components/pages/index.vue'
import leftNav from '@/components/common/nav.vue'

export default {
  name: 'App',
  data() {
    return {
        ip: 'http://xj-api-v2.chingsoft.com:8088/v2/api/'
    }
  },
  components: {
    // 注册组件
    index,
    leftNav
  }
}
</script>

<style scope>

*{
  padding: 0;
  margin: 0;
}
.main{
  padding: 10px;
}
</style>
