// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById("sign-in-btn");
let signUpBtn = document.getElementById("sign-up-btn");

// SIGN UP BTN CLICKED
signUpBtn.addEventListener("click", signUpHandler);

let users = loadUsers();

function signUpHandler() {
  let username = document.getElementById("password").value;
  let password = document.getElementById("password").value;
  let passwordConfirm = document.getElementById("passwordConfirm").value;
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener("click", signInHandler);

function signInHandler() {
  console.log("Sign In Btn Clicked");
}

// helper
function newUser(username, password) {
  return {
    username: username,
    password: password,
  };
}

function loadUsers() {
  let usersStr = localStorage.getItem("users");
  return JSON.parse(usersStr) ?? [];
}

function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}
