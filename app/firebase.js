// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEH8kaucpP5qVGwq2Lgyx29G4z_jeTMgE",
  authDomain: "soupdejourtommy-9b54f.firebaseapp.com",
  projectId: "soupdejourtommy-9b54f",
  storageBucket: "soupdejourtommy-9b54f.appspot.com",
  messagingSenderId: "349368255955",
  appId: "1:349368255955:web:27cd5f4d28ca9a2d7a1b26",
  measurementId: "G-MMX5FFWESY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const db = getFirestore(app);