<template>
    <div>
         <v-card max-width="500" class="mx-auto">
            <v-list-item>
                <v-list-item-avatar color="grey"><v-img  :src="post.image" height="40"></v-img></v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="headline">{{post.name}}</v-list-item-title>
                    <v-list-item-subtitle>{{post.time}} ago</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar color="white" ><v-icon>{{getIcon(post.platform)}}</v-icon></v-list-item-avatar>
            </v-list-item>

            <v-img :src="post.image" height="auto"></v-img>

            <v-card-text>
                {{post.content}}
            </v-card-text>

            <v-divider :inset="inset"></v-divider>
            <v-container>
                    <v-btn text icon><v-icon size="20" >fas fa-thumbs-up</v-icon></v-btn>
                    <span class = "a">{{likes}}</span>
                   
                <v-btn class = "a" v-on:click="showComment = !showComment" text icon ><v-icon size="20">fas fa-comment</v-icon></v-btn>
            </v-container>
            <v-card-text v-if="showComment" >
                <div v-bind:key="comment.id" v-for="comment in comments">
                    <Comments v-bind:comment="comment"/> 
                </div>                         
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import Comments from "./Comments.vue"

export default {
    name:"Post",
    props:["post"],
    data(){
       return{
           showComment:false,
           likes:0
       };
    },
    components:{
       Comments
    },
    created: function(){
        this.getLikes();
    },
    computed:{
        comments(){
            return this.$props.post.comments.comment
        }
    },
    methods:{
        getIcon:function(s){
            if(s == "facebook"){
                return "fab fa-facebook";
            }else if (s == "twitter"){
                return "fab fa-twitter";
            }else{
                return "fab fa-instagram";
            }
        },
        getLikes:function(){
            this.likes = this.$props.post.comments.like
        }
    }
}

</script>

<style scoped>
   /* .a{
       border: 1px red solid
   } */
</style>