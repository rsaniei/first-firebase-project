// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqatzb4_HjpiqOsxstrM91i3Uvz9SWSn8",
  authDomain: "todolistapp-8b603.firebaseapp.com",
  projectId: "todolistapp-8b603",
  storageBucket: "todolistapp-8b603.appspot.com",
  messagingSenderId: "771309818890",
  appId: "1:771309818890:web:497a6b2863a452438b3bf3",
  measurementId: "G-BKJYNQPEQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
