<template>
  <div id="app">
    <el-container>
      <el-header>
        <mainheader />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>
        <mainfooter />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import mainheader from "./components/main-header.vue";
import mainfooter from "./components/main-footer";
export default {
  name: "App",
  components: {
    mainheader,
    mainfooter
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  user-select: none;
  /* margin-top: 60px; */
}

.el-header,
.el-footer {
  text-align: center;
  line-height: 60px;
}
.el-header{
  background-color: rgb(68,68,68);
  color: #fff;
}

.el-main {
  width: 80%;
  margin: auto;
  padding: 0;
  color: #333;
  box-shadow: 0px 6px 10px rgb(231, 230, 230);
}

/* 自定义颜色 */
#nprogress .bar {
 background: #ffd04b !important;
}
</style>
