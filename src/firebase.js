import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAcldBWV5vpSiyzfYpUqP17S1TKTBQ8DtY",
    authDomain: "instagram-clone-b9526.firebaseapp.com",
    databaseURL: "https://instagram-clone-b9526.firebaseio.com",
    projectId: "instagram-clone-b9526",
    storageBucket: "instagram-clone-b9526.appspot.com",
    messagingSenderId: "53066678458",
    appId: "1:53066678458:web:3c6701da27618a7e428283",
    measurementId: "G-X1S61VJMT2"
  };

  firebase.initializeApp(firebaseConfig);