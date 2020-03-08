<template>
    <div class="api">
        <common-header :secondTitle="'API'"/>
        <div class="markdown-text">
            <p>以下 api 路径均以 <a href="https://cnodejs.org/api/v1">https://cnodejs.org/api/v1</a> 为前缀</p>
            <p>update 2019-03-21: 涉及发帖和发评论的接口都已经下线了，太多人为了测试客户端乱发帖了。</p>

            <div v-for="(item,index) in data" :key="index" class="markdown-con">
                <h2>{{item.title}}</h2>
                <div class="line1"></div>
                <div v-for="(val,idx) in item.apiContent" :key="idx">
                    <h4 v-if="val.small_title">{{val.small_title}}</h4>
                    <div class="line2" v-if="val.small_title"></div>
                    <div class="text" v-html="val.content"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import commonHeader from '../common/common-header'
import data from './data'

export default {
    data(){
        return{
            data
        }
    },
    components:{
        commonHeader
    }
}
</script>

<style scoped>
    .api{
        font-size: 15px;
    }
    .api a{
        color: #ffd04b;
    }
    .markdown-text{
        padding: 10px 15px;
    }
    h2{
        margin-top: 40px;
        font-weight: bold;
        font-size: 25px;
    }
    .line1,.line2{
        width: 100%;
        height: 1px;
        background-color: #ddd;
    }
    .line1{
        margin: 10px 0;
    }
    .line2{
        margin: 5px 0 20px;
    }
    h4{
        margin-top: 30px;
        font-weight: bold;
        font-size: 18px;
        letter-spacing: 1px;
    }
    p{
        line-height: 2em !important;
    }
    pre.prettyprint{
        font-size: 14px;
        tab-size: 4 !important;
    }
</style>