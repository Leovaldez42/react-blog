import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  // Initialize Firebase

var firebaseConfig = {
    apiKey: "AIzaSyDoPmF6hD9gEGHjSZC53a-4r5twBDDNymo",
    authDomain: "blog-f2e5d.firebaseapp.com",
    databaseURL: "https://blog-f2e5d.firebaseio.com",
    projectId: "blog-f2e5d",
    storageBucket: "blog-f2e5d.appspot.com",
    messagingSenderId: "55019400113",
    appId: "1:55019400113:web:2101e2d6cd0dca979e2b90",
    measurementId: "G-0JD180DQTP"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;