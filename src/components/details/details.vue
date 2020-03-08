<template>
    <div class="details">
        <details-content/>
        <details-reply/>
    </div>
</template>

<script>
import detailsContent from './details-content'
import detailsReply from './details-reply'
export default {
    data(){
        return{
            
        }
    },
    components:{
        detailsContent,
        detailsReply
    }
}
</script>

<style scoped>
    .details{
        
    }
    
</style>