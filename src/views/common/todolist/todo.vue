<template>
<div>
  <section class="todoList">
    <Tabs
        :filter="filter"
        :todos ='todos'
        @toggle='toggleFilter'
        @clearAllCompleted='clearAllCompleted'
    />
    <input
        type="text"
        class="add-input"
        autofocus='autofocus'
        placeholder="接下来做什么？"
        @keyup.enter="addTodo"
    >
    <Item
        :todo="todo"
        v-for="todo in filteredTodos"
        :key='todo.id'
        @del='deleteTodo'
    />
  </section>
  </div>
</template>
<script>
import Item from './item.vue'
import Tabs from './tabs.vue'
let id = 0;
export default {
    components:{
      Item,
      Tabs
    },
    data() {
      return {
         todos:[],
         filter:'all'
      }
    },
    methods: {
      addTodo(e){
        // unshift() 想数组头部添加元素 返回长度
        if(e.target.value.trim()){
            this.todos.unshift({
              id: id++,
              content: e.target.value.trim(),
              completed: false
          })
        }else{
          alert('不能为空！');
        }
        e.target.value = ''
        console.log(this.todos)
      },
      deleteTodo(id){
           //splice() 方法向/从数组中添加/删除项目,然后返回被删除的项目。 注释:该方法会改变原始数组。
            //其中的 1 是要删除的项目数量。如果设置为 0，则不会删除项目
            //findIndex() 方法返回传入一个测试条件（函数）符合条件的数组第一个元素位置。
            //findIndex() 方法为数组中的每个元素都调用一次函数执行：
            //当数组中的元素在测试条件时返回 true 时, findIndex() 返回符合条件的元素的索引位置，之后的值不会再调用执行函数
            //如果没有符合条件的元素返回 -1
            //注意: findIndex() 对于空数组，函数是不会执行的。
            //注意: findIndex() 并没有改变数组的原始值。
            //该写法为 函数嵌套
        this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
      },
      toggleFilter(state){
        this.filter = state;
      },
      clearAllCompleted(){
            // 给todos赋一个新的值（即todo.completed为false的值）
            // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
            // 注意： filter() 不会对空数组进行检测。
            // 注意： filter() 不会改变原始数组。
        this.todos = this.todos.filter(todo => todo.completed === false)
      }
    },
    computed:{
      // 过滤数据 每次根据状态筛选数据
      filteredTodos(){
        if(this.filter === 'all'){
          return this.todos
        }
        const completed = this.filter === 'completed'
        // 将todo 数据中，completed为true的值过滤 并返回一个新数组
        return this.todos.filter(todo => completed === todo.completed);
      }
    }
  }
</script>
<style scoped lang="scss">
    .todoList {
        width: 600px;
        margin: 0 auto;
        box-shadow :0 0 5px #666;
    }
    .add-input {
        position: relative;
        margin: 0;
        width: 100%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4em;
        border: 0;
        outline: none;
        color: inherit;
        box-sizing: border-box;
        // font-smoothing: antialiased;
        padding: 16px 16px 16px 36px;
        border: none;
        box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    }
</style>