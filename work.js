const h1 = document.getElementById("h1");
const time = new Date();
const input = document.querySelector("#form input");

let month = time.getMonth();
let date = time.getDate();
let hours = time.getHours();
let minutes = time.getMinutes();

h1.innerText = `${month}월 ${date}일\n 현재시각 ${hours}시${minutes}분`;

console.log(input.value);
