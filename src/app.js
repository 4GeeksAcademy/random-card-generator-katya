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

    let styleTypeUp = cardType[0].classList;
    let styleTypeDown = cardType[1].classList;

    if (randomCardType === "♣" || randomCardType === "♠") {
      styleTypeUp.remove("text-danger");
      styleTypeDown.remove("text-danger");
      styleTypeUp.add("text-black");
      styleTypeDown.add("text-black");
    } else if (randomCardType === "♦" || randomCardType === "♥") {
      styleTypeUp.remove("text-black");
      styleTypeDown.remove("text-black");
      styleTypeUp.add("text-danger");
      styleTypeDown.add("text-danger");
    }
  };
  button.addEventListener("click", cardGenerator);
};
