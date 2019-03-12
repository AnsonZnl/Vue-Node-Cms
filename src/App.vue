<template>
  <div id="app"> 
        <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
a{
  text-decoration: none;
}
.clearfloat:after{
  display:block;
  clear:both;
  content:"";
  visibility:
  hidden;height:0
}
.float-left{
    float: left;
}
.float-right{
    float: right;
}
</style>
