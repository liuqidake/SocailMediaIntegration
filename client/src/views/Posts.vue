<template>
    <div>
         <v-card max-width="500" class="mx-auto">
            <v-list-item>
                <v-list-item-avatar color="grey"><v-img  :src="post.image" height="40"></v-img></v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="headline">{{post.name}}</v-list-item-title>
                    <v-list-item-subtitle>{{post.time}} ago</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar color="white"><v-icon>{{getIcon(post.platform)}}</v-icon></v-list-item-avatar>
            </v-list-item>

            <v-img
            :src="post.image"
            height="auto"
            ></v-img>

            <v-card-text>
                {{post.content}}
            </v-card-text>

            <v-card-actions>
                <v-list-group sub-group no-action>
                    <template v-slot:activator >
                        <v-list-item-content>
                            <v-list-item-title color="deep-purple accent-4">Comments</v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <!-- <v-list-item @click="">
                        <v-list-item-title v-text="hey"></v-list-item-title>
                        <v-list-item-action>
                        <v-icon v-text="he"></v-icon>
                        </v-list-item-action> 
                    </v-list-item>  -->
                </v-list-group>
                <!-- <v-btn text color="deep-purple accent-4">
                    Bookmark
                </v-btn>
                <div class="flex-grow-1"></div>
                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                </v-btn> -->
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    name:"Post",
    props:["post"],
    methods:{
        getIcon:function(s){
            if(s == "facebook"){
                return "fab fa-facebook";
            }else if (s == "twitter"){
                return "fab fa-twitter";
            }else{
                return "fab fa-instagram";
            }
        }
    }
}
</script>