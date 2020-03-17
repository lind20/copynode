<template>
  <div class="home">
    <el-row>
      <el-col :span="3">
          <homeTab/>
      </el-col>
      <el-col :span="21">
        <homeContent/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import homeTab from './home-tab'
import homeContent from './home-content'

export default {
  created(){
    document.title = '首页-全部'
  },
  components:{
    homeTab,
    homeContent
  }
};
</script>

<style scoped>
.home {
  overflow:hidden;
}
.el-col-3{
  background: #FFF;
  text-align: center;
}
.el-col-21{
  min-width: 400px;
}

</style>