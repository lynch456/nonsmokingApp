const today = document.querySelector("#today span");
const timer = document.getElementById("timer");

const day = document.getElementById("day");
const hour = document.getElementById("hour");
const min = document.getElementById("min");
const second = document.getElementById("sec");

const btnToggle = document.getElementById("btn");

let currentDate = new Date();
let nowDays = currentDate.getFullYear();
let nowMonth = currentDate.getMonth() + 1;
let nowDate = currentDate.getDate();
let currentDays = currentDate.getDay();

today.innerHTML = `${nowDays}년 ${nowMonth}월 ${nowDate}일 `;

btnToggle.innerHTML = "금연시작";

let toggle = "start";

let currentSecond = 0;
let currentMin = 0;
let currentHour = 0;
let currentDay = 0;
let timerId;
function operateTimer() {
  currentSecond++;
  second.textContent =
    currentSecond > 9 ? currentSecond + "초" : "0" + currentSecond + "초";
  if (currentSecond > 59) {
    currentMin++;
    min.textContent =
      currentMin > 9 ? currentMin + "분" : "0" + currentMin + "분";
    currentSecond = 0;
    second.textContent = "00초";
  } else if (currentMin > 59) {
    currentHour++;
    hour.textContent =
      currentHour > 9 ? currentHour + "시" : "0" + currentHour + "시";
    currentMin = 0;
    min.textContent = "00시간";
  } else if (currentHour >= 24 && currentHour % 24 === 0) {
    currentDay += 1;
    day.textContent =
      currentDay > 9 ? currentDay + "일" : "0" + currentDay + "일";
    currentHour = 0;
    hour.textContent = "00시간";
  }
}

btnToggle.addEventListener("click", function () {
  if (toggle == "start") {
    timerId = setInterval(operateTimer, 1);
    btnToggle.innerHTML = "금연중단";
    toggle = "end";
  } else {
    btnToggle.innerHTML = "금연시작";
    toggle = "start";
    clearInterval(timerId);
    currentSecond = 0;
    currentMin = 0;
    currentHour = 0;
    currentDay = 0;
    sec.textContent = "00초";
    min.textContent = "00분";
    hour.textContent = "00시간";
    day.textContent = "00일";
  }
});
