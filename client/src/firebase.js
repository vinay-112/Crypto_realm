





// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: "AIzaSyAwYzADwsr5U0YDuuyk7Its0IapSupSx5Y",
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY
  authDomain: "algotrading-f83ea.firebaseapp.com",
  projectId: "algotrading-f83ea",
  storageBucket: "algotrading-f83ea.appspot.com",
  messagingSenderId: "231742756118",
  appId: "1:231742756118:web:e8178fa2a86888be8e2c37",
  // measurementId: "G-SXHZ6EHEF7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


