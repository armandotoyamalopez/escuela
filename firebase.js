// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "toyama7-9dad0.firebaseapp.com",
  projectId: "toyama7-9dad0",
  storageBucket: "toyama7-9dad0.appspot.com",
  messagingSenderId: "1096815318077",
  appId: "1:1096815318077:web:789d9a1457323e7505c654",
  measurementId: "G-28RF2XGFJE"
};


// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };