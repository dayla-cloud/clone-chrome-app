const h1s = document.querySelectorAll('h1[class^="title"]');

function handleActive() {
  const colorChanged = "active";
  if (this.className !== colorChanged) {
    this.className = colorChanged;
  } else {
    this.className = "";
  }
  console.log(this.className);
}

for (h1 of h1s) {
  h1.addEventListener("mouseover", handleActive);
}

// raw string 을 사용하지 않도록 항상 변수 또는 함수선언을 하는 것이 좋다.
