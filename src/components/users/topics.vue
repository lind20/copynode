<template>
  <div class="topics">
    <ul class="topic">
        <li class="topic_list" v-for="item in userinfo" :key="item.id">
          <div class="topic_title_wrapper">
            <router-link
              :to="'/user/' + item.author.loginname"
              class="user_avatar"
              :title="item.author.loginname"
            >
              <img :src="item.author.avatar_url" :alt="item.author.loginname" />
            </router-link>

            <router-link
              class="topic_title"
              :to="{
                path: '/details/' + item.id,
                query: { type: $route.params.aid }
              }"
              >{{ item.title }}</router-link
            >

            <a class="last_time">
              <span class="last_active_time">{{
                item.last_reply_at.substr(0,10)
              }}</span>
            </a>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            loading: true
        }
    },
    props:['userinfo'],
};
</script>

<style scoped>
ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.topics {
}
.topic{
    /* margin-bottom: 30px; */
    /* box-shadow:0px 11px 10px #f8f1de; */
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
    height: 100%;
    vertical-align: middle;
    font-size: 8px;
    line-height: 45px;
}
.topic_title_wrapper .user_avatar img{
    width: 30px;
    height: 30px;
    border-radius: 5px;
    vertical-align: middle;
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