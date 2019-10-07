<template>
    <div class='login'>
      <!-- <v-parallax height = "800" src="../../static/images/land.png"> -->
          <!-- <v-card max-width="400"> -->
          <v-container fluid center class="container">
            <v-form class='form' width = "50%">
                <!-- <v-container fluid center> -->
                  <v-row justify="center">
                      <h3>Sign In</h3>
                  </v-row>     
                  <v-row justify="center">
                      <v-col cols="6" sm= "4">
                        <v-text-field
                          v-model="email"
                          label="Email address"
                        ></v-text-field>
                      </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="6" sm="4">
                      <v-text-field
                        v-model='password'
                        :append-icon="show ? 'visibility' : 'visibility_off'"
                        :rules="[rules.required, rules.min]"
                        :type="show ? 'text' : 'password'"
                        name="input-10-2"
                        label="Password"
                        hint="At least 8 characters"
                        value=""
                        class="input-group--focused"
                        @click:append="show = !show"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="6" sm= "4">
                      <v-btn block @click="login" color="facebook" dark>Submit</v-btn>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="6" sm= "4">
                      <p>Don't have an account? Create one <router-link to="signup">here</router-link></p>
                    </v-col>
                  </v-row>
                <!-- </v-container> -->
            </v-form>
            </v-container>
            <!-- </v-card> -->
      <!-- </v-parallax> -->
      
    </div>
    
</template>

<script>
import firebase from 'firebase'

export default {
    name:'login',
    data(){
        return {
            show: false,
            email:'',
            password: '',
            rules: {
            required: value => !!value || 'Required.',
            min: v => v.length >= 8 || 'Min 8 characters',
            emailMatch: () => ('The email and password you entered don\'t match'),
            },
        };
    },
    methods:{
      login: function(){
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user)=>{
            this.$router.replace('home');
          },
          (err)=>{
            alert(err)
          }
        )
      }
    }
}
</script>

<style scoped>
 .login {
     background-image: url('../../static/images/landing6.jpeg');
     /* background-color: #8f2c2c; */
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
 }

 .form{
   margin-top:10em;
   /* border:1px grey solid;
   border-radius:2em; */
 }

 /* .container{
   border:1px red solid
 } */
</style>