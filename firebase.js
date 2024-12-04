import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

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
const db = getFirestore(app);

export {  getFirestore,db, collection, addDoc, getDocs, serverTimestamp,getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword };
