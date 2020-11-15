import firebase from 'firebase';
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { useCollectionData } from 'react-firebase-hooks/firestore'


const firebaseConfig = {
    //paste your config file here...
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const firestore = firebaseApp.firestore();

  const auth = firebase.auth();

  export {firebase, firestore, auth };
