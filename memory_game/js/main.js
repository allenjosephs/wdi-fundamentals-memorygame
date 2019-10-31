var cards = [
	{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
	position: null
	},
	{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
	position: null
	},
	{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
	position: null
	},
	{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
	position: null
	}
];

var cardsInPlay = [];
var itemFound = false;

function createBoard() {
	var cardToAdd;
	for (let i = 0; i < cards.length; i++) {
		cardToAdd = document.createElement("img");
		cardToAdd.setAttribute("id", "Card " + i);
		cardToAdd.setAttribute("src", "images/back.png");
		cardToAdd.setAttribute("data-id", i);
		cardToAdd.setAttribute("rank", cards[i].rank);
		cardToAdd.setAttribute("suit", cards[i].suit);
		cardToAdd.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardToAdd);

	}
}

function checkForMatch(){
		if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
			window.alert ("You found a match!");
		} else {
			window.alert ("Sorry, try again...");
		}	
}

function resetCards() {
	for (let i = 0; i < cards.length; i++){
		document.getElementById('Card ' + i).setAttribute("src", "images/back.png");
	}
}

function flipCard() {
	
	var cardId = this.getAttribute("data-id");

	this.setAttribute("src", cards[cardId].cardImage);
	
	itemFound = false;
	for (let i = 0; i < cardsInPlay.length; i++){
		if (cardsInPlay[i].rank === this.getAttribute("rank") && cardsInPlay[i].suit === this.getAttribute("suit")){
			itemFound = true;
		}
	}		

	if (itemFound === false) {
		cardsInPlay.push(cards[cardId]);
	}
			
	if (cardsInPlay.length === 2) {
		checkForMatch();
		//resetCards();
		cardsInPlay = [];
	}

}

createBoard();
