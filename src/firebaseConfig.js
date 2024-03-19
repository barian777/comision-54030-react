// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcoktnwDHXyDieXdnpKny5rgBvg3qBRik",
  authDomain: "react-cmsn-5430.firebaseapp.com",
  projectId: "react-cmsn-5430",
  storageBucket: "react-cmsn-5430.appspot.com",
  messagingSenderId: "656327904132",
  appId: "1:656327904132:web:8816e378711a3bd9c2abd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app)