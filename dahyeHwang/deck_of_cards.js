// A deck object constructor (The deck should contain the 52 standard cards)
function Deck() {
	this.cards = [];

	var suit = ['Spade', 'Heart', 'Diamond', 'Club'];
	var values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

	for (var i = 0; i < suit.length; i++) {
		for (var j = 0; j < values.length; j++) {
			this.cards.push(new Card(suit[i], values[j]));
		}
	}
	// console.log(this.cards);
}

// A single card object constructor
function Card(suit, value) {
	this.suit = suit;
	this.value = value;
	this.combine = suit[0] + value;
}


// Show method for deck (The deck is able to show cards) 
Deck.prototype.show = function() {
	var show_cards = [];

	for (var i = 0; i < this.cards.length; i++) {
		show_cards.push(this.cards[i].combine);
	}
	console.log(show_cards.toString());
	return this;
}

// Shuffle method for deck (The deck is able to shuffle cards)
Deck.prototype.shuffle = function() {
	for (var i = 0; i < this.cards.length; i++) {
		var temp = this.cards[i];
		var rand = Math.floor(Math.random() * this.cards.length);
		this.cards[i] = this.cards[rand];
		this.cards[rand] = temp;
	}
	return this;
}

// Reset method for deck (The deck is able to reset cards)
Deck.prototype.reset = function() {
	this.cards = [];

	var suit = ['Spade', 'Heart', 'Diamond', 'Club'];
	var values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

	for (var i = 0; i < suit.length; i++) {
		for (var j = 0; j < values.length; j++) {
			this.cards.push(new Card(suit[i], values[j]));
		}
	}
	return this;
	// console.log(this.cards)
}

// Deal method for dech (The deck is able to deal a random card)
Deck.prototype.deal = function() {
	return this.cards.pop();
}



// A player object constructor
function Player (name) {
	this.name = name;
	this.hand = [];
}


// Show method for player
Player.prototype.show = function () {
	var show_player = {
		Player: this.name,
		Hand: this.hand
	};
	console.log(show_player);
	return this;
}

// Draw method for player (The player is able to take a card)
Player.prototype.draw = function (deck) {
	this.hand.push(deck.deal());
	// console.log(this.hand)
	return this;
}

// Discard method for player (The player is able to discard a card)
Player.prototype.discard = function (combine) {
	if (combine) {
		for (var i = 0; i < this.hand.length; i++) {
			if (this.hand[i].combine == combine) {
				this.hand.splice(i, 1);
				return this;
			}
		}
	} else {
		this.hand.pop();
		return this;
	}
}


var deck = new Deck();
deck.show();
deck.shuffle();
deck.deal();
deck.deal();
deck.show();
// deck.reset();
// deck.show();

var player = new Player("dahye");
player.draw(deck).draw(deck).draw(deck).draw(deck).draw(deck).draw(deck);
player.show();
deck.show();
player.discard(player.hand[2].combine).discard(player.hand[0].combine);
player.show();