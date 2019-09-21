<template>
    <!-- <div class="login">
        <h3>Sign in</h3>
        <input type="text" placeholder="Email"><br>
        <input type="password" placeholder="Password"><br>
        <button>Connection</button>
        <p>Create an account</p>
    </div> -->
    <div class='login'>
      <h3>Sign In</h3>
      <v-form>
      <v-container fluid center>
        <v-row justify="center">
            <v-col cols="8" sm= "6">
              <v-text-field
                label="Email address"
                value=""
                suffix=""
              ></v-text-field>
            </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="8" sm="6">
            <v-text-field
              :append-icon="show2 ? 'visibility' : 'visibility_off'"
              :rules="[rules.required, rules.min]"
              :type="show2 ? 'text' : 'password'"
              name="input-10-2"
              label="Password"
              hint="At least 8 characters"
              value=""
              class="input-group--focused"
              @click:append="show2 = !show2"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="8" sm= "6">
            <v-btn color="primary">Submit</v-btn>
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
export default {
    name:'login',
    data(){
        return {
            show1: false,
            show2: true,
            show3: false,
            show4: false,
            password: 'Password',
            rules: {
            required: value => !!value || 'Required.',
            min: v => v.length >= 8 || 'Min 8 characters',
            emailMatch: () => ('The email and password you entered don\'t match'),
            },
        };
    },
    methods:{}
}
</script>