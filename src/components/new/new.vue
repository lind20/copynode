<template>
  <div class="new">
    <common-header :secondTitle="'新手入门'" />
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
    components:{
        commonHeader,
        commonContent
    }
};
</script>

<style scoped>
.new {
}
</style>