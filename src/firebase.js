import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCnGVzE9JzHM-EQB9YThK57TnkLPuPPkgk",
    authDomain: "linkedin-clone-796db.firebaseapp.com",
    projectId: "linkedin-clone-796db",
    storageBucket: "linkedin-clone-796db.appspot.com",
    messagingSenderId: "1043023993785",
    appId: "1:1043023993785:web:72f9bec13ed8402838f468"
  };

  const firebaseApp = firebase.intializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};