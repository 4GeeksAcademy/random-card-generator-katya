/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let button = document.querySelector("#cardGenerator");
  let cardValueList = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let cardTypeList = ["♦", "♥", "♠", "♣"];

  let randomCardValue =
    cardValueList[Math.floor(Math.random() * cardValueList.length)];
  let randomCardType =
    cardTypeList[Math.floor(Math.random() * cardTypeList.length)];

  let cardGenerator = event => {
    let cardType = document.querySelectorAll(".card-type");
    let cardValue = document.querySelector("#cardValue");
    let styleTypeUp = cardType[0].classList;
    let styleTypeDown = cardType[1].classList;

    cardType[0].innerHTML = randomCardType;
    cardType[1].innerHTML = randomCardType;
    cardValue.innerHTML = randomCardValue;

    if (randomCardType === "♣" || randomCardType === "♠") {
      styleTypeUp.remove("text-danger");
      styleTypeDown.remove("text-danger");
    }
  };
  button.addEventListener("click", cardGenerator);
};
