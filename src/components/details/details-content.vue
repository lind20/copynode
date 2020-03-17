<template>
    <div class="details-content">
        <div v-html="content"></div>
    </div>
</template>

<script>
export default {
    props:['content']
}
</script>

<style scoped>
    .details-content{
        padding: 0 20px;
    }
    .details-content >>> .markdown-text{
        line-height: 2em;
    }
    .details-content >>> .markdown-text a{
        color: rgb(250, 231, 61);
    }
    .details-content >>> .markdown-text img,
    .details-content >>> .markdown-text pre{
        width: 100%;
        height: 100%;
    }
    .details-content >>> .markdown-text pre.prettyprint{
        font-size: 14px;
        border-radius: 0;
        padding: 0 15px;
        border: none;
        margin: 20px -10px;
        border-width: 1px 0;
        background: #f7f7f7;
        -o-tab-size: 4;
        -moz-tab-size: 4;
        tab-size: 4;
        word-break: break-all;
        word-wrap: break-word;
        white-space: pre-wrap;
    }
</style>