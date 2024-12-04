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
  signOut
};




document.addEventListener("DOMContentLoaded", () => {
  const feedContainer = document.getElementById("feed-container");
  const postButton = document.getElementById("post-button");
  const postContentInput = document.getElementById("post-content");
  const postImageInput = document.getElementById("post-image");

  const renderPost = (post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    postElement.innerHTML = `
      <div class="post-header">
        <img src="https://via.placeholder.com/50" alt="User Avatar" class="avatar">
        <h2 class="username">${post.username || "Anonymous"}</h2>
        <span class="timestamp">${new Date(post.timestamp?.seconds * 1000).toLocaleString()}</span>
      </div>
      <p class="post-content">${post.content}</p>
     
     
    `;

    feedContainer.prepend(postElement);
  };

  // Real-time listener for Firestore updates
  onSnapshot(collection(db, "posts"), (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
        renderPost(change.doc.data());
      }
    });
  });


    // Add post to Firestore with both image URL and text content
    postButton.addEventListener("click", async () => {
      const postContent = postContentInput.value.trim();
     
  
      if (!postContent) {
        alert("Post content cannot be empty!");
        return;
      }
    try {
      await addDoc(collection(db, "posts"), {
        content: postContent,
  
        username: "You", // Replace with actual username if available
        timestamp: serverTimestamp(),
      });

      // Clear input fields
      postContentInput.value = "";
     
    } catch (error) {
      console.error("Error adding post to Firestore:", error);
      alert("Failed to create post. Please try again.");
    }
  })
});


