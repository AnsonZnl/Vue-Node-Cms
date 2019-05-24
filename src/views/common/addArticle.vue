<template>
    <div id='app'>
        <h2>post请求</h2>
        <div class="test">
           <form>
                <input type="text" value="" v-model="name" placeholder="请输入用户名">
                <input type="text" value="" v-model="age" placeholder="请输入年龄">
                <input type="file" @change="getFile($event)">
                <button @click="submitForm($event)">提交</button>
            </form>
        </div>
        
        <h2>get请求</h2>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="文章标题">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="文章内容">
                <el-input type="textarea" v-model="form.content"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>

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
            form:{
                title: 'title',
                content: 'content'
            },
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
        onSubmit(){
            axios.get(this.GLOBAL.serverIp + 'addPost',{
                params: this.form
            },{
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(res=>{
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
            axios.post(this.GLOBAL.serverIp + 'testFormData', formData, config)
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