<template>
    <div class = "classItem">
        <p id="username">{{content.name}}</p>
        <p id = "text">{{content.content}}</p>
    </div>
</template>

<script>
export default {
    name:"ContentItem",
    props:["content"]
}
</script>
    
<style scoped>
    .classItem{
        text-align: center;
        border:0.5px solid #e8eaed;
        margin:0em 20em ;
        padding-left:1em;
        padding-right:1em
    }
    #username{
        text-align:left;
        color:#6695fa
    }
    #text{
        text-align:left
    }
</style>