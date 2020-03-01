<template>
    <div class="common-header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{secondTitle}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
</template>

<script>
export default {
    props:['secondTitle']
}
</script>

<style scoped>
    .common-header{
        height: 40px;
        margin-bottom: 10px;
        padding-left: 15px;
        background-color: #eee;
    }
    .el-breadcrumb{
        line-height: 40px;
    }
    
</style>