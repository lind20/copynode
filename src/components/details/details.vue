<template>
    <div class="details">
        <details-loading v-if="this.$route.params.id!==detailsTopicInit.id"/>
        <details-header v-if="this.$route.params.id==detailsTopicInit.id" :detailsTopicInit="detailsTopicInit"/>
        <details-reply v-if="this.$route.params.id==detailsTopicInit.id" :detailsTopicInit="detailsTopicInit"/>
    </div>
</template>

<script>
import detailsLoading from './details-loading'
import detailsHeader from './details-header'
import detailsReply from './details-reply'

import {mapState,mapMutations,mapActions} from 'vuex'
import {detailsTopic,asyncDetails} from '../../store/type'

export default {
    computed:{
        ...mapState('details',['detailsTopicInit','success'])
        
    },
    methods:{
        ...mapActions('details',[asyncDetails]),
        ...mapMutations('details',[detailsTopic])
    },
    created(){
        this.asyncDetails(this.$route.params.id)
        // this.detailsTopic()
    },
    components:{
        detailsHeader,
        detailsReply,
        detailsLoading
    }
}
</script>

<style scoped>
    .details{
        background-color: rgb(225,225,225);
        overflow:hidden;
    }
    
</style>