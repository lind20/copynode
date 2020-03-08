<template>
  <div class="home-page">
    <el-pagination
      class="big-page"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 30, 50, 100]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    >
    </el-pagination>

    <el-pagination class="small-page" small layout="prev, pager, next" :total="50">
    </el-pagination>
  </div>
</template>

<script>
export default {
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  }
};
</script>

<style scoped>
.home-page {
}
.el-pagination {
    margin-left: 10px;
}
.small-page{
    text-align: center;
}
</style>