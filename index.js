var randomNumber1 = Math.floor(Math.random() * 6) + 1;
 
var dice = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var myDice1 = dice[randomNumber1 - 1];

document.querySelector("img.img1").setAttribute("src", myDice1);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;
 
var dice = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var myDice2 = dice[randomNumber2 - 1];

document.querySelector("img.img2").setAttribute("src", myDice2);


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}