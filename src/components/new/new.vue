<template>
  <div class="new">
    <common-header :secondTitle="'新手入门'" show="1"/>
    <common-content :data="nodeData"/>
  </div>
</template>

<script>
import nodeData from './data.js'
import commonHeader from '../common/common-header'
import commonContent from '../common/common-content'
export default {
    name:'new',
    data(){
        return{
            nodeData
        }
    },
    created(){
      document.title = '新手入门'
    },
    components:{
        commonHeader,
        commonContent
    }
};
</script>

<style scoped>
.new >>> a {
  color: #ffd04b;
}
.new >>> a:hover{
  text-decoration: underline;
}
</style>