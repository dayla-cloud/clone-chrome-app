const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  // greeting.innerHTML = "Hello " + username + "!";
  greeting.innerHTML = `Hello ${username}!`;
  console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);
