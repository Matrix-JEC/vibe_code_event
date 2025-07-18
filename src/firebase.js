// src/firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMR0pheSA9p0562tPo6lm2AhormlHbiSk",
  authDomain: "vibe-coding-31d71.firebaseapp.com",
  projectId: "vibe-coding-31d71",
  storageBucket: "vibe-coding-31d71.firebasestorage.app",
  messagingSenderId: "54506788879",
  appId: "1:54506788879:web:51fc966e6eef44bbe22b7a",
  measurementId: "G-MH4N1YHEYQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };