<template>
  <div> 
     <div class="todoList">
        <input class="inp" @keydown.enter="add" type="text" placeholder="添加任务" v-model="msg">
        <button class="submit" @click="add">提交</button>
        <ul>
          <li 
          v-for="todo in list" 
          :key="todo.id">
          <input type="checkbox" :checked="todo.type"> {{ todo.text }}
          <span class="destroy" @click="destroy(todo.id)">x</span>   
          </li>
        </ul> 
       <p>
       <span>{{list.length}} 待完成</span> | 
       <span>已完成</span> | 
       <span>已取消</span> | 
       <span>全部</span>
       </p>
     </div>
  </div>
</template>
<script>
import item from './item.vue'
export default {
    data() {
      return {
        msg: '',
        list:[
          {id:0, type: true, text: '我是默认任务'}
        ],
        TodoList:[],//待完成
        CompletedList: [],//已完成
        CancelledList:[],//已取消
        AllList: []//全部
      }
    },
    components:{
      item
    },
    methods: {
      add() {
        if(!this.msg == ''){
          this.list.push({id: this.list.length, type: false, text: this.msg});
          this.msg='';
        }else{
          alert('不能为空')
        }
      },
      destroy(id){
        this.list.splice(id, 1);
        // id 值与 实际长度不相符
        for(var i=0; i<this.list.length; i++){
          this.list[i].id = i;
        }
      }
    }
  }
</script>
<style scoped lang="scss">
.todoList{
  width: 320px; 
  margin: auto;
  font-size: 16px;
  li{
    padding-top: 5px;
    padding-bottom: 5px;
    
  }
  .inp{
    width: 80%;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding-left: 10px;
    font-size: 16px;
    margin: 0;
    outline:none;
  }
  .submit{
    width:14%;
    height: 35px;
    cursor:pointer;
  }
  .destroy{
     float: right;
     cursor: pointer;
  }
  input[type="checkbox"]{
    cursor: pointer;
  }
}

</style>