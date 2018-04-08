import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyCYF6wdOLDSSkXt9p5BmQC0HNAp299Is10",
    authDomain: "todo-3731f.firebaseapp.com",
    databaseURL: "https://todo-3731f.firebaseio.com",
    projectId: "todo-3731f",
    storageBucket: "",
    messagingSenderId: "644593594850"
  };
const fire = firebase.initializeApp(config)
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { fire, facebookProvider }
