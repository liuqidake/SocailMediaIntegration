<template>
    <nav>
        <v-app-bar flat app>           
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Social</span>
                <span>Gallery</span>
            </v-toolbar-title> 
            <v-spacer></v-spacer>    
            
            <v-badge :bottom="bottom" :color="color" :overlap="true" class="align-self-center">
                <template v-slot:badge>
                    <span>!</span>
                </template>
                <v-icon >far fa-bell</v-icon>
            </v-badge>
            <v-btn  text color="grey">
                <v-icon @click="logout" >exit_to_app</v-icon>    
            </v-btn> 
                  
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" class='primary'>
            <v-list >
                <v-list-item class="mt-12" v-for="link in links" :key="link.text" router :to="link.route">
                     <v-list-item-content>
                         <SocialMediaLogin :name="link.icon"/>
                        <!-- <v-list-item-title class="black--text">{{link.text}}</v-list-item-title> -->
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
            ]
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