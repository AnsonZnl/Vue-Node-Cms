<template>
    <div class = "helper">
        <span class='left'> {{unFinishedTodoLength}} item left</span>
        <span class="tabs"
          v-for="state in states"
          :key="state"
          :class="[state, filter === state ? 'actived' : '']"
          @click="toggleFilter(state)"
        >
                {{state}}
        </span>
       <span class="clear" @click="clearAllCompleted()">
            Clear Completed
        </span>
    </div>
</template>
<script>
export default {
    props:{
        filter:{
            type: String,
            required: true
        },
        todos:{
            type: Array,
            required: true
        }
    },
    data(){
        return{
            states: ['all', 'active', 'completed']
        }
    },
    computed:{
        //Vue中computed就是 实时计算 使用。Vue检测到数据发生变动时就会执行对相应数据有引用的函数。
        unFinishedTodoLength(){
            return this.todos.filter(todo => !todo.completed).length;
        }
    },
    methods:{
        toggleFilter(state){
            // 切换状态
            this.$emit('toggle', state);
        },
        clearAllCompleted(){
            this.$emit('clearAllCompleted')
        }
    }
}
</script>
<style scoped lang="scss">
        .helper {
        font-weight:  100;
        display:  flex;
        justify-content:  space-between;
        padding : 5px 0;
        line-height: 30px;
        background-color:  #ffffff;
        font-size:  14px;
        // font-smoothing: antialiased;
    }
    .left, .clear, .tabs {
        padding:  0 10px;
        box-sizing:  border-box;
    }
    .left, .clear {
        width:  220px;
    }
    .left {
        text-align: left;
    }
    .clear {
        text-align: right;
        cursor: pointer;
    }
    .tabs {
        width: 200px;
        display: flex;
        text-align: center;
        justify-content: space-around;
        cursor:  pointer;
        * {
            display: inline-block;
            padding:  0 10px;
            cursor:  pointer;
            border:  1px solid rgba(175, 47, 47, 0);
            &.actived {
                border:  solid 2px #ccc;
                border-radius:  5px;
            }
        }
    }    
    .actived {
                border:  solid 2px #ccc;
                border-radius:  5px;
            }
</style>