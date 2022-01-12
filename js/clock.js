// clock / 4.2 PadStart

const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

// setInterval : call every seconds I set.
// padStart, padEnd : add strings in string. string.padStart(numOfStrings, "stringsIwant")
// String(code), make code to String
// Reason call getClock() before setInterval() , is setInterval calls it after the seconds I set,
//so before it, we should call function one time.
