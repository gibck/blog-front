<template>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page.currentPage"
      :page-sizes="[1, 2, 3, 4,5]"
      :page-size="page.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total=page.total>
    </el-pagination>
  </div>
</template>

<script>
  export default {
    props:[
      'page'
    ],
    methods: {
      handleSizeChange(val) {
        if(val > this.page.total) return;
        if(val == this.page.pageSize) return;
        this.$emit("size",val)
      },
      handleCurrentChange(val) {
        this.$emit("current",val)
      }
    }

  }
</script>

<style>
  .block{
    margin-left: 20px;
    position: fixed;
    bottom: 20px;
  }
</style>
