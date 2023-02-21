/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  setRandomCard();
  const button = document.getElementById("generateANewCard");
  button.addEventListener("click", generateANewCardOneMoreTime);

  const button2 = document.getElementById("changeStyle");
  button2.addEventListener("click", changeStyles);

  setTimeout(() => {
    generateANewCardOneMoreTime();
  }, 10000);
};

const numbersOfCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const suitsOfCards = ["diamonds", "hearts", "spades", "clubs"];

const generateRandomNumber = array => {
  return Math.floor(Math.random() * array.length);
};

const generateRandomNumberOfCard = () => {
  return generateRandomNumber(numbersOfCards);
};

const generateRandomSuit = () => {
  return generateRandomNumber(suitsOfCards);
};

const getValueOfNumber = array => {
  return array[generateRandomNumberOfCard()];
};

const getValueOfSuit = array => {
  return array[generateRandomSuit()];
};

const generateCard = () => {
  const newCard = {
    suit1: getValueOfSuit(suitsOfCards),
    number: getValueOfNumber(numbersOfCards)
  };

  let entity;
  newCard.suit1 === "diamonds"
    ? (entity = "&diams;")
    : (entity = "&" + newCard.suit1 + ";");

  const card = document.createElement("div");
  card.classList.add("card", newCard.suit1);
  card.setAttribute("id", "uniqueCard");
  card.innerHTML =
    '<div class="card-value-suit top">' +
    entity +
    '</div><div class="card-number">' +
    newCard.number +
    '</div><div class="card-value-suit bottom">' +
    entity +
    "</div>";
  document.getElementById("randomCard").appendChild(card);
};

const setRandomCard = () => {
  generateCard();
};

const deleteCard = () => {
  const object = document.getElementById("uniqueCard");
  object.remove();
};

const generateANewCardOneMoreTime = () => {
  deleteCard();
  generateCard();
};

const getValueOfInputs = idInput => {
  return document.getElementById(idInput).value;
};

const changeWidth = () => {
  const width = getValueOfInputs("width");
  const object = document.getElementById("uniqueCard");
  if (width !== "") {
    object.style.width = `${width}px`;
  }
};

const changeHeight = () => {
  const height = getValueOfInputs("height");
  const object = document.getElementById("uniqueCard");
  if (height !== "") {
    object.style.height = `${height}px`;
  }
};

const changeStyles = () => {
  changeWidth();
  changeHeight();
};
