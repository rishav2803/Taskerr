import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDWlKcuxKzkDeXSKFOVJbEUGZTmDX9XXpo",
  authDomain: "taskerr-82bdd.firebaseapp.com",
  projectId: "taskerr-82bdd",
  storageBucket: "taskerr-82bdd.appspot.com",
  messagingSenderId: "754544335000",
  appId: "1:754544335000:web:142c56013e71793ced58ed",
  measurementId: "G-M1RRRT91C5",
});

export const auth = app.auth();
export const firestore = app.firestore();

export default app;
