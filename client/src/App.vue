<template>
  <v-app :style="{background:$vuetify.theme.themes.light.background}" class="lighten-4">
    <v-content class="mx-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
 const app = {
    name: 'App',  
    data: () => {  
      return {}
    },  
 }
 export default app 
</script>

<style>
  /* body{
   background-image: url('https://images.unsplash.com/photo-1554068292-ce72e2521c9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80')
  } */
</style>
