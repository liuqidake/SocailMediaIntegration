<template>
    <nav>
        <v-app-bar flat app>           
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Social</span>
                <span>Gallery</span>
            </v-toolbar-title> 
            <v-spacer></v-spacer>    
            <v-btn text color="grey">
                <span>Sign out</span>
                <v-icon>exit_to_app</v-icon>
            </v-btn>       
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" class='primary'>
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon class="white--text">{{link.icon}}</v-icon>
                    </v-list-item-action>
                     <v-list-item-content>
                        <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title>Three-line item</v-list-item-title>
                        <v-list-item-subtitle>
                        Secondary line text Lorem ipsum dolor sit amet,
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                        consectetur adipiscing elit.
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            
        </v-navigation-drawer>
    </nav>
    
</template>

<script>
export default {
    data(){
        return{
            drawer:false,
            links:[
                {icon:'dashboard', text:'Dashboard', route:'/'},
                {icon: 'folder', text:'My Projects', route:'/projects'},
                {icon: 'person', text:'Team', route:'/team'}
            ]
        }
    }
}
</script>