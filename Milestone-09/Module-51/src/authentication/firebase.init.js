// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALYGoaEUt16nHmh6iTTPgA9huOtlYJMs4",
  authDomain: "auth-moha-millo.firebaseapp.com",
  projectId: "auth-moha-millo",
  storageBucket: "auth-moha-millo.firebasestorage.app",
  messagingSenderId: "431387107281",
  appId: "1:431387107281:web:4cb11f4fb743d2037c4af0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);