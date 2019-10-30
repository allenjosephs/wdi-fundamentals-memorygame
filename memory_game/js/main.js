var cards = [
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
	cardImage: "images/king-of-hearts"
	},
	{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds"
	}
];

var cardsInPlay = [];


function checkForMatch(){
		if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
			console.log("You found a match!");
		} else {
			console.log("Sorry, try again.");
		}	
}

function flipCard(cardId) {
	
	console.log("User flipped " + cards[cardId].rank);

	cardsInPlay.push(cards[cardId]);

	for (let i=0; i < cardsInPlay.length; i++){	
		console.log("All cards in play " + cardsInPlay[i].cardImage);
		console.log("All cards in play " + cardsInPlay[i].suit);
	}

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}

}

flipCard(0);
flipCard(1);


