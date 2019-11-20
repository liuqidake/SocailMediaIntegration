<template>
    <div class="compose-post">
        <v-card max-width="500" class="mx-auto">
            <v-container class="grey lighten-5">
                <v-row no-gutters>
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
                <v-row justify="center" wrap v-if="!chooseImage">
                    <v-col>
                        <v-btn v-on:click="chooseImage = !chooseImage" text icon color="grey">
                            <v-icon>fas fa-image</v-icon>
                        </v-btn>
                        Photo
                    </v-col>
                </v-row>
                <v-row justify="center" wrap v-if="chooseImage">
                    <v-col :col = "12">
                        <v-image-input
                            v-model="imageData"
                            :image-quality="0.85"
                            clearable
                            image-format="jpeg"
                            />
                         <v-btn block color="social" dark >Upload Image</v-btn>
                        <!-- <v-file-input label="File input" outlined dense type="file" id="file" ref="file" v-on:change="handleFileUpload()"></v-file-input> -->
                        <!-- <v-file-input class="file" type="file" id="file" ref="file" v-on:change="handleFileUpload()"></v-file-input> -->
                    </v-col>
                    <!-- <v-col :col="4">            
                        <v-btn block depressed >Upload Image</v-btn>
                    </v-col> -->
                </v-row>
                <v-row justify="center" wrap>
                    <v-col :col="6">
                         <v-btn block color="social" dark @click="postOnTwitter">Post On Twitter</v-btn>
                    </v-col>
                    <v-col :col="6">
                         <v-btn block color="social" dark @click="postOnReddit">Post On Reddit</v-btn>
                    </v-col>
                </v-row>
            </v-container>
            
        </v-card>
    </div>
</template>

<script>
import VImageInput from 'vuetify-image-input';

export default {
    name: "CreatePost",
    components: {
        VImageInput,
    },
    data(){
        return{
            chooseImage:false,
        }
    },
    methods:{
        postOnFacebook: function(){
            // var po = {
            //         id:5,
            //         name:"Victoria Beckham",
            //         platform:"twitter",
            //         time:'0 hrs',
            //         // image:"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
            //         content:this.post_content,
            // }
            // this.$emit("create-post", po);
        }
    }
}
</script>

<style scoped>
    .compose-post{
        margin-right: 10em;
        margin-top:1em
    }
    .file{
        border: 1px grey solid
    }
</style>