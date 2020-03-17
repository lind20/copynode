<template>
  <div class="about">
    <common-header :secondTitle="'关于'" show="1"/>
    <common-content :data="aboutData"/>
  </div>
</template>

<script>
import aboutData from './aboutData.js'
import commonHeader from '../common/common-header'
import commonContent from '../common/common-content'
export default {
  name:'about',
  data(){
    return{
      aboutData
    }
  },
  created(){
    document.title = '关于'
  },
  components:{
    commonHeader,
    commonContent
  }
};
</script>

<style scoped>
.about >>> a {
  color: #ffd04b;
}
.about >>> a:hover{
        text-decoration: underline;
    }
</style>