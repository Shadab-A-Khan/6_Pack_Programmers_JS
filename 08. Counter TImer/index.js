const dayElement = document.querySelector(".day");
const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");
const container = document.querySelector(".container");
const countTimer = document.querySelector(".countTimer");
const heading = document.getElementById("heading");

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const timeFuntion = () => {
  const now = new Date();
  let dd = String(now.getDate()).padStart(2, "0");
  let mm = String(now.getMonth() + 1).padStart(2, "0");
  let yyyy = now.getFullYear();

  const enterDay = prompt("Enter Day").padStart(2, "0");
  while (enterDay > 31 || enterDay <= 0) {
    enterDay = prompt("Enter Day").padStart(2, "0");
  }
  const enterMonth = prompt("Enter Month").padStart(2, "0");
  while (enterMonth < 0 || enterMonth > 12) {
    enterMonth = prompt("Enter Month").padStart(2, "0");
  }
  const targetDate1 = `${enterMonth}/${enterDay}/${yyyy}`;

  const interval = setInterval(() => {
    let targetDate = new Date(targetDate1).getTime();
    let currentDate = new Date().getTime();
    let diffence = targetDate - currentDate;

    if (diffence <= 0) {
      clearInterval(interval);
      countTimer.remove();
      heading.remove();
      const div = document.createElement("div");
      div.setAttribute("class", "timesUp");
      div.innerText = "Time's Up";
      container.append(div);
      return;
    }
    let dayLeft = Math.floor(diffence / day);
    let hourLeft = Math.floor((diffence % day) / hour);
    let minuteLeft = Math.floor((diffence % hour) / minute);
    let secondLeft = Math.floor((diffence % minute) / second);

    dayElement.innerText = dayLeft;
    hourElement.innerText = hourLeft;
    minuteElement.innerText = minuteLeft;
    secondElement.innerText = secondLeft;
  }, 0);
};
timeFuntion();
