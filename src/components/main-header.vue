<template>
  <div class="main-header">
    <div class="header-title">
      <div class="header-img">
        <img
          src="https://static2.cnodejs.org/public/images/cnodejs_light.svg"
          alt=""
        />
      </div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="/home">
          <router-link to="/home/all">
            <i class="el-icon-chat-line-square"></i>首页
          </router-link>
          </el-menu-item>
        <el-menu-item index="/new">
          <router-link to="/new">
            <i class="el-icon-loading"></i>新手入门
          </router-link>
          </el-menu-item>
        <el-menu-item index="/api">
          <router-link to="/api">
            <i class="el-icon-data-analysis"></i>API
          </router-link>
        </el-menu-item>
        <el-menu-item index="/about">
          <router-link to="/about">
            <i class="el-icon-bell"></i>关于
          </router-link>
          </el-menu-item>
      </el-menu>

      <el-dropdown>
        <el-button type="Warning" circle>
          <i class="el-icon-more"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a" divided>
            <router-link to="/home/all" tag="div">
            <i class="el-icon-chat-line-square"></i>首页
            </router-link>
          </el-dropdown-item>
          <el-dropdown-item command="b" divided>
            <router-link to="/new" tag="div">
              <i class="el-icon-loading"></i>新手入门
            </router-link>
          </el-dropdown-item>
          <el-dropdown-item command="c" divided>
            <router-link to="/api" tag="div">
              <i class="el-icon-data-analysis"></i>API
            </router-link>
          </el-dropdown-item>
          <el-dropdown-item command="d" divided>
            <router-link to="/about" tag="div">
              <i class="el-icon-bell"></i>关于
            </router-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import {asyncInit} from '../store/type'
export default {
  data() {
    return {
      // 页面刷新取数据,若sessionStorage有数据，就获取sessionStorage里的数据；若没有数据，就显示首页
      activeIndex: sessionStorage.getItem('activeIndex')?JSON.parse(sessionStorage.getItem('activeIndex')):'/home'
    };
  },
  methods: {
    ...mapActions('initTopics',[asyncInit]),
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleCommand(command) {
        this.$message('click on item ' + command);
    },
  },
  created(){
    //页面刷新时执行
    this.asyncInit('all')

    //页面刷新时,跟踪路由设置动态样式
    // this.activeIndex = this.$route.name
    // console.log(this.$router)
    
  },
  mounted(){
    // console.log(this.activeIndex)
  },
  watch:{
    $route(to){
      sessionStorage.setItem('activeIndex',JSON.stringify(
        // 若路由中包含'/home'，就存储'/home',否则存储当前路由
        (to.path.includes('/home'))?'/home':to.path
      ))
    },
  }
};
</script>

<style>
.main-header {
  height: 100%;
}
.header-title {
  width: 80%;
  height: 100%;
  margin: auto;
}
.header-title .header-img {
  float: left;
  width: 20%;
  height: inherit;
  line-height: 75px;
}
.header-title .header-img img {
  width: 120px;
  height: 28px;
}
.el-menu-demo {
  float: right;
  margin: auto;
}
.el-menu--horizontal > .el-menu-item {
  width: 120px;
  padding: 0 !important;
}
.el-dropdown-menu__item{
  width: 150px;
  padding: 0;
}
.el-dropdown-menu__item div{
  padding-left: 40px;
}
.el-dropdown-menu__item--divided:before{
  height: 0;
}
.el-menu-item [class^=el-icon-]{
    margin-right: 0;
}
.el-menu--horizontal a{
  display: inline-block;
  width: 100%;
}

  
</style>