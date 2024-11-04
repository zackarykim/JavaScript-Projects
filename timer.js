let seconds = 0;
let minutes = 0;
let hours = 0;

function timer() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  let secondsStr = seconds < 10 ? "0" + seconds : seconds;
  let minutesStr = minutes < 10 ? "0" + minutes : minutes;
  let hoursStr = hours < 10 ? "0" + hours : hours;

  console.log(`${hoursStr}:${minutesStr}:${secondsStr}`);
}

setInterval(timer, 1000);