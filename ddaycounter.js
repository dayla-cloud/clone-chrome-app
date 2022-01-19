const clockTitle = document.querySelector(".js-clock");
const christmas = new Date("Dec 25, 2022 00:00:00");

// 1일 = 24시간, 1시간 = 60분, 1분 = 60초, 1초 = 1000밀리세컨드
// 남은시간

// 오답노트 1 : 시간이 갱신되지 않음
const sec = 1000;
const min = sec * 60;
const hour = min * 60;
const day = hour * 24;

function counter() {
  const now = new Date();
  const diff = christmas.getTime() - now.getTime();

  const days = Math.floor(diff / day);
  const hours = String(Math.floor((diff % day) / hour)).padStart(2, "0");
  const mins = String(Math.floor(((diff % day) % hour) / min)).padStart(2, "0");
  const secs = String(Math.floor((((diff % day) % hour) % min) / sec)).padStart(
    2,
    "0"
  );
  clockTitle.innerText = `${days}d ${hours}h ${mins}m ${secs}s`;
  if (diff === 0) {
    clockTitle.innerText = "Merry Christmas!!!!";
    clockTitle.style.color = "Red";
  }
  if (secs === "00") {
    clockTitle.style.color = "green";
  } else {
    clockTitle.style.color = "black";
  }
}

counter();
setInterval(counter, 1000);
