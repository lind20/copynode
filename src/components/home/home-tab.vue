<template>
  <div class="home-tab">
    <el-menu
      :default-active="activeIndex"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="all">
        <router-link to='/home/all'>全部</router-link>
      </el-menu-item>
      <el-menu-item index="good">
        <router-link to='/home/good'>精华</router-link>
      </el-menu-item>
      <el-menu-item index="share">
        <router-link to='/home/share'>分享</router-link>
      </el-menu-item>
      <el-menu-item index="ask">
        <router-link to='/home/ask'>问答</router-link>
      </el-menu-item>
      <el-menu-item index="job">
        <router-link to='/home/job'>招聘</router-link>
      </el-menu-item>
      <el-menu-item index="dev">
        <router-link to='/home/dev'>测试</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
    data(){
        return{
          activeIndex:'all'
        }
    },
    mounted(){
      this.activeIndex = this.$route.params.aid
    },
    methods:{}
};
</script>

<style scoped>
.home-tab {
    width: 100%;
    height: 100%;
}
.el-menu{
    width: 100%;
}
.el-menu .el-menu-item{
    padding: 0 !important;
}
.is-active{
    border-right:3px solid #ffd04b;
}
.is-active a{
  color: #ffd04b;
}
</style>