// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp-6mSPldi_w5gdZTOWlrDQKh2EVFdcYU",
  authDomain: "login-project-374ce.firebaseapp.com",
  projectId: "login-project-374ce",
  storageBucket: "login-project-374ce.firebasestorage.app",
  messagingSenderId: "857195741749",
  appId: "1:857195741749:web:7e129005785714fb83277c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);