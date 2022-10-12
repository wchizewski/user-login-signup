// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById("sign-in-btn");
let signUpBtn = document.getElementById("sign-up-btn");

// SIGN UP BTN CLICKED
signUpBtn.addEventListener("click", signUpHandler);

let users = JSON.parse(localStorage.getItem("users")) ?? [];

function signUpHandler() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let passwordConfirm = document.getElementById("passwordConfirm").value;
  let moveOn = true;
  if (username === "" || password === "" || passwordConfirm === "") {
    alert("All fields are mandatory");
    moveOn = false;
  }
  if (username !== "" && password !== "" && passwordConfirm !== "") {
    for (let i = 0; i < users.length; i++) {
      if (username === users[i].username) {
        moveOn = false;
        alert("Username already in use");
        break;
      }
    }
  }
  if (moveOn === true) {
    if (passwordConfirm === password) {
      users.push(newUser(username, password));
      saveUsers();
      alert("Sign up successful!");
    }
  }
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener("click", signInHandler);

function signInHandler() {
  let moveOn = true;
  let usernameIn = document.getElementById("usernameIn").value;
  let passwordIn = document.getElementById("passwordIn").value;
  if (usernameIn === "" || passwordIn === "") {
    alert("All fields are mandatory");
    moveOn = false;
  }
  if (moveOn === true) {
    for (let i = 0; i < users.length; i++) {
      if (
        usernameIn !== users[i].username ||
        passwordIn !== users[i].username
      ) {
        console.log(users[i].username);
        moveOn = false;
        alert("Incorrect password or username");
        break;
      } else if (
        usernameIn === users[i].username &&
        passwordIn === users[i].password
      ) {
        console.log(users[i].username);
        saveUsers();
        alert("Sign in successful!");
        break;
      }
    }
  }
}

// helper
function newUser(username, password) {
  return {
    username: username,
    password: password,
  };
}

function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}
