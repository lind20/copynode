<template>
  <div class="home">
    <el-tabs :tab-position="tabPosition">
      <el-tab-pane label="全部">全部</el-tab-pane>
      <el-tab-pane label="精华">精华</el-tab-pane>
      <el-tab-pane label="分享">分享</el-tab-pane>
      <el-tab-pane label="问答">问答</el-tab-pane>
      <el-tab-pane label="招聘">招聘</el-tab-pane>
      <el-tab-pane label="测试">客户端测试</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
    data() {
      return {
        tabPosition: 'left'
      };
    }
};
</script>

<style >
.home {
}
.el-tabs{
}
.el-tabs .el-tabs__item.is-left{
    color: rgb(128,189,1);
    text-align: center;
}
.el-tabs .el-tabs__item.is-active{
    color: #409EFF;
}
</style>