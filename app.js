const title = document.querySelectorAll("h1[class^='title']");

console.log(title);
for (let i = 0; i <= title.length; i++) {
  title[i].style.color = "blue";
}
