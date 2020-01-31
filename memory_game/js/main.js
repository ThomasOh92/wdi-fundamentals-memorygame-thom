const cards = ["queen", "queen", "king", "king"];
const cardsInPLay = [];

let cardOne = cards[0];
cardsInPLay.push(cardOne);
console.log("User flipped " + cardOne);

let cardTwo = cards[2];
cardsInPLay.push(cardTwo);
console.log("User flipped " + cardTwo);

if (cardsInPLay.length === 2) {
	if (cardOne === cardTwo){
		alert("You found a match!");
	}
	else {
		alert("Sorry Try Again!");
	}
}