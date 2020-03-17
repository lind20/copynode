<template>
  <div class="recent">
    <div class="recent_topics">
      <common-header :secondTitle="'最近创建的话题'" show="" />
      <div v-if="!userinfo.recent_topics.length" class="text">无话题</div>
      <topics v-if="userinfo.recent_topics.length" :userinfo="userinfo.recent_topics" :success="success"/>
    </div>
    <div class="recent_replies">
      <common-header :secondTitle="'最近参与的话题'" show=""/>
      <div v-if="!userinfo.recent_replies.length" class="text">无话题</div>
      <topics v-if="userinfo.recent_replies.length" :userinfo="userinfo.recent_replies" :success="success"/>
    </div>
  </div>
</template>

<script>
import commonHeader from "../common/common-header";
import topics from "../users/topics";
export default {
  data() {
    return {
      
    };
  },
  props:['userinfo','success'],
  components: {
    commonHeader,
    topics,
  }
};
</script>

<style scoped>
.text{
  padding: 20px;
}
.recent_topics {
  margin: 10px 0;
  background-color: #fff;
}
.el-breadcrumb {
  height: 40px;
  /* margin-bottom: 10px; */
  padding-left: 15px;
  background-color: #eee;
  line-height: 40px;
}
.recent_replies{
    margin: 10px 0;
    background-color: #fff;
}
</style>