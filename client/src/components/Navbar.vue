<template>
    <nav>
        <v-app-bar class="toobar" color="white"  flat app>           
            <v-app-bar-nav-icon class="black--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase black--text">
                <span class="font-weight-light">Social</span>
                <span>Gallery</span>
            </v-toolbar-title> 
            <v-spacer></v-spacer> 
            <!-- <v-btn text color="social">
                <v-badge :bottom="bottom" :color="social" :overlap="false" class="align-self-center">
                    <template v-if="hasMessages" v-slot:badge>
                        <span >1</span>
                    </template>
                    <v-icon>fab fa-facebook-f</v-icon>
                </v-badge>
            </v-btn>
            <v-btn text color="social">
                <v-badge :bottom="bottom" :color="social" :overlap="false" class="align-self-center">
                    <template v-if="hasMessages" v-slot:badge>
                        <span>1</span>
                    </template>
                    <v-icon>fab fa-instagram</v-icon>
                </v-badge>
            </v-btn>
            
            <v-btn text color="social">
                <v-badge :bottom="bottom" :color="social" :overlap="false" class="align-self-center">
                    <template v-if="hasMessages" v-slot:badge>
                        <span>1</span>
                    </template>
                    <v-icon>fab fa-twitter</v-icon>
                </v-badge>
            </v-btn> -->
            <v-btn  text color="social">
                <v-icon @click="logout">exit_to_app</v-icon>    
            </v-btn> 
                  
        </v-app-bar>
        <v-navigation-drawer app v-model="drawer" class="bar">
            <v-list >
                <v-list-item class="mt-12" v-for="link in links" :key="link.text" router :to="link.route">
                     <v-list-item-content>
                         <SocialMediaLogin :name="link.icon"/>                       
                    </v-list-item-content>
                </v-list-item>
            </v-list>            
        </v-navigation-drawer>
    </nav>
    
</template>

<script>
import firebase from 'firebase'
import SocialMediaLogin from '../views/Auth/SocialMediaLogIn.vue'

export default {
    components:{SocialMediaLogin},
    data(){
        return{
            drawer:false,
            links:[
                {text:'Home', icon:'fas fa-home', route:'/home'},
                {text: 'Facebook', icon:'fab fa-facebook', route:'/projects'},
                {text: 'Instagram', icon:'fab fa-instagram', route:'/team'},
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
        }
    }
}
</script>

<style scoped>
</style>