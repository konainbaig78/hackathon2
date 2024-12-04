import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
//firestore
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyArRhizOZ_a05qbn5XuMgsCPZ7TxEUZIDk",
  authDomain: "hackathon2-f111f.firebaseapp.com",
  projectId: "hackathon2-f111f",
  storageBucket: "hackathon2-f111f.firebasestorage.app",
  messagingSenderId: "937733771216",
  appId: "1:937733771216:web:c662f944311ee838bcf3d5",
  measurementId: "G-JLVL3T06PK"
};

const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
};


//Document k and lgy ga jahan image load krni ha
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/ getFirestore/ /image/upload";
  const UPLOAD_PRESET = "post-fed";