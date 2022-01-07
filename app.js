// const title = document.querySelector("div[class='title']");

// function handleTitleClick() {
//   console.log("title was clicked");
// }

// title.addEventListener("click", handleTitleClick);

const titles = document.querySelector('h1[class^="title"]:nth-child(2)');

console.log(titles);
function handle() {
  console.log("clicked");
}

// titles[0].addEventListener("click", handle);

// for (title of titles) {
//   title.addEventListener("click", handle);
// }
