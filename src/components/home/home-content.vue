<template>
  <div class="home-content">
      <homeLoading v-if="success"/>
    <ul class="topic" v-show="success?false:true">
      <li class="topic_list" v-for="item in initTopics" :key="item.id">
          <div class="topic_title_wrapper">
              <a href="" class="user_avatar" :title="item.author.loginname">
                  <img :src="item.author.avatar_url" alt="">
              </a>

              <div class="reply_count">
                  <span class="count_of_replies" title="回复数">{{item.reply_count}}</span>
                  <span class="count_seperator">/</span>
                  <span class="count_of_visits" title="点击数">{{item.visit_count}}</span>
              </div>

              <div class="put_top">
                  <homeTag :tag="item" :id="$route.params.aid"/>
              </div>

              <a class="topic_title" @click="handleDetails">
                  {{item.title}}
              </a>

              <a href="" class="last_time">
                  <img class="user_small_avatar" src="../../assets/style/pc.jpg" alt="">
                  <span class="last_active_time">{{item.create_at - item.last_reply_at}}</span>
              </a>
          </div>
      </li>
    </ul>
    <homePage v-if="success?false:true"/>
  </div>
</template>

<script>
import homePage from './home-page'
import homeTag from './home-tag'
import homeLoading from './home-loading'

import {mapState,mapActions} from 'vuex'
import {asyncInit} from '../../store/type.js'

export default {

    computed:{
        ...mapState('initTopics',['initTopics','success']),
        ...mapState('tabStyle',['tabName'])
    },
    mounted(){
        // this.asyncInit()
        // if(this.initTopics.success){
        //     console.log(this.initTopics)
        // }
        console.log(this.tabName)
    },
    methods:{
        ...mapActions('initTopics',[asyncInit]),

        //路由变化时执行这个函数
        handle(){
            //获取二级路由
            const aid = this.$route.params.aid;
            //根据二级路由得到此时点击的导航按钮的文本
            const title = this.tabName[aid]
            //若为true，就设置浏览器的标题
            if(title){
                document.title = `首页-${title}`
            }else{
                document.title = '加载中...'
            }
            this.asyncInit(aid)
            immediate: true
        },
        handleDetails(){
            this.$router.push({
                name:'details'
            })
        }
    },
    watch:{
        //监听路由的变化，当路由变化时，执行handle()函数
        '$route': 'handle'
    },
    components:{
        homePage,
        homeTag,
        homeLoading
    }
};
</script>

<style scoped>
ul{
    margin: 0;
    padding: 0;
    list-style-type: none;
}
.home-content {
    width: 100%;
    height: 100%;
}
.topic{
    margin-bottom: 30px;
    box-shadow:0px 11px 10px #f8f1de;
}
.topic_list{
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #eee;
}
.topic_title_wrapper{
    position: relative;
    height: 80%;
    margin: 10px 15px;
    
}
.topic_title_wrapper .user_avatar{
    width: 30px;
    height: 30px;
    vertical-align: middle;
}
.topic_title_wrapper .user_avatar img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
}
.topic_title_wrapper .reply_count{
    display: inline-block;
    width: 65px;
    height: 100%;
    font-size: 0;
    text-align: center;
    line-height: 45px;
    vertical-align: middle;
}
.topic_title_wrapper .reply_count .count_of_replies{
    font-size: 16px;
    color: #9e78c0;
}
.topic_title_wrapper .reply_count .count_seperator{
    color: #b4b4b4;
    font-size: 12px;
}
.topic_title_wrapper .reply_count .count_of_visits{
    color: #b4b4b4;
    font-size: 10px;
}
.topic_title_wrapper .put_top{
    display: inline-block;
    width: 40px;
    height: 100%;
    line-height: 45px;
    vertical-align: bottom;
}

.topic_title_wrapper .topic_title{
    width: 60%;
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 45px;
    vertical-align: middle;
}
.topic_title_wrapper .topic_title:hover{
    text-decoration: underline;
}

.last_time{
    position: absolute;
    width: 8%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    right: 10px;
}
.user_small_avatar{
    width: 18px;
    height: 18px;
    border-radius: 5px;
}
.last_active_time{
    font-size: 10px;
}
</style>