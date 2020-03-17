<template>
  <div class="home-page">
    <el-pagination
      @size-change="SizeChange"
      @current-change="CurrentChange"
      layout="total, sizes, prev, pager, next, jumper"
      :total="1000"
    >
    </el-pagination>

    <el-pagination class="small-page" @size-change="SizeChange" @current-change="CurrentChange" small layout="prev, pager, next" :total="1000">
    </el-pagination>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
import {handleSizeChange,handleCurrentChange,asyncInit} from '@/store/type.js'
export default {
  name:'home-page',
  computed:mapState('initTopics',['initTopics']),
  methods: {
    SizeChange (val){
      console.log(this.initTopics.length)
      this.handleSizeChange(val)
      this.asyncInit(this.$route.params.aid)
    },
    CurrentChange (val){
      console.log(222)
      this.handleCurrentChange(val)
      this.asyncInit(this.$route.params.aid)
    },
    ...mapMutations('initTopics', [handleSizeChange,handleCurrentChange]),
    ...mapActions('initTopics', [asyncInit]),
  }
};
</script>

<style scoped>
.home-page {
}
.el-pagination {
    margin: 10px;
    padding-bottom: 20px;
}
.small-page{
    text-align: center;
}
</style>