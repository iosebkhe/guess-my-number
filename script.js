"use strict";

//////////Implementing game logic
//Define random number outside of the event
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//State variables
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};

const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

const backgroundColor = function (backColor) {
  document.querySelector("body").style.backgroundColor = backColor;
};

const snBoxWidth = function (width) {
  document.querySelector(".number").style.width = width;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //when there is no input
  if (!guess) {
    displayMessage("⛔ No number!");

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");

    displayNumber(secretNumber);

    backgroundColor("#60b347");
    snBoxWidth("30rem");

    //////////Implementing Highscores
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "🛸 Too high!" : "⚓ Too low!");
      score--;
      displayScore(score);
    } else {
      displayMessage("💥 You lost the game!");
      displayScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  displayScore(score);
  displayNumber("?");
  document.querySelector(".guess").value = "";
  backgroundColor("#222");
  snBoxWidth("15rem");
});
