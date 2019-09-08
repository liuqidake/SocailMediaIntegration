<template>
    <div class = "content">
        <div v-bind:key="content.id" v-for="content in contents">
            <ContentItem class = "contentItem"  v-bind:content="content"/>
        </div>
    </div>
</template>

<script>
import ContentItem from "./ContentItem"
export default {
    name:"Contents",
    components:{
        ContentItem
    },
    props:["contents"]
}
</script>

<style scoped>
    .classItem{
        margin-top:10px;
        margin-bottom: 10px
    }
    .content{
        margin-top: 5em
    }
</style>