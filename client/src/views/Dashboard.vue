<template>
  <div class="dashboard">
    <Navbar @posts_data = "postsData"/>
    <CreatePost v-on:create-post="createPost"/> 
    <div color="dark" class="posts" v-bind:key="post.id" v-for="post in posts" :post.sync="post">
        <Posts v-bind:post="post"/>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import Posts from "./Posts"
// import {posts_data} from "../LocalStorage.js"
import CreatePost from "./CreatePost"
import axios from 'axios'
// import jsonp from "jsonp"
// import config from '../config/reddit_config.js'

export default {
    name:"home",
    components:{Navbar, Posts, CreatePost},
    data(){
        return{
            posts:[],
            tests:[]
        }
    },
    created(){
        // axios.get("http://localhost:8081/")
        // .then(response=>{
        //     //this.posts = response.data;
        //     var url = response.data;
        //     window.location.href = url
        // })
        // .catch(error => console.log(error))

        // jsonp("http://localhost:8081/", null, (err, res)=>{
        //     if(err){
        //         console.log(err);
        //     }else{
        //         console.log(res);
        //     }
        // })
    },
    // mounted(){
    //     this.loadData();
    // },
    methods:{
        // loadData: function(){
        //     //eventually the data will be fetched by calling backend api
        //     this.posts = posts_data
        // },
        createPost(newPost){
            this.posts.push(newPost);
        },

        postsData(variable){
            variable.forEach(element => {
                this.posts.push(element)
            });
            console.log(this.posts);
        }
    }
};
</script>

<style scoped>
    .posts{
        margin-right:10em;
        margin-top:1em;
        margin-bottom:1em;
    }
</style>
