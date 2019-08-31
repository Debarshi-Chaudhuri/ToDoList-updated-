import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDdksae-7d4rO-RiPl07mV9Jn2HpJO8mxM",
    authDomain: "firelist-d1ee3.firebaseapp.com",
    databaseURL: "https://firelist-d1ee3.firebaseio.com",
    projectId: "firelist-d1ee3",
    storageBucket: "firelist-d1ee3.appspot.com",
    messagingSenderId: "497704860205",
    appId: "1:497704860205:web:845a905988c833ae"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;