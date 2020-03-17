<template>
  <div class="details-loading">
      <div class="loading">
          <em class="load-image"></em>
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
.details-loading {
    text-align: center;
}
.loading{
    width: 100%;
    height: 100%;
    text-align: center;
}
.load-image{
    display: block;
    height: 229px;
    background: #fff url('../../assets/image/userload.png') no-repeat center/100% 229px;
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