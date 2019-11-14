<template>
    <div class='login'>
      <!-- <v-parallax height = "800" src="../../static/images/land.png"> -->
          <!-- <v-card max-width="400"> -->
          <v-container fluid center class="container">
            <v-form class='form' width = "50%">
                <v-container fluid center>
                  <v-row justify="center">
                      <h3>Sign In</h3>
                  </v-row>     
                  <v-row justify="center">
                      <v-col cols="12" sm= "8">
                        <v-text-field
                          v-model="email"
                          label="Email address"
                        ></v-text-field>
                      </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="12" sm="8">
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
                    <v-col cols="12" sm= "8">
                      <v-btn block @click="login" color="facebook" dark>Submit</v-btn>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="12" sm= "8">
                      <p>Don't have an account? Create one <router-link to="signup">here</router-link></p>
                    </v-col>
                  </v-row>
                </v-container>
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
     background-image: url('../../static/images/landing.jpg');
     /* background-color: #8f2c2c; */
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
 }

 .form{
   -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
         -o-animation: fadein 2s; /* Opera < 12.1 */
            animation: fadein 2s;
   margin-top:10em;
   margin-left:35%;
   margin-right:35%;
   border:1px #f2f1ed solid;
   border-radius:0.5em;
   background-color:#f2f1ed;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 }

 @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>