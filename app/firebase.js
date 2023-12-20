// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF8-fQl5ForsCDmsmcZJ7NIvfP0BxOIZE",
  authDomain: "soupdejourtommy-ba24e.firebaseapp.com",
  projectId: "soupdejourtommy-ba24e",
  storageBucket: "soupdejourtommy-ba24e.appspot.com",
  messagingSenderId: "880724282692",
  appId: "1:880724282692:web:71e1cc9f07dc8f90b21b11",
  measurementId: "G-YSN6SG0RZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const db = getFirestore(app);