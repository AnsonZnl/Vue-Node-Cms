<template>
    <div>
        <li 
          v-for="todo in list" 
          :key="todo.id">
          <input type="checkbox" :checked="todo.type"> {{ todo.text }}
          <span class="destroy" @click="destroy(todo.id)">x</span>   
          </li>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
    
</style>