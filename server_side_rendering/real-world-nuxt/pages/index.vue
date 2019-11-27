<template>
  <div class="home">

    <Navbar/>
    <nuxt-link @click="login">button</nuxt-link>
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
export default{
  name:"home",
  components:{
    Navbar
  },
  created(){
      // var currentUser = firebase.auth().currentUser;
      // if(!currentUser){
      //   this.$router.push({path:"/login"});
      // }
  },
  methods:{
    login(){
      this.$router.push("/login");
    }
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


