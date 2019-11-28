<template>
<nav class="navbar is-light">
  <div class="container">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">Social Gallery</nuxt-link>
      <button class="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
    </div>
    <div class="navbar-menu">
      <button class="navbar-item" @click="loginTwitter">
        <font-awesome-icon :icon="['fab', 'twitter-square']" size="2x"/>
      </button>
      <button class="navbar-item" @click="loginReddit">
          <font-awesome-icon :icon="['fab', 'reddit-square']" size="2x"/>
      </button>
      <div class="navbar-end">
        <button class="navbar-item" @click="logout">Log Out</button>
      </div>
    </div>
  </div>
</nav>

</template>


<script>
import firebase from 'firebase'
import axios from 'axios'
export default {
  methods:{
    loginTwitter: function(){
       axios.get("/twitter_login")
       .then((res)=>{
         console.log("success")
       },
       (err)=>{
         console.log("error is "+err);
       })
    },
    loginReddit: function(){
      axios.get("/reddit_login")
       .then((res)=>{
         console.log("success")
       },
       (err)=>{
         console.log("error is "+err);
       })
    },
    logout: function(){
      firebase.auth().signOut().then(
                ()=>{
                    this.$router.replace('login');
                }
            )
    }
  }
}
</script>

<style scoped>
.navbar-item {
  color:#4a4a4a !important;
}
.navbar{
  border-bottom: 1px solid #e3e1e1
}
</style>
