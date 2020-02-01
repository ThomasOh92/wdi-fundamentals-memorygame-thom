const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
let cardsInPlay = [];
let counter = 0;

function flipCard() {
	let cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);

	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	};
}

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]){
		console.log("You found a match!");
		alert("You found a match!");
		counter++;
		document.getElementById("score").innerHTML = "Score: " + counter;
	}
	else {
		console.log("Sorry Try Again!");
		alert("Sorry Try Again");
	}
}

function createBoard(){
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
    	cardElement.setAttribute('data-id', i);
    	cardElement.addEventListener('click', flipCard);
    	document.getElementById('game-board').appendChild(cardElement);
	}
}

function resetBoard() {
	let currentGameBoard = document.getElementById('game-board');
	while (currentGameBoard.hasChildNodes()){
		currentGameBoard.removeChild(currentGameBoard.firstChild);
	}
	createBoard();
	cardsInPlay = [];
}

let resetter = document.getElementById('reset');
resetter.addEventListener('click', resetBoard); 


createBoard();

