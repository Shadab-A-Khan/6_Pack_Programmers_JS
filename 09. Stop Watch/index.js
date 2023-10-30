const start = document.querySelector(".start");
const stop = document.querySelector(".end");
const timeElement = document.querySelector(".time");
let second = 0;
let minute = 0;
let hour = 0;
let intervalId;
const startStopWatch = () => {
  
  intervalId = setInterval(() => {
    second++;
    const time =`${String(hour).padStart(2,"0")}:
                 ${String(minute).padStart(2,"0")}:
                 ${String(second).padStart(2,"0")}`;

    timeElement.innerText = time;

    if(second == 60){
      second = 0;
      minute += 1;
      if(minute == 60) {
        minute = 0;
        hour += 1;
      }
    }

  }, 1000);
};

const stopStopWatch = () => {
  clearInterval(intervalId);
};
