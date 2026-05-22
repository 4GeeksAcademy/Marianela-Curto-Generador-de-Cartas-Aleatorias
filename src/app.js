import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let suits = ["♦","♥","♠","♣"];
  let numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

  function getRandomElement (arr){
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }

  function generadorCard(){
   let randomSuit = getRandomElement(suits);
   let randomNumber = getRandomElement(numbers);

   document.querySelector(".top-suit").innerHTML = randomSuit;
   document.querySelector(".number").innerHTML = randomNumber;
   document.querySelector(".bottom-suit").innerHTML = randomSuit;

   if(randomSuit === "♥" || randomSuit === "♦"){
     document.querySelector(".top-suit").style.color = "red";
     document.querySelector(".bottom-suit").style.color = "red";
     document.querySelector(".number").style.color = "black";
   }else{
    document.querySelector(".top-suit").style.color = "black";
     document.querySelector(".bottom-suit").style.color = "black";
     document.querySelector(".number").style.color = "black";
   }
  }
  generadorCard();

  document.querySelector("#new-card").addEventListener("click", function(){
    generadorCard();
  });

setInterval(generadorCard, 10000);

document.querySelector("#resize-card").addEventListener("click", function(){
  let width = document.querySelector("#card-width").value;
  let height = document.querySelector("#card-height").value;

  document.querySelector("#card").style.width = width + "px";
  document.querySelector("#card").style.height = height  + "px";
});

};
