import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

//import database, connecting to FIRESTORE
import { getFirestore } from "firebase/firestore";


// configuring to connect to our firebase project
const firebaseConfig = {
  apiKey: "AIzaSyA3M16JuWNWWy8t5pfKN86mg-LtgRWKh4g",
  authDomain: "gardensensortest.firebaseapp.com",
  databaseURL: "https://gardensensortest-default-rtdb.firebaseio.com",
  projectId: "gardensensortest",
  storageBucket: "gardensensortest.appspot.com",
  messagingSenderId: "778109626399",
  appId: "1:778109626399:web:063e3b94263b15538b4d2a",
  measurementId: "G-DYPDFXSFMH"
};


const app = initializeApp(firebaseConfig); // Initialize Firebase
export const auth = getAuth(app); //retrieving authentication state of app

export const db = getFirestore(app);

export default app; 