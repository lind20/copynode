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
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">
          <router-link to="/home">
            <i class="el-icon-chat-line-square"></i>首页
          </router-link>
          </el-menu-item>
        <el-menu-item index="3">
          <router-link to="/new">
            <i class="el-icon-loading"></i>新手入门
          </router-link>
          </el-menu-item>
        <el-menu-item index="4">
          <router-link to="/new">
            <i class="el-icon-data-analysis"></i>API
          </router-link>
        </el-menu-item>
        <el-menu-item index="5">
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
            <router-link to="/home">
            <i class="el-icon-chat-line-square"></i>首页
            </router-link>
          </el-dropdown-item>
          <el-dropdown-item command="b" divided>
            <router-link to="/new">
              <i class="el-icon-loading"></i>新手入门
            </router-link>
          </el-dropdown-item>
          <el-dropdown-item command="c" divided>
            <router-link to="/new">
              <i class="el-icon-data-analysis"></i>API
            </router-link>
          </el-dropdown-item>
          <el-dropdown-item command="d" divided>
            <router-link to="/about">
              <i class="el-icon-bell"></i>关于
            </router-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleCommand(command) {
        this.$message('click on item ' + command);
      }
  }
};
</script>

<style scoped>
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
}
.el-menu-item [class^=el-icon-]{
    margin-right: 0;
}


  
</style>