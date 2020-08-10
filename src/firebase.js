import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAylatpYIcNXM2KmTymk8St53bdfOfb22c",
    authDomain: "my-ideas-3756d.firebaseapp.com",
    databaseURL: "https://my-ideas-3756d.firebaseio.com",
    projectId: "my-ideas-3756d",
    storageBucket: "my-ideas-3756d.appspot.com",
    messagingSenderId: "1037772764141",
    appId: "1:1037772764141:web:953b39d800f3c0d942ede4"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  export default firebase;