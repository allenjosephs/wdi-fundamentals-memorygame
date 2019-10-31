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
var wins = 0;
var losses = 0;
var gameOver = false;

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
		document.getElementById("resetCards").addEventListener("click", resetCards);
		document.getElementById("resetScores").addEventListener("click", resetScores);
		document.getElementById("scoreArea").textContent = "Wins: " + wins + ", Losses: " + losses;
	}
}

function checkForMatch(){
		var msgArea = document.getElementById("msgArea");
		var scoreArea = document.getElementById("scoreArea");
		if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
			wins++;
			msgArea.textContent = "Game Over...You Win!";
			msgArea.style.backgroundColor = "rgba(61, 193, 63, 1)";
		} else {
			losses++;
			msgArea.textContent = "Game Over...You Lose!";
			msgArea.style.backgroundColor = "rgba(187, 31, 31, 1)";
		}	
		scoreArea.textContent = "Wins: " + wins + ", Losses: " + losses;
		gameOver = true;

}

function resetCards() {
	var msgArea = document.getElementById("msgArea");
	for (let i = 0; i < cards.length; i++){
		document.getElementById('Card ' + i).setAttribute("src", "images/back.png");
	}
	msgArea.textContent = "...";
	msgArea.style.backgroundColor = "rgba(255, 255, 255, 0)";
	gameOver = false;
}

function resetScores() {
	var scoreArea = document.getElementById("scoreArea");
	wins = 0;
	losses = 0;
	scoreArea.textContent = "Wins: " + wins + ", Losses: " + losses;
}

function flipCard() {
	if (gameOver === false) {
		var cardId = this.getAttribute("data-id");

		this.setAttribute("src", cards[cardId].cardImage);
		
		//Determine if the clicked card is already in our array
		itemFound = false;
		for (let i = 0; i < cardsInPlay.length; i++){
			if (cardsInPlay[i].rank === this.getAttribute("rank") && cardsInPlay[i].suit === this.getAttribute("suit")){
				itemFound = true;
			}
		}		

		//Only push a card to the array if the same card doesn't exist in the array already
		if (itemFound === false) {
			cardsInPlay.push(cards[cardId]);
		}
				
		if (cardsInPlay.length === 2) {
			checkForMatch();
			//resetCards();
			cardsInPlay = [];
		}
	}
}

createBoard();
