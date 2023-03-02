// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGx6bx7_k5uQ_trSiFDvUcsm1-QeB7ucw",
  authDomain: "todo-4de4c.firebaseapp.com",
  projectId: "todo-4de4c",
  storageBucket: "todo-4de4c.appspot.com",
  messagingSenderId: "290964935800",
  appId: "1:290964935800:web:4519a0d13e32100161498d",
  measurementId: "G-P485C4KYZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)