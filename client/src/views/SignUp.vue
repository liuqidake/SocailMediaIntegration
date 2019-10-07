<template>
    <!-- <div class="login">
        <h3>Sign in</h3>
        <input type="text" placeholder="Email"><br>
        <input type="password" placeholder="Password"><br>
        <button>Connection</button>
        <p>Create an account</p>
    </div> -->
    <div class='Signup'>
      <h3>Sign Up</h3>
      <v-form>
      <v-container fluid center>
        <v-row justify="center">
            <v-col cols="8" sm="6">
              <v-text-field
                v-model="email"
                label="Email address"
                value=""
                suffix=""
              ></v-text-field>
            </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="8" sm="6">
            <v-text-field
              v-model="password"
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
          <v-col cols="8" sm="6">
            <v-btn @click="signUp" color="primary">Submit</v-btn>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="8" sm="6">
            <p>Go back to <router-link to="/login">Login</router-link></p>
          </v-col>
        </v-row>
      </v-container>
  </v-form>
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
              show: true,
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