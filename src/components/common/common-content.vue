<template>
  <div class="common-content">
    <div class="common-text" v-for="(item, index) in data" :key="index">
      <h2>{{ item.title }}</h2>
      <el-divider></el-divider>
      <div class="markdown-text" v-html="item.content"></div>
    </div>
  </div>
</template>

<script>
export default {
    name:'common-content',
    props:['data']
};
</script>

<style scoped>
.common-content {
  padding: 10px 0;
}
.common-content .common-text {
  padding: 10px;
}
.common-content .common-text h2 {
  font-size: 25px;
  font-weight: bold;
}
.el-divider--horizontal {
  margin: 16px 0;
}
.markdown-text{
  margin-bottom: 10px;
  line-height: 40px;
  font-size: 14px;
}
.markdown-text >>> a{
    padding-left: 5px;
}
.markdown-text >>> img{
  display: inline-block;
  width: 280px;
  height: 60px;
}
</style>