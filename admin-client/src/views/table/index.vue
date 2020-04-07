<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="Title" width="">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="create_time" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.create_date }}</span>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="handle" align="center" width="260">
        <template slot-scope="scope">
          <el-button type="danger" size="small" icon="el-icon-delete" @click="remove(scope.row._id, scope.$index)">delete</el-button>
          <!-- <router-link :to="'/edit/'+scope.row._id"> -->
          <el-button type="primary" size="small" icon="el-icon-edit">
            Edit
          </el-button>
          <!-- </router-link> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { getList, removeArticle } from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    remove(id, index) {
      console.log(id)
      removeArticle(id).then(res => {
        console.log(res)
        this.list.splice(index, 1)
        this.$message('删除成功！')
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
