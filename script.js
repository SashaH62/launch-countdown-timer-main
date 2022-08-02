"use strict";

// Save all outputs to variable
const outputs = document.querySelectorAll(".number-output");

// Set countdown date
const countDownDate = new Date("September 5, 2022 00:00:00").getTime();

// Call back function | Calculate time remaining and push to array
const calcTime = (current, countdown) => {
  const timer = [];
  const remainder = countdown - current;
  timer.push(Math.floor(remainder / (1000 * 60 * 60 * 24)));
  timer.push(
    Math.floor((remainder % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  timer.push(Math.floor((remainder % (1000 * 60 * 60)) / (1000 * 60)));
  timer.push(Math.floor((remainder % (1000 * 60)) / 1000));
  return timer;
};

// HOF | Use for loop to update timer relative to array positon
const updateCountdown = (func) => {
  for (let i = 0; i < func.length; i++) {
    outputs[i].innerHTML = func[i];
  }
};

// Call functions every second to update countdown
const myFunc = setInterval(() => {
  let currentTime = new Date().getTime();
  updateCountdown(calcTime(currentTime, countDownDate));
}, 1000);
