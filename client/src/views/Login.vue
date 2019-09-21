<template>
    <div class='login'>
      <h3>Sign In</h3>
      <v-form>
      <v-container fluid center>
        <v-row justify="center">
            <v-col cols="8" sm= "6">
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
          <v-col cols="8" sm= "6">
            <v-btn @click="login" color="primary">Submit</v-btn>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="8" sm= "6">
            <p>Don't have an account? Create one <router-link to="signup">here</router-link></p>
          </v-col>
        </v-row>
      </v-container>
  </v-form>
    </div>
    
</template>

<script>
import firebase from 'firebase'

export default {
    name:'login',
    data(){
        return {
            show: true,
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