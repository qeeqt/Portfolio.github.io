// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
function StartFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyBGqANhNl0lHcoFow0X5Y6CHBfQZ9gyJYw",
    authDomain: "base-b1494.firebaseapp.com",
    databaseURL: "https://base-b1494-default-rtdb.firebaseio.com",
    projectId: "base-b1494",
    storageBucket: "base-b1494.appspot.com",
    messagingSenderId: "1074388766466",
    appId: "1:1074388766466:web:082d0b1b71959fc649bc1b",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}
export default StartFirebase;
