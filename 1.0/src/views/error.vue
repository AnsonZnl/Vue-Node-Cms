<template>
    <div>
        <h2>404 Not found...</h2>
        <br>
         <el-button type="primary" @click="toHome">回到首页</el-button>
    </div>
</template>
<script>
export default {
    methods:{
        toHome: function(){
            this.$router.push('./')
        }
    }
}
</script>
<style scoped lang="scss">
    div{
        padding-top: 50px;
        text-align: center;
    }
</style>