// clock / interval ,

const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("hello");
}

// setInterval 은 두개의 인수를 받아. 첫번째는 내가 실행하고나 하는 것,
// 두번째는 호출되는 함수의 간격을 ms 로 표기.

setInterval(sayHello, 5000);
