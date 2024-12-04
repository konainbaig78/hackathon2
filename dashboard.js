import { getFirestore, collection, getDocs } from "./firebase.js";

const db = getFirestore();
const feedContainer = document.getElementById("feed-container");
const searchInput = document.getElementById("searchIN");

let posts = [];

const renderPost = (post) => {
  const postElement = document.createElement("div");
  postElement.classList.add("post");

  postElement.innerHTML = `
    <div class="post-header">
      <img src="https://via.placeholder.com/50" alt="User Avatar" class="avatar">
      <h2 class="username">${post.title || "Untitled"}</h2>
      <span class="timestamp">${new Date(post.timestamp?.seconds * 1000).toLocaleString()}</span>
    </div>
    <p class="post-content">${post.content}</p>
    <p>By ${post.username || "Anonymous"}</p>
    <p style="color: #6a11cb;">${post.readTime || "3"} min read</p>
  `;
  feedContainer.appendChild(postElement);
};

const loadPosts = async () => {
  const snapshot = await getDocs(collection(db, "posts"));
  posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  renderFilteredPosts(posts);
};

const renderFilteredPosts = (filteredPosts) => {
  feedContainer.innerHTML="";
  filteredPosts.forEach((post) => renderPost(post));
};

searchInput.addEventListener("input", (event) => {
  const searchTerm = event.target.value.toLowerCase();
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm) ||
      post.content.toLowerCase().includes(searchTerm)
  );
  renderFilteredPosts(filteredPosts);
});

loadPosts();

const loginReg=document.getElementById("login-reg")
loginReg.addEventListener("click",()=>{
  window.location.href="dashboard.html"
})


const createPost=document.getElementById("hiring")
createPost.addEventListener("click",()=>{
  window.location.href="post.html"
})


const postButton = document.getElementById('post-button');
const postContentInput = document.getElementById('post-content');
const type=document.getElementById("type")

// Add New Post
postButton.addEventListener('click', () => {
  const postContent = postContentInput.value.trim();
  const cat=type.value.trim()

  if (postContent === '' ) {
    alert('Post content and type cannot be empty!');
    return;
  }

  // Create a new post element
  const post = document.createElement('div');
  post.classList.add('post');

  post.innerHTML = 
  `  <div class="post-header">
      <img src="https://via.placeholder.com/50" alt="User Avatar" class="avatar">
      <h2 class="username">You</h2>
      <span class="timestamp">Just now</span>
    </div>
    <p class="post-content">${postContent}</p>
    <p>${cat}</p>

      <p>By you</p>
           <p style="color: #6a11cb;">4 min read</p>
  `;

  // Append the new post to the feed container
  feedContainer.prepend(post);

  
  // Clear the textarea
  postContentInput.value = '';
});

  