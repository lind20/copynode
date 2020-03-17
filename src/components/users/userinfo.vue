<template>
    <div>
        <common-header :secondTitle="'个人信息'" show="1"/>
        <div class="userinfo">
            <a class="avatar_url" :title="userinfo.loginname">
                <img :src="userinfo.avatar_url">
            </a>
            <p class="usermsg">
                <span class="loginname">用户名: <em>{{userinfo.loginname}}</em> </span>
                <span class="score"> <em>{{userinfo.score}}</em> 积分</span>
                <span class="create_at">注册时间 <em>{{userinfo.create_at.slice(0,10)}}</em></span>
            </p>
        </div>
        <recent-topics :userinfo="userinfo"/>
    </div>
</template>

<script>
import commonHeader from '../common/common-header'
import recentTopics from '../users/recent_topics'
export default {
    props:['userinfo'],
    components:{
        commonHeader,
        recentTopics
    }
}
</script>

<style scoped>
    .userinfo{
        padding: 20px;
        text-align: center;
        background-color: #fff;
    }
    .userinfo .avatar_url{
        width: 80px;
        height: 80px;
        border: 3px solid rgb(231, 247, 12);
        border-radius: 50%;
        line-height: 80px;
        overflow: hidden;
    }
    .userinfo .avatar_url img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .userinfo .usermsg{
        display: flex;
        width: 100%;
        height: 50px;
        justify-content: space-around;
        line-height: 50px;
    }
    .userinfo .usermsg em{
        color: rgb(243, 209, 16);
    }
    
</style>