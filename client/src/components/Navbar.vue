<template>
    <nav>
        <v-app-bar flat app>           
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Social</span>
                <span>Gallery</span>
            </v-toolbar-title> 
            <v-spacer></v-spacer>    
            <v-btn @click="logout" text color="grey">
                <span>Log out</span>
                <v-icon>exit_to_app</v-icon>
            </v-btn>       
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" class='primary'>
            <v-list >
                <v-list-item class="mt-8" v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon>{{link.icon}}</v-icon>
                    </v-list-item-action>
                     <v-list-item-content>
                        <v-list-item-title class="black--text">{{link.text}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            
        </v-navigation-drawer>
    </nav>
    
</template>

<script>
import firebase from 'firebase'

export default {
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