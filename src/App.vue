<template>
  <div id="app"> 
        <router-view/>
  </div>
</template>

<script>
import Index from './views/index'
import login from './views/login'
import leftNav from './views/common/nav.vue'
export default {
  name: 'App',
  components: {
    Index,
    login,
    leftNav
  },
  data() {
    return {
    }
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
</style>
