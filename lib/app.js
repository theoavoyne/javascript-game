const squares = document.querySelectorAll(".squares");
let column = 1;
let row = 1;
let time = 30;
let one;
let two;

document.addEventListener("DOMContentLoaded", () => {
  one = setInterval(refresh, 800); // Every 1 second, the `refresh` function is called.
  two = setInterval(timeclock, 1000);
});

squares.forEach((element) => {
  element.classList.add("non-active")
});

squares.forEach((element) => {
  element.style.gridColumn = column;
  element.style.gridRow = row;
  if (column === 10) {
    column = 1;
    row += 1;
  } else {
    column += 1;
  }
})

let number = 30;
let score = 0;
let currentsquare = document.getElementById(number);
document.getElementById("score").innerText = "Score : 0"

function clickable() {
  score += 1;
  document.getElementById("score").innerText = `Score : ${score}`;
  currentsquare.removeEventListener("click", clickable)
}

const refresh = () => {
  currentsquare.removeEventListener("click", clickable);
  squares[(number - 1)].classList.remove("active");
  number = Math.floor(Math.random() * 60) + 1;
  squares[(number - 1)].classList.add("active");
  currentsquare = document.getElementById(number);
  currentsquare.addEventListener("click", clickable)
}

const timeclock = () => {
  if (time === 1) {
    document.getElementById("time").innerText = `GAME OVER`;
    clearInterval(one);
    clearInterval(two);
  } else {
    time -= 1;
    document.getElementById("time").innerText = `Time : ${time}`;
  }
}

refresh();
timeclock();






















































