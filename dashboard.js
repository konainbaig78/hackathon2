  document.addEventListener("DOMContentLoaded",()=>{

const loginReg=document.getElementById("login-reg")
loginReg.addEventListener("click",()=>{
  window.location.href="index.html"
})


const createPost=document.getElementById("hiring")
createPost.addEventListener("click",()=>{
  window.location.href="post.html"
})

//search input
// searchInput.addEventListener("input", (event) => {
//   const searchTerm = event.target.value.toLowerCase();
//   const filteredPosts = blogPosts.filter((post) =>
//     post.title.toLowerCase().includes(searchTerm)
//   );
//   renderBlogPosts(filteredPosts); // Render only the filtered posts
// });

const feedContainer = document.getElementById('feed-container');
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

  post.innerHTML = `
    <div class="post-header">
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

  })

// //Select DOM elements
// const blogContainer = document.getElementById("blog-container");
// const blogForm = document.getElementById("blog-form");
// const titleInput = document.getElementById("title");
// const contentInput = document.getElementById("content");
// const searchInput = document.getElementById("search-input");

// // Array to store blog posts
// const blogPosts = [];

// // Function to render blog posts
// function renderBlogPosts(posts) {
//   blogContainer.innerHTML = ""; // Clear current posts
//   posts.forEach((post) => {
//     const blogPost = document.createElement("div");
//     blogPost.classList.add("blog-post");
//     blogPost.innerHTML = `
//       <h2>${post.title}</h2>
//       <p>${post.content}</p>
//       <button class="delete-btn">Delete</button>
//     `;

//     // Add delete functionality
//     const deleteBtn = blogPost.querySelector(".delete-btn");
//     deleteBtn.addEventListener("click", () => {
//       const index = blogPosts.indexOf(post);
//       if (index > -1) {
//         blogPosts.splice(index, 1); // Remove from the array
//         renderBlogPosts(blogPosts); // Re-render posts
//       }
//     });

//     // Append the post to the container
//     blogContainer.appendChild(blogPost);
//   });
// }

// // Event listener for form submission
// blogForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   // Get title and content from inputs
//   const title = titleInput.value.trim();
//   const content = contentInput.value.trim();

//   if (!title || !content) {
//     alert("Please fill out all fields!");
//     return;
//   }

//   // Add the new post to the array
//   const newPost = { title, content };
//   blogPosts.push(newPost);

//   // Re-render the blog posts
//   renderBlogPosts(blogPosts);

//   // Clear form inputs
//   titleInput.value = "";
//   contentInput.value = "";
// });


