<template>
    <nav>
        <v-app-bar class="toobar" color="white"  flat app>           
            <!-- <v-app-bar-nav-icon class="black--text" @click="drawer = !drawer"></v-app-bar-nav-icon> -->
            <v-toolbar-title class="text-uppercase black--text">
                <span class="font-weight-light">Social</span>
                <span>Gallery</span>
            </v-toolbar-title> 
            <v-spacer></v-spacer> 
            <!-- <v-container> -->
                <v-btn text color="social">
                    <v-badge :bottom="bottom" :color="social" :overlap="false" class="align-self-center">
                        <v-icon @click="getTwitterAuth">fab fa-twitter</v-icon>
                    </v-badge>
                </v-btn>
                <v-btn text color="social">
                    <v-badge :bottom="bottom" :color="social" :overlap="false" class="align-self-center">
                        <v-icon @click="getRedditAuth">fab fa-reddit-alien</v-icon>
                    </v-badge>
                </v-btn>
            <!-- </v-container> -->
        
            <v-btn  text color="social">
                <v-icon @click="logout">exit_to_app</v-icon>    
            </v-btn> 
                  
        </v-app-bar>
    </nav>
    
</template>

<script>
import firebase from 'firebase'
import SocialMediaLogin from '../views/Auth/SocialMediaLogIn.vue'
import axios from "axios"

export default {
    components:{SocialMediaLogin},
    data(){
        return{
            drawer:false,
            links:[
                {text:'Home', icon:'fas fa-home', route:'/home'},
                {text: 'Twitter', icon:'fab fa-twitter', route:'/team'}
            ],
            hasMessages:true,
            social:"#000000"
        }
    },
    methods:{
        logout:function(){
            firebase.auth().signOut().then(
                ()=>{
                    this.$router.replace('login');
                }
            )
        },
        getTwitterAuth:function(){
            axios.get("http://localhost:8081/twitter/auth")
            .then(response=>{
                //this.posts = response.data;
                this.$emit("posts_data", response.data);
            })
            .catch(error => console.log(error))
        },
        getRedditAuth:function(){
            axios.get("http://localhost:8081/reddit/auth")
            .then(response=>{
                window.location.href = response.data
            })
            .catch(error => console.log(error))
        }

    }
}
</script>

<style scoped>
</style>