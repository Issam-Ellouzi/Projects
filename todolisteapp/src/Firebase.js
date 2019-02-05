import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings  = {timestampsInSnapshots: true};
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAbpAmbKVGam1s2WuiVXnW0Nozo97Ll-Lo",
    authDomain: "todolisteapp-c0f64.firebaseapp.com",
    databaseURL: "https://todolisteapp-c0f64.firebaseio.com",
    projectId: "todolisteapp-c0f64",
    storageBucket: "todolisteapp-c0f64.appspot.com",
    messagingSenderId: "474401796528"
  };

  firebase.initializeApp(config);

  firebase.firestore().settings(settings);
  
  export default firebase;