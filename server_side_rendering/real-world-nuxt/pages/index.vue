<template>
  <div class="home">

    <Navbar/>

  </div>
</template>

<script>

import Navbar from "@/components/Navbar.vue"
import firebase from "firebase"
import axios from "axios"

export default {
  name:"home",
  components:{Navbar},
  // middleware:'auth',
  methods:{
    hey(){
       axios.get("/twitter_login")
       .then(
         (res)=>{
           console.log(res);
         },
         (err)=>{
           console.log("err is "+err);
         }
       )
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


