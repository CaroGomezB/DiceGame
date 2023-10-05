var randomN1 = Math.ceil((Math.random() * 5));
var randomN2 = Math.ceil((Math.random() * 5));

var imgSrc1 = "./images/dice" + randomN1 + ".png";
var imgSrc2 = "./images/dice" + randomN2 + ".png";

document.getElementById("dicePl1").src = imgSrc1;
document.getElementById("dicePl2").src = imgSrc2;

if (randomN1 > randomN2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
}

else if (randomN1 == randomN2)  {

    document.querySelector("h1").innerHTML = "Draw!"
}

else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}