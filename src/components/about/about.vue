<template>
  <div class="about">
    <common-header :secondTitle="'关于'"/>
    <common-content :data="aboutData"/>
  </div>
</template>

<script>
import aboutData from './data.js'
import commonHeader from '../common/common-header'
import commonContent from '../common/common-content'
export default {
  name:'about',
  data(){
    return{
      aboutData
    }
  },
  components:{
    commonHeader,
    commonContent
  }
};
</script>

<style scoped>
.about {
}

</style>