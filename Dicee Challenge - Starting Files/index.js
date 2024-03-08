const randomNumber1 = Math.floor(Math.random()*6) + 1;

let player1 = "./images/dice" + randomNumber1 + ".png"

document.querySelector(".img1").setAttribute("src", player1);

const randomNumber2 = Math.floor(Math.random()*6) + 1;

let player2 = "./images/dice" + randomNumber2 + ".png"

document.querySelector(".img2").setAttribute("src", player2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Win!"
} else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Win!"
} else {
  document.querySelector("h1").innerHTML = "Draw!"
}