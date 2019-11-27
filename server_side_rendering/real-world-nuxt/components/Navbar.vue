<template>
<!-- <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      Social Gallery
    </a>


    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a href="/twitter_login" class="navbar-item">
        <font-awesome-icon :icon="['fab', 'twitter']" size="2x"/>
      </a>
      <a href="/reddit_login" class="navbar-item">
        <font-awesome-icon :icon="['fab', 'reddit-alien']" size="2x"/>
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Log Out</strong>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav> -->
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

          <nuxt-link class="navbar-item" to="/login">Log Out</nuxt-link>
        </div>
      </div>
  </div>
</nav>

</template>


<script>
export default {

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
