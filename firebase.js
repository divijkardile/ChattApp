import firebase from 'firebase';
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { useCollectionData } from 'react-firebase-hooks/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBAD--gsagiqdv26S_kPp7BJDurqNI6WOY",
    authDomain: "fir-con-5932e.firebaseapp.com",
    databaseURL: "https://fir-con-5932e.firebaseio.com",
    projectId: "fir-con-5932e",
    storageBucket: "fir-con-5932e.appspot.com",
    messagingSenderId: "385501736986",
    appId: "1:385501736986:web:f414d698b0a8bf6619e1a3",
    measurementId: "G-LQ9PDK4END"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const firestore = firebaseApp.firestore();

  const auth = firebase.auth();

  export {firebase, firestore, auth };