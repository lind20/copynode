<template>
  <div id="app">
    <mainheader/>
    <router-view/>
  </div>
</template>

<script>
import mainheader from './components/main-header.vue'
export default {
  name: 'App',
  components:{
    mainheader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
