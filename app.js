const h1s = document.querySelectorAll('h1[class^="title"]');

function handleActive() {
  const colorChanged = "active";
  if (this.classList.contains(colorChanged)) {
    this.classList.remove(colorChanged);
  } else {
    this.classList.add(colorChanged);
  }
  console.log(this.className);
}

for (h1 of h1s) {
  h1.addEventListener("mouseover", handleActive);
}

// 프로퍼티로서의 className 은 클래스명을 통째로 바꾸었지만 classList 는
// 기존의 클래스명에 추가,삭제,토글 등의 기능을 한다.
// classList 의 methos 에 관하여
// https://developer.mozilla.org/ko/docs/Web/API/Element/classList
