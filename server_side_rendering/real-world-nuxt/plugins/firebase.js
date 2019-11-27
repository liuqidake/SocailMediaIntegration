import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBbI02LGsO_PUBJYd2BrmY1d15FUxSUoVw",
    authDomain: "capstone-cf0d7.firebaseapp.com",
    databaseURL: "https://capstone-cf0d7.firebaseio.com",
    projectId: "capstone-cf0d7",
    storageBucket: "capstone-cf0d7.appspot.com",
    messagingSenderId: "229596909500",
    appId: "1:229596909500:web:8810970d67ca0b42dae5b9",
    measurementId: "G-SYDWTG9RE5"
};

var app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig)

export const db = app.database()
