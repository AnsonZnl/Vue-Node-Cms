<template>
    <div>
        <h2>文章列表</h2>
        <el-button :plain="true" @click="success">成功</el-button>
        <el-button :plain="true" @click="warning">警告</el-button>
        <el-button :plain="true" @click="error">错误</el-button>
        <el-button :plain="true" @click="msg">普通</el-button>
    </div>
</template>

<script>
  export default {
    methods: {
        success(){
            this.common.message(this, 'success', '成功消息')
        },
        warning(){
            this.common.message(this, 'warning', '警告消息')
        },
        error(){
            this.common.message(this, 'error', '错误消息')
        },
        msg(){
            this.common.message(this, '', '普通消息')
        }
    }
  }
</script>
<style scoped lang="scss">
    
</style>