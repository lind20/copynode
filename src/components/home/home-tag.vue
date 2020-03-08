<template>
    <div class="home-tag">
        <el-tag  size="mini" :type="tagColor(tag)" effect="dark">{{tagText(tag,id)}}</el-tag>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {tagColor,tagText} from '../../store/type.js'
export default {
    computed: mapGetters('tabStyle',['tagColor','tagText']),
    props:['tag','id']
}
</script>

<style scoped>
    .home-tag{
        
    }
    
</style>