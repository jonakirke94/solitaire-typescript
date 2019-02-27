import { Card } from "./card";

export class Pile {
	cards: Card[];

	constructor(cards: Card[]) {
		this.cards = cards;
	}

	static checkIfStacked(low: Card, top: Card) {
		return low.rank === top.rank - 1 && low.color() !== top.color();
	}

	isEmpty() {
		return this.cards.length === 0;
	}

	peek() {
		return this.cards[this.cards.length -1];
	}

	pop() {
		return this.cards.pop();
	}

	addCard(card: Card) {
		this.cards.push((card));
	}

	canPlace(card: Card) {
		return false;
	}

	canTake() {
		return false;
	}
}