<template>
  <div class="home-loading">
      <div class="loading">
          <em class="load-image"></em>
          <!-- <transition name="fade">
              <p v-show="textShow" class="load-text">正在连接... </p>
          </transition> -->
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            loading: true,
            textShow:true
        }
    },
    created(){
        setInterval(()=>{
            this.textShow = this.textShow ? false : true;
        },300)
    }
};
</script>

<style scoped>
.home-loading {
    height: 400px;
    text-align: center;
}
.loading{
    width: 100%;
    height: 100%;
    text-align: center;
}
.load-image{
    display: block;
    height: 100px;
    margin: 200px 0 50px;
    background: #fff url('../../assets/image/loadings.png') no-repeat center/620px 90px;
}
.load-text{
    margin-top: 20px;
}
.fade-enter-active,
.fade-leave-active{
    color: #ffd04b;
    transition: all .5s ease;
}
.fade-enter,
.fade-leave-to{
    opacity: 0;
    color: blueviolet;
    transform: translateX(50px);
}
</style>