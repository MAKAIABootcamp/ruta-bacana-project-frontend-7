// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNOmzpSzrTouuH1DK4tkae9FSJPAvQkY0",
  authDomain: "rutabacana.firebaseapp.com",
  projectId: "rutabacana",
  storageBucket: "rutabacana.appspot.com",
  messagingSenderId: "812745048258",
  appId: "1:812745048258:web:e36baa8615a4cffcdbbb5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);