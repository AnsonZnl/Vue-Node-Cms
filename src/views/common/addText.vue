<template>
    <div id='app'>
        <el-row>
        <el-col :span="12">
            <div class="grid-content">
                <textarea class="inuptText" v-model="input" placeholder="你想要写什么？"></textarea>
            </div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content">
                <div v-html="compiledMarkdown"></div>
            </div>
        </el-col>
        </el-row>
    </div>
</template>
<script>
import marked from 'marked'
var rendererMD = new marked.Renderer()
marked.setOptions({
    renderer: rendererMD,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
})
export default {
    name: 'App',
    data () {
        return {
            input: ''
        }
    },
    computed: {
        compiledMarkdown: function () {
            return marked(this.input, { sanitize: true })
        }
    }
}
</script>
<style scoped lang="scss">
    .el-col{
        padding: 10px;
    }
    .el-col:nth-last-child(1){
        height: 100vh;
        background-color: #fcfaf2;
    }
    input,button,select,textarea{outline:none}
    textarea{resize:none}
    .inuptText{
        box-sizing: border-box;
        padding: 20px;
        width:100%;
        height: 100vh;
        border-left: 0;
        border-top: 0;
        border-bottom: 0;
        border-right: 1px solid #d9d9d9;
        font-size: 20px;
    }
</style>