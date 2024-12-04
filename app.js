import { getAuth, createUserWithEmailAndPassword } from "./firebase.js";

const auth = getAuth();

const emailInput = document.getElementById("signup-email");
const passwordInput = document.getElementById("signup-password");
const signUpBtn = document.getElementById("signup");
const displayNameInput = document.getElementById("signup-display-name");

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const displayName = displayNameInput.value.trim();

  if (!email || !password || !displayName) {
    Swal.fire("Please fill in all fields!");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
     
    })
    .then(() => {
      Swal.fire(`Welcome, ${displayName}!`);
      emailInput.value = "";
      passwordInput.value = "";
      displayNameInput.value = "";
      window.location.href = "dashboard.html";
    })
    .catch((error) => Swal.fire({ icon: "error", text: error.message }));
});
