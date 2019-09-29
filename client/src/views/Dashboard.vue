<template>
  <div class="dashboard">
    <Navbar/>
    <div color="dark" class="mt-4 mb-4" v-bind:key="post.id" v-for="post in posts">
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
                              content:"Good job! I really like this one!"
                          },
                          {
                              username:"Antonia",
                              content:"Well are you sure?"
                          }
                      ]
                  }},
                {name:"Ricky Martin",platform:"twitter",time:'1 hrs', image:"https://images.unsplash.com/photo-1543486958-d783bfbf7f8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam nostrum p",
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
