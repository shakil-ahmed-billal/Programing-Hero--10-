// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlGiEYS1-mEnCuCrXRmJC7Aha0QTwa3HI",
  authDomain: "simple-firebase-4567.firebaseapp.com",
  projectId: "simple-firebase-4567",
  storageBucket: "simple-firebase-4567.firebasestorage.app",
  messagingSenderId: "40402483470",
  appId: "1:40402483470:web:dc0867da4dc1e3ade1bf5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
