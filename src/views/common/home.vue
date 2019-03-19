<template>
  <div> 
     <h2>Hello world!</h2>   
     <p>这里是首页！</p>
     <Todo/>
  </div>
</template>
<script>
import Todo from './todolist/todo.vue'
export default {
    data() {
      return {
      }
    },
    components:{
      Todo
    }
  }
</script>
<style>

</style>