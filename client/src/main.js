import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
import firebase from "firebase"

Vue.config.productionTip = false

//<script src="https://www.gstatic.com/firebasejs/6.6.2/firebase-app.js"></script>

var firebaseConfig = {
  apiKey: "AIzaSyD_gqqEmmTK2SYQC8Qs-_1kcewT8j_TATQ",
  authDomain: "social-gallery-caa82.firebaseapp.com",
  databaseURL: "https://social-gallery-caa82.firebaseio.com",
  projectId: "social-gallery-caa82",
  storageBucket: "",
  messagingSenderId: "378877519860",
  appId: "1:378877519860:web:ff3f11ba2ac10db21bbba1"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
