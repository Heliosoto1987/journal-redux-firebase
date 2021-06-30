import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAweO2JLGz3gg15ahF4x2VRKrPAoQkKY3g",
  authDomain: "react-app-cursos-31b44.firebaseapp.com",
  projectId: "react-app-cursos-31b44",
  storageBucket: "react-app-cursos-31b44.appspot.com",
  messagingSenderId: "443370021017",
  appId: "1:443370021017:web:d94e9d1963d5e18d871808",
  measurementId: "G-7TENB2Z5X1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
