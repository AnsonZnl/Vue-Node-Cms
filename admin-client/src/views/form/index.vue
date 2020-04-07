<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="文章 title">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="文章 auther">
        <el-input v-model="form.author" />
      </el-form-item>
      <el-form-item label="文章 content">
        <el-input v-model="form.content" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">submit</el-button>
        <el-button @click="onCancel">reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import request from '@/utils/request'

export default {
  data() {
    return {
      form: {
        title: '',
        author: '',
        content: ''
      }
    }
  },
  methods: {
    onSubmit() {
      request({
        url: '/article',
        method: 'post',
        data: this.form
      }).then(res => {
        console.log(res)
        this.form = {}
        this.$message({
          message: 'Success!',
          type: 'success'
        })
      }).catch(err => {
        console.log(err)
      })
    },
    onCancel() {
      this.form = {}
      this.$message({
        message: 'reset',
        type: 'info'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

