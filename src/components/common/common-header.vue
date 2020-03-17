<template>
    <div class="common-header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-if="show" :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item>{{secondTitle}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
</template>

<script>
export default {
    props:['secondTitle','show']
}
</script>

<style scoped>
    .common-header{
        height: 40px;
        /* margin-bottom: 10px; */
        padding-left: 15px;
        background-color: rgb(246,246,246);
    }
    .el-breadcrumb{
        line-height: 40px;
    }
    
</style>