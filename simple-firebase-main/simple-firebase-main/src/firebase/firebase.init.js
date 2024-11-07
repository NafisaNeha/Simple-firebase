// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// DANGER: DO not share config publicly 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOrZPO7XcUz2SZBv34QvteC72CRJtCZvg",
  authDomain: "simple-firebase2-ffa38.firebaseapp.com",
  projectId: "simple-firebase2-ffa38",
  storageBucket: "simple-firebase2-ffa38.firebasestorage.app",
  messagingSenderId: "116655607079",
  appId: "1:116655607079:web:a84d0793667a4f10d0ed02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
