// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-mibyhQQcOJf0dIVXoLXUxnRu1cWCeZE",
  authDomain: "iteartion-5.firebaseapp.com",
  projectId: "iteartion-5",
  storageBucket: "iteartion-5.firebasestorage.app",
  messagingSenderId: "365509268009",
  appId: "1:365509268009:web:862d272809e634a6d24238",
  measurementId: "G-B02T06089E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);