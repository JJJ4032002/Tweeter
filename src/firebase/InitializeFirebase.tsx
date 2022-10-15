// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRkXhzMWbrCgTCO3Pezx9vihQmpNJ6aLU",
  authDomain: "twitterclone-bcce4.firebaseapp.com",
  projectId: "twitterclone-bcce4",
  storageBucket: "twitterclone-bcce4.appspot.com",
  messagingSenderId: "496551030857",
  appId: "1:496551030857:web:8aa2a2f8b6cb867ecfcf98",
  measurementId: "G-5VR9BYDM51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { app, db, storage };
