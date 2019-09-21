<template>
  <div class="dashboard">
    <Navbar/>
    <div class="mt-4 mb-4" v-for="post in posts" :key="post.name">
        <v-card max-width="344" class="mx-auto">
            <v-card-title>{{post.name}}</v-card-title>
            <v-card-text>I'm card text</v-card-text>
            <v-card-actions>
                <v-btn text>Click</v-btn>
            </v-card-actions>
        </v-card>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"

export default {
    name:"home",
    components:{Navbar},
    data(){
        return{
            posts:[
                {name:"John Smith", time:'1 hrs', content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam nostrum p"},
                {name:"Ricky Martin", time:'1 hrs', content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam nostrum p"},
                {name:"Tina Maryland", time:'1 hrs', content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam nostrum p"},
                {name:"Victoria Beckham", time:'1 hrs', content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam nostrum p"},
            ]
        }
    }
};
</script>
