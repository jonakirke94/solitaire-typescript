import { Pile } from "./pile";
import { Card } from "./card";

export class Tableau extends Pile {
	 public canTake() {
		 return true;
	 }

	 canPlace(card: Card) {
		if (this.isEmpty()) {
			return card.rank === 12;
		}

		const topCard = this.peek();
		return card.rank - 1 === topCard.rank && card.color() !== topCard.color();
	 }

	 
	selectChain() {
		// select the chain of cards that match 
	}
}