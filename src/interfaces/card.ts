import { Suits } from "../enums/suits";

export class Card {
	suit: Suits;
	rank: number;
	isFaceUp: boolean;

	constructor(suit: Suits, rank: number) {
		this.suit = suit;
		this.rank = rank;
		this.isFaceUp = false;
	}

	turn() {
		this.isFaceUp = !this.isFaceUp;
	}

	color() {
		return this.suit === Suits.Hearts || this.suit === Suits.Diamonds ? "Red" : "Black";
	}
}