// const h1 = document.querySelector("div[class='h1']");

// function handleh1Click() {
//   console.log("h1 was clicked");
// }

// h1.addEventListener("click", handleh1Click);

const h1s = document.querySelectorAll('h1[class^="title"]');

console.log(h1s);
// function handleColor() {
//   this.style.color = "blue";
// }

function handleMouse() {
  this.innerText = "mouse is here";
  this.style.color = "blue";
}

function handleMouseLeave() {
  this.innerText = "mouse is gone";
  this.style.color = "black";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleCopy() {
  alert("thanks");
}

function handleOffline() {
  alert("no wifi");
}

for (h1 of h1s) {
  // h1.onclick = handleColor;
  h1.onmouseenter = handleMouse;
  h1.addEventListener("mouseleave", handleMouseLeave);
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleCopy);
window.addEventListener("offline", handleOffline);
