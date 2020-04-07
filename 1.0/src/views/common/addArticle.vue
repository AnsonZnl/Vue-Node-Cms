<template>
    <div id='app'>
        <div class="test">
            上传文件：<input type="file" @change="handlerUpload($event)"><br>
            姓名：<input type="text" v-model="nameText"><br>
            年龄：<input type="text" v-model="ageText"><br>
            性别：  
            <el-radio v-model="radio" label="1">男</el-radio>
            <el-radio v-model="radio" label="0">女</el-radio><br>
            <button @click="addtext">添加</button>
        </div>
        <hr>
        <div class="test">
           <form>
                <input type="text" value="" v-model="name" placeholder="请输入用户名">
                <input type="text" value="" v-model="age" placeholder="请输入年龄">
                <input type="file" @change="getFile($event)">
                <button @click="submitForm($event)">提交</button>
            </form>

        </div>
        <!-- <el-row>
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
        </el-row> -->
    </div>
</template>
<style scoped lang="scss">
    .test{
        margin-left: 80px;
    }
</style>
<script>
import marked from 'marked'
import axios from 'axios'
import $qs from 'qs'
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
            nameText: 'znl',
            ageText:'19',
            radio: '1',
            input: '',
            name: 'znl',
            age: '19',
            file: ''
        }
    },
    methods: {
        // 文本form 上传
        addtext(){
            axios.post(this.GLOBAL.serverIP + 'testInput',this.$qs.stringify({
                data:{
                    name: this.nameText,
                    age: this.ageText,
                    sex: this.radio
                }
            }),{ 
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }}).then(res=>{
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })
        },
        // post文件上传
        getFile(event){
            this.file = event.target.files[0];
            console.log(this.file);
        },
        submitForm(event){
             event.preventDefault();
            let formData = new FormData();
            formData.append('name', this.name);
            formData.append('age', this.age);
            formData.append('file', this.file);
 
            let config = {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
            axios.post(this.GLOBAL.serverIP + + 'testFormData', formData, config)
            .then(res=>{
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })
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