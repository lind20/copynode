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
  data() {
    return {
      // tabPosition: "left"
    };
  },
  created(){
    document.title = '首页-全部'
  },
  computed: {
    // topics(){
    //   return this.$store.state.topics
    // }
  },
  methods: {
    // getTopics(){
    //   this.$store.dispatch('getTopics')
    // }
  },
  components:{
    homeTab,
    homeContent
  }
};
</script>

<style >
.home {
}
.el-row {
  height: 100%;
  margin-bottom: 20px;
}
.el-col {
  height: 100%;
}
.el-col-3{
  background: #FFF;
  text-align: center;
  border-right: 1px solid #eee;
}
.el-col-21{
  min-width: 400px;
}

</style>