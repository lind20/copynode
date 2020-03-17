<template>
    <div class="details-reply">
        <div class="replies-number">
            <span>{{detailsTopicInit.replies.length}}</span> 回复
        </div>
        <div class="replies" v-for="(item) in detailsTopicInit.replies" :key="item.id">
            <router-link class="replies-img" :to="'/user/'+item.author.loginname">
                <img :src="item.author.avatar_url" :alt="item.author.loginname">
            </router-link>
            <router-link class="replies-img" :to="'/user/'+item.author.loginname">
                <span class="replies-author">{{item.author.loginname}}</span>
            </router-link>
            <span class="replies-publish">发表于：{{date(item.create_at)}}</span>
            <el-tag size="mini" type="danger" effect="dark" v-if="detailsTopicInit.author.loginname===item.author.loginname">作者</el-tag>
            <span class="replies-praise" v-if="item.ups.length">{{item.ups.length}}人默默的赞了回复</span>
            <div v-html="item.content"></div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {date} from '@/store/type.js'
export default {
    computed:mapGetters('initTopics',[date]),
    props:['detailsTopicInit']
}
</script>

<style scoped>
    .details-reply{
        margin: 10px 0;
        background-color: #fff;
    }
    .replies-number{
        width: 100%;
        padding: 12px;
        font-size: 14px;
        background-color: rgb(246,246,246);
    }
    .replies{
        position: relative;
        border-top: 1px solid #eee;
        padding: 10px 20px 20px;
    }
    .replies .replies-img img{
        width: 30px;
        height: 30px;
        border-radius: 20%;
        vertical-align: middle;
    }
    .replies .replies-author{
        font-size: 13px;
        font-weight: bold;
        margin: 0 5px;
    }
    .replies-publish{
        font-size: 13px;
    }
    .replies-praise{
        position: absolute;
        right: 30px;
        top: 10px;
        font-size: 13px;
        color: rgb(161, 157, 157);
    }
    .replies >>> .markdown-text{
        margin-left: 40px;
        line-height: 1.5em;
    }
    .replies >>> .markdown-text ul{
        font-size: 13px;
    }
    .replies >>> .markdown-text p{
        font-size: 13px;
    }
    .replies >>> .markdown-text img{
        width: 100%;
        height: 100%;
    }
    .replies >>> .markdown-text pre.prettyprint{
        font-size: 14px;
        border-radius: 0;
        padding: 0 15px;
        border: none;
        margin: 20px -10px;
        border-width: 1px 0;
        background: #f7f7f7;
        -o-tab-size: 4;
        -moz-tab-size: 4;
        tab-size: 4;
        word-break: break-all;
        word-wrap: break-word;
        white-space: pre-wrap;
    }
</style>