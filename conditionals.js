// prompt
//더이상 사용되지 않는 이유; 그 다음 js (콘솔.로그)를 중지시키기 때문

// const age = prompt("How old are you?");
// console.log(age, typeof age); //number X , string O
//parseInt 스트링을 숫자로 변환하는 기본함수
// console.log(parseInt(age), typeof parseInt(age));

// isNaN
// 숫자인지 아닌지 판단하는 기본함수
const age = parseInt(prompt("how old are you?"));

console.log(isNaN(age));
if (isNaN(age) === true || age < 0) {
  alert("Please write your real age in positive number");
  history.go(0);
} else if (age < 18) {
  console.log("Sorry, You are too young to drink alcohol.");
} else if (age >= 18 && age <= 50) {
  //  && (and)는 양쪽 모두 true 여야하고, || (or)는 양쪽 어느 한 쪽이 true

  console.log("Enjoy your drinking alcohol");
} else if (age > 50 && age <= 80) {
  console.log("We don't recommend you drink alcohol");
} else if (age === 100) {
  console.log("wow you are wise");
} else if (age > 80) {
  console.log("You can do whatever you want");
}
// = : value 할당
// === : 온전히 그 값일 때
// !== : not
