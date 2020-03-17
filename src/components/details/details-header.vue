<template>
    <div class="details-header">
        <div class="topic_full_title">
            <el-tag v-if="detailsTopicInit.top || detailsTopicInit.good" size="mini" :type="tagColor(detailsTopicInit)" effect="dark">{{tagText(detailsTopicInit)}}</el-tag>
            <span class="txt" :title="detailsTopicInit.title">{{detailsTopicInit.title}}</span>
        </div>
        <div class="topic_line"></div>
        <div class="topic_author">
            <router-link :to="'/user/'+detailsTopicInit.author.loginname">
                <img :src="detailsTopicInit.author.avatar_url" :alt="detailsTopicInit.author.loginname">
            </router-link>
            <div class="topic_msg">
                <router-link :to="'/user/'+detailsTopicInit.author.loginname">
                    <span class="author_name">{{detailsTopicInit.author.loginname}}</span>
                </router-link>
                <span class="put_out">发布于 {{detailsTopicInit.create_at.substring(0,10)}}</span>
                <span class="browse"><em>{{detailsTopicInit.visit_count}}</em> 次浏览</span>
                <span class="come_from">来自 {{tabName[detailsTopicInit.tab]}}</span>
            </div>
        </div>
        <details-content :content="detailsTopicInit.content"/>
    </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
import detailsContent from './details-content'
import {tagColor,tagText} from '../../store/type'
export default {
    props:['detailsTopicInit'],
    computed:{
        ...mapState('tabStyle',['tabName']),
        ...mapGetters('tabStyle',[tagColor,tagText])
    },
    components:{
        detailsContent
    }
}
</script>
<style scoped>
    .details-header{
        padding: 25px 20px 10px;
        background-color: #fff;
    }
    .topic_full_title .txt{
        display: inline-block;
        width: 80%;
        font-size: 23px;
        font-weight: bold;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .topic_full_title .el-tag{
        margin-left: 10px;
        vertical-align: top;
    }
    .topic_line{
        width: 100%;
        height: 1px;
        background-color: #eee;
        margin: 20px 0;
    }
    .topic_author img{
        width: 40px;
        justify-content: 40px;
        border-radius: 50%;
        vertical-align: middle;
    }
    .topic_author .topic_msg{
        display: inline;
        font-size: 10px;
        vertical-align: middle;
        color: rgb(136, 141, 141);
    }
    .topic_author .author_name{
        font-size: 14px;
        color: rgb(184, 196, 24);
    }
    .topic_author .put_out{
        margin: 0 10px;
        color: rgb(243, 160, 51);
    }
    .come_from{
        margin-left: 10px;
    }
</style>