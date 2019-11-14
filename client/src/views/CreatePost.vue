<template>
    <div class="compose-post">
        <v-card max-width="500" class="mx-auto">
            <v-container class="grey lighten-5">
                <v-row no-gutters>
                    <!-- <v-col :cols="1">
                        <v-flex  justify-center class="pa-2" >
                             <v-list-item-avatar color="grey"><v-img  src="" height="40"></v-img></v-list-item-avatar>
                        </v-flex>
                    </v-col> -->

                    <v-col :cols="11">
                        <v-flex class="pa-2" >
                            <v-form>
                                <v-textarea
                                ref="content"
                                v-model="post_content"
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
                         <v-btn block color="social" dark @click="postOnFacebook">Post On Facebook</v-btn>
                    </v-col>
                    <v-col :col="6">
                         <v-btn block color="social" dark @click="postOnTwitter">Post On Twitter</v-btn>
                    </v-col>
                </v-row>
            </v-container>
            
        </v-card>
    </div>
</template>

<script>
export default {
    name: "CreatePost",
    methods:{
        postOnFacebook: function(){
            var po = {
                    id:5,
                    name:"Victoria Beckham",
                    platform:"twitter",
                    time:'0 hrs',
                    // image:"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
                    content:this.post_content,
            }
            this.$emit("create-post", po);
        }
    }
}
</script>


<style scoped>
    .compose-post{
        margin-right: 10em;
        margin-top:1em
    }
</style>