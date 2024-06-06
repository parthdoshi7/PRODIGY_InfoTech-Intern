const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const timer = document.querySelector(".timer");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const milliseconds = document.getElementById("milliseconds");
const lapsList = document.getElementById("laps");
let intervalId;
let time = 0;

startBtn.addEventListener("click", () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      time++;
      updateTimer();
    }, 10);
  }
});

pauseBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  time = 0;
  updateTimer();
  lapsList.innerHTML = "";
});

function updateTimer() {
  const hrs = Math.floor(time / 3600000);
  const mins = Math.floor((time % 3600000) / 60000);
  const secs = Math.floor((time % 60000) / 1000);
  const ms = time % 1000;

  hours.textContent = hrs.toString().padStart(2, "0");
  minutes.textContent = mins.toString().padStart(2, "0");
  seconds.textContent = secs.toString().padStart(2, "0");
  milliseconds.textContent = ms.toString().padStart(3, "0");
}

const lapBtn = document.createElement("button");
lapBtn.textContent = "Lap";
lapBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = `${hours.textContent}:${minutes.textContent}:${seconds.textContent}:${milliseconds.textContent}`;
  lapsList.appendChild(li);
});
document.body.appendChild(lapBtn);