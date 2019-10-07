<template>
    <div class='Signup'>
      <!-- <v-parallax height = "800" src="../../static/images/land.png"> -->
          <!-- <v-card max-width="400"> -->
            <v-form class=' form ' wdith="50%">
                <v-container fluid center>
                  <v-row justify="center">
                      <h3>Sign Up</h3>
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
                      <v-btn block @click="signup" color="facebook" dark>Submit</v-btn>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="6" sm= "4">
                      <p>Login <router-link to="login">here</router-link></p>
                    </v-col>
                  </v-row>
                </v-container>
            </v-form>
            <!-- </v-card> -->
      <!-- </v-parallax> -->
      
    </div>
    
</template>

<script>
import firebase from 'firebase'

export default {
    name:'signup',
    data(){
        return {
              email:"",
              password:"",
              show: false,
              rules: {
              required: value => !!value || 'Required.',
              min: v => v.length >= 8 || 'Min 8 characters',
              emailMatch: () => ('The email and password you entered don\'t match'),
            },
        };
    },
    methods:{
      signUp: function(){
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user)=>{
            this.$router.replace('home');
          },
          (err)=>{
            alert("Ops, "+err)
          }
        )
      }
    }
}
</script>

<style scoped>
 .Signup{
    background-image: url('../../static/images/landing6.jpeg');
    width:100%;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  .form{
    padding-top:10em
  }
</style>