/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const cardType = document.querySelectorAll(".card-type");
  const cardValue = document.querySelector("#cardValue");
  const button = document.querySelector("#cardGenerator");

  const cardValueList = [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    "J",
    "Q",
    "K",
    "A",
    "Joker"
  ];
  const cardTypeList = ["♦", "♥", "♠", "♣"];

  let cardGenerator = event => {
    let randomCardValue =
      cardValueList[Math.floor(Math.random() * cardValueList.length)];
    let randomCardType =
      cardTypeList[Math.floor(Math.random() * cardTypeList.length)];

    cardType[0].innerHTML = randomCardValue === "Joker" ? "J" : randomCardType;
    cardType[1].innerHTML = randomCardValue === "Joker" ? "J" : randomCardType;

    cardValue.innerHTML =
      randomCardValue === "Joker"
        ? "<img src='src/assets/img/istockphoto-538781960-612x612.jpeg' style='height: 150px;' />"
        : randomCardValue;

    const isRed = randomCardType === "♦" || randomCardType === "♥";
    cardType[0].classList.toggle("text-danger", isRed);
    cardType[1].classList.toggle("text-danger", isRed);
    cardValue.classList.toggle("text-danger", isRed);
    cardType[0].classList.toggle("text-black", !isRed);
    cardType[1].classList.toggle("text-black", !isRed);
    cardValue.classList.toggle("text-black", !isRed);
  };
  button.addEventListener("click", cardGenerator);
};
