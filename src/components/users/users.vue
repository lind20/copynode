<template>
    <div class="users">
        <details-loading v-if="$route.params.id !== userinfo.loginname"/>
        <userinfo v-if="$route.params.id === userinfo.loginname" :userinfo="userinfo"/>
    </div>
</template>

<script>
import detailsLoading from '../details/details-loading'
import userinfo from '../users/userinfo'

import {mapState,mapActions} from 'vuex'
import {asyncUserInfo} from '../../store/type'
export default {
    computed:{
        ...mapState('userinfo',['userinfo'])
    },
    methods:{
        ...mapActions('userinfo',[asyncUserInfo])
    },
    created(){
        this.asyncUserInfo(this.$route.params.id)
    },
    components:{
        userinfo,
        detailsLoading
    }
}
</script>

<style scoped>
    .users{
        background-color: #eee;
        overflow: hidden;
    }
    
</style>