<template>
  <v-app class="lighten-4">
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
