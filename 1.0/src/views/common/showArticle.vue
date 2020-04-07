<template>
    <div>
        <h2>{{data.title}}</h2>
        <div v-html="data.content"></div>
    </div>
</template>
<script>
export default {
    data (){
        return {
            data: this.$route.params.data
        }
    },
    created(){
        console.log(this.$route.params.data)
    }
    ,methods:{
        
    }
}
</script>