<template>
  <div class="home">

    <Navbar/>
    <!-- <a @click="login">button</a> -->
    <!-- <CreatePost v-on:create-post="createPost"/>  -->
    <!-- <div color="dark" class="posts" v-bind:key="post.id" v-for="post in posts" :post.sync="post">
        <Posts v-bind:post="post"/>
    </div> -->
    <div>

    </div>

  </div>
</template>

<script>

import Navbar from "@/components/Navbar.vue"
import firebase from "firebase"

export default {
  name:"home",
  components:{Navbar},
  middleware:'auth',
  methods:{
  }

}
</script>

<style scoped>
    .posts{
        margin-right:10em;
        margin-top:1em;
        margin-bottom:1em;
    }
</style>


