<template>
  <div class="dashboard">
    <Navbar/>
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
        axios.get("http://localhost:8081/")
        .then(response=>{
            this.posts = response.data;
            // var p = (response.data)[0];
            // //console.log((response.data)[0]);
            // console.log("username: "+p.user.name);
            // console.log("time: "+p.created_at);
            // console.log("content: "+p.text);
            // console.log("profile image "+p.user.profile_image_url_https);
        })
        .catch(error => console.log(error))
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
