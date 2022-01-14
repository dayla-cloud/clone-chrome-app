const body = document.querySelector("body");
const h1 = document.createElement("h1");
const colors = ["#7E6787", "#203013", "#F29991"];

body.prepend(h1);
h1.innerText = "the color is";
h1.style.color = "white";

body.style.backgroundColor = colors[0];

function colorChanges() {
  const width = window.innerWidth;
  if (width < 300 || (width > 500 && width <= 600)) {
    body.style.backgroundColor = colors[0];
    h1.innerText = "purple";
  } else if (width < 500) {
    body.style.backgroundColor = colors[1];
    h1.innerText = "green";
  } else if (width > 600) {
    body.style.backgroundColor = colors[2];
    h1.innerText = "pink";
  }
}

window.addEventListener("resize", colorChanges);
