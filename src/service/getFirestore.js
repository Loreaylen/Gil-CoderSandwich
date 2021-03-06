import firebase from "firebase/compat/app"
import 'firebase/compat/firestore'
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD35a3_dw3uxLJdtGMxb26KouTZ21MHAxY",
    authDomain: "codersandwich.firebaseapp.com",
    projectId: "codersandwich",
    storageBucket: "codersandwich.appspot.com",
    messagingSenderId: "957925908218",
    appId: "1:957925908218:web:91cba90c5f2358ea717343"
  };

  const app = firebase.initializeApp(firebaseConfig);

 export const auth = getAuth(app)

  export function getFirestore(){
      return firebase.firestore(app)
    }


