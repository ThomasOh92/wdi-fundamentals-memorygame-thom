const cards = [   //Initializing Array of Cardss
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
let cardsInPlay = [];  //Initiallizing array for cards in play
let counter = 0; //Initializing score counter

function flipCard() {  //Flipcard function to change image of card
	let cardId = this.getAttribute('data-id'); //Gets the data id of the relevant card
	console.log("User flipped " + cards[cardId].rank);

	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	this.setAttribute('src', cards[cardId].cardImage); //Changes the card image

	if (cardsInPlay.length === 2) {
		checkForMatch();
	};
}

function checkForMatch() { //Function to check for match
	if (cardsInPlay[0] === cardsInPlay[1]){
		console.log("You found a match!");
		alert("You found a match!");
		counter++;
		document.getElementById("score").innerHTML = "Score: " + counter; //Change score counter if successful
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

function resetBoard() { //function to reset the board, keep the game going
	let currentGameBoard = document.getElementById('game-board'); //clear the board by removing all the child nodes
	while (currentGameBoard.hasChildNodes()){
		currentGameBoard.removeChild(currentGameBoard.firstChild);
	}
	createBoard(); //create new board
	cardsInPlay = []; //empty out this array. 
	//Do note that we are not resetting the counter, as this should keep adding
}

let resetter = document.getElementById('reset');
resetter.addEventListener('click', resetBoard); 


createBoard();

