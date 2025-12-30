const title = document.querySelector(".title");
const step1 = document.querySelector("#step1");
const step2 = document.querySelector("#step2");
const step3 = document.querySelector("#step3");
const step4 = document.querySelector("#step4");
const time = document.querySelector("#time");

let cooking, cooked;

let popping = new Audio("sounds/pop.mp3");
let neymarSound = new Audio("sounds/neymar.mp3");

function setStep(n) {
  for (let i = 1; i <= 4; i++) {
    document.getElementById("step" + i).style.display =
      i != n ? "none" : "flex";
  }
}

function start() {
  popping.play();
  setStep(2);
}

function cook(min) {
  popping.play();
  setStep(3);
  let sec = min * 60 - 1;
  time.innerHTML = String(min).padStart(2, "0") + ":00";
  cooking = setInterval(() => {
    if (sec < 0) {
      new Audio("sounds/end2.mp3").play();
      end();
    } else {
      let fullTime = convertTime(sec);
      fullTime = fullTime.map((n) => String(n).padStart(2, "0"));
      time.innerHTML = fullTime[0] + ":" + fullTime[1];
      sec--;
    }
  }, 1000);
}

function end() {
  cooked = setInterval(() => {
    new Audio("sounds/end2.mp3").play();
  }, 2500);
  clearInterval(cooking);
  setStep(4);
}

function snooze() {
  popping.play();
  clearInterval(cooked);
  cook(1);
  return 0;
}

function MYclose() {
  popping.play();
  clearInterval(cooked);
  setStep(1);
}

function convertTime(sec) {
  let a = parseInt(sec / 60);
  return [a, sec - 60 * a];
}

function neymar() {
  popping.play();
  alert("Usa o trem direito sua gorda!");
  neymarSound.play();
}
