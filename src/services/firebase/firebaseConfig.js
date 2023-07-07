// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbCdQwn1nOx7JGShF9uNiiuLfyekrJbtg",
  authDomain: "jewelryshop-9acbf.firebaseapp.com",
  projectId: "jewelryshop-9acbf",
  storageBucket: "jewelryshop-9acbf.appspot.com",
  messagingSenderId: "632325975681",
  appId: "1:632325975681:web:47b7e9ad7d8ea98b97e780",
  measurementId: "G-MTDEQH8YVW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
