const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

function flipCard(cardId) {
	console.log("User flipped " + cards[cardId]);

	cardsInPlay.push(cards[cardId]);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	};
}

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]){
	console.log("You found a match!");
	}
	else {
	console.log("Sorry Try Again!");
	}
}

flipCard(0);
flipCard(2);

