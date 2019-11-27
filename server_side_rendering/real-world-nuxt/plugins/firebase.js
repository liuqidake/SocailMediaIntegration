import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyD_gqqEmmTK2SYQC8Qs-_1kcewT8j_TATQ",
  authDomain: "social-gallery-caa82.firebaseapp.com",
  databaseURL: "https://social-gallery-caa82.firebaseio.com",
  projectId: "social-gallery-caa82",
  storageBucket: "social-gallery-caa82.appspot.com",
  messagingSenderId: "378877519860",
  appId: "1:378877519860:web:81f1e6225bc2142d1bbba1"
};

let app = null
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig)
}

// export const db = app

// firebase.initializeApp(firebaseConfig);
// let app = null;

// firebase.auth().onAuthStateChanged(()=>{
//   if(!firebase.apps.length){
//     app = new Vue({
//       vuetify,
//       router,
//       store,
//       render: h => h(App)
//     }).$mount('#app');
//   }
// });

// export const db = app.database()
