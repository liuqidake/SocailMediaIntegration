<template>
    <div class="comment mb-4">        
        <v-container class="main_comment">           
                <span class="font-weight-bold">{{comment.username}}</span>
                <span class='ml-2'>{{comment.content}}</span>
        </v-container>
        <div v-if="hasReply" class="ml-5">
           <v-container class = "reply" v-bind:key="reply.id" v-for="reply in replys">
                <span class="font-weight-bold">{{reply.username}}</span>
                <span class='ml-2'>{{reply.content}}</span>
            </v-container>
        </div>
    </div>
    
</template>

<script>
export default {
    name:"comment",
    props:['comment'],
    computed:{
        replys:function(){
            return this.$props.comment.reply
        },
        hasReply: function(){
            return this.$props.comment.reply
        }
    }
}
</script>

<style scoped>
   .main_comment{
       padding-top:3px;
       padding-bottom:3px;
       margin-bottom:5px;
       border-radius:10px;
       background:#f2f1f0;   
   }
   .reply{
       padding-top:3px;
       padding-bottom:3px;
       margin-bottom:5px;
       border-radius:10px;
       background:#f2f1f0; 
   }
</style>