import { Pile } from "./pile";
import { Card } from "./card";

export class Foundation extends Pile {
	 public canTake() {
		 return true;
	 }

	 public canPlace(card: Card) {
			if (this.isEmpty()) {
				return card.rank === 12;
			}

			const topCard = this.peek();

			return topCard.rank === card.rank - 1 && topCard.suit === card.suit
	 }
}