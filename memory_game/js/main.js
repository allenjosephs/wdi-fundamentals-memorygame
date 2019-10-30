var cards = ['queen','queen','king','king'];
var cardsInPlay = [];
var cardOne;
var cardTwo;

cardOne = cards[2];
cardTwo = cards[0];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

for (let i=0; i < cardsInPlay.length; i++){	
	console.log("User flipped " + cardsInPlay[i]);
}

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		window.alert("You found a match!");
	} else {
		window.alert("Sorry, try again.");
	}
}