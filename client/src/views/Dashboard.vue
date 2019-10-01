<template>
  <div class="dashboard">
    <Navbar/>
    <div class="compose-post">
        <v-card max-width="500" class="mx-auto">
            <v-container class="grey lighten-5">
                <v-row no-gutters>
                    <v-col :cols="1">
                        <v-flex  justify-center class="pa-2" >
                             <v-list-item-avatar color="grey"><v-img  src="" height="40"></v-img></v-list-item-avatar>
                        </v-flex>
                    </v-col>

                    <v-col :cols="11">
                        <v-flex class="pa-2" >
                            <v-form>
                                <v-textarea
                                v-model="title"
                                label="What's on your mind?"
                                counter
                                full-width
                                single-line
                                ></v-textarea>
                            </v-form> 
                        </v-flex>
                    </v-col>
                </v-row>
                <!-- <v-contianer>
                    <v-btn block color="primary" dark>Post</v-btn>
                </v-contianer> -->
                <v-row justify="center" wrap>
                    <v-col :col="6">
                         <v-btn block color="social" dark>Post On Facebook</v-btn>
                    </v-col>
                    <v-col :col="6">
                         <v-btn block color="social" dark>Post On Twitter</v-btn>
                    </v-col>
                </v-row>
            </v-container>
            
        </v-card>
    </div>
    
    <div color="dark" class="posts" v-bind:key="post.id" v-for="post in posts">
        <Posts v-bind:post="post"/>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import Posts from "./Posts"

export default {
    name:"home",
    components:{Navbar, Posts},
    data(){
        return{
            posts:[
                {name:"Jack Smith", platform:"facebook",time:'1 hrs', image:"https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam nostrum p",
                  comments:{
                      like:20,
                      comment:[
                          {
                              username:"Jake",
                              content:"Good job! I really like this one!",
                              reply:[
                                  {
                                    username:"Jake",
                                    content:"Good job! I really like this one!",
                                  },
                                  {
                                    username:"Jake",
                                    content:"Good job! I really like this one!",
                                  }
                              ]
                          },
                          {
                              username:"Antonia",
                              content:"Well are you sure?"
                          }
                      ]
                  }},
                {name:"Ricky Martin",platform:"twitter",time:'1 hrs', image:"https://images.unsplash.com/photo-1543486958-d783bfbf7f8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam nostrum p",
                comments:{
                      like:200,
                      comment:[
                          {
                              username:"Jake",
                              content:"Good job! I really like this one!"
                          },
                          {
                              username:"Antonia",
                              content:"Well are you sure?"
                          }
                      ]
                  }},
                {name:"Tina Maryland",platform:"instagram",time:'1 hrs', content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam nostrum p",
                comments:{
                      like:20,
                      comment:[
                          {
                              username:"Jake",
                              content:"Good job! I really like this one!"
                          },
                          {
                              username:"Antonia",
                              content:"Well are you sure?"
                          }
                      ]
                  }},
                {name:"Victoria Beckham",platform:"twitter",time:'1 hrs', image:"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam nostrum p",
                comments:{
                      like:20,
                      comment:[
                          {
                              username:"Jake",
                              content:"Good job! I really like this one!"
                          },
                          {
                              username:"Antonia",
                              content:"Well are you sure?"
                          }
                      ]
                  }},
            ]
        }
    }
};
</script>

<style scoped>
    .posts{
        margin-right:10em;
        margin-top:1em;
        margin-bottom:1em;
    }
    .compose-post{
        margin-right: 10em;
        margin-top:1em
    }
</style>
