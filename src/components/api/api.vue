<template>
    <div class="api">
        <common-header :secondTitle="'API'" show="1"/>
        <div class="markdown-text">
            <p>以下 api 路径均以 <a href="https://cnodejs.org/api/v1">https://cnodejs.org/api/v1</a> 为前缀</p>
            <p>update 2019-03-21: 涉及发帖和发评论的接口都已经下线了，太多人为了测试客户端乱发帖了。</p>

            <div v-for="(item,index) in apiData" :key="index" class="markdown-con">
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
import apiData from './apiData'

export default {
    data(){
        return{
            apiData
        }
    },
    created(){
        document.title = 'API'
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
    .api>>> a{
        color: #ffd04b;
    }
    .api .markdown-text>>> span{
        font-size:12px;
        background-color:#eee;
        padding:3px 5px;
        border-radius:5px;
    }
    .api .markdown-text >>> ul,
    .api .markdown-text >>> ol{
        line-height:2em;
    }
    .api .markdown-text >>> p{
        margin-bottom:20px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .api .markdown-text >>> pre{
        word-break: break-all;
        word-wrap: break-word;
        white-space: pre-wrap;
         background-color:#eee;
         padding:5px 10px;
    }
    .api >>> a:hover{
        text-decoration: underline;
    }
    .markdown-text{
        padding: 20px 15px;
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
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    p{
        line-height: 2em !important;
    }
    pre.prettyprint{
        font-size: 14px;
        tab-size: 4 !important;
    }
</style>