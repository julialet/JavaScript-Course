"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

// Display Message
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Change background color
const bgColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

// Display Score
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

// On click
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("No Number!");

    // When guess is right:
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");
    bgColor("#60b347");

    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    confetti({
      particleCount: 500,
      spread: 1000,
      origin: { y: 0.4 },
    });

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
      console.log(highscore);
    }

    // When guess is wrong:
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      displayScore(score);
    } else {
      displayMessage("You've lost the game!");
      displayScore(0);
    }
  }
});

// Again button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  bgColor("#222");
  displayMessage("Start guessing...");
  displayScore(score);
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
