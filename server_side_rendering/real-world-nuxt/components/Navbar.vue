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
      <nuxt-link class="navbar-item" to="/twitter_login">
           <font-awesome-icon :icon="['fab', 'twitter-square']" size="2x"/>
          </nuxt-link>
          <nuxt-link class="navbar-item" to="/reddit_login">
             <font-awesome-icon :icon="['fab', 'reddit-square']" size="2x"/>
          </nuxt-link>
        <div class="navbar-end">
          <button class="navbar-item" @click="logout">Log Out</button>
        </div>
      </div>
  </div>
</nav>

</template>


<script>
import axios from 'axios'
export default {
  methods:{
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
