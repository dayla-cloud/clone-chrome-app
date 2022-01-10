// Local Storage, the API name when you wanna remember user's inform
// Saving username

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  // greeting.innerHTML = "Hello " + username + "!";
  greeting.innerHTML = `Hello ${username}!`;
  console.log(username);
  console.dir(username, localStorage);
}

if (username !== "") {
  loginForm.classList.toggle(HIDDEN_CLASSNAME);
  greeting.classList.toggle(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
