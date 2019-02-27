import { Suits } from "./enums/suits";
import { Helpers } from "./helpers";
import { Card } from "./interfaces/card";
import { Pile } from "./interfaces/pile";
import { Foundation } from "./interfaces/foundation";

export class Game {
	private deck: Card[] = [];
	private stock: Card[];
	private foundations: Array<Pile> = new Array<Pile>();
	private tableaus: Array<Pile> = new Array();
	private waste: Card[];

	constructor() {
		this.setUp();

		console.log(this.tableaus, 'tableas');
		console.log(this.stock, 'stock');
	}

	private generateDeck(){

	 for (let i = 0; i < 13; i++) {
		this.deck.push(new Card(Suits.Clubs, i));
		this.deck.push(new Card(Suits.Hearts, i));
		this.deck.push(new Card(Suits.Spades, i));
		this.deck.push(new Card(Suits.Diamonds, i));
		}
	}

	private buildTableaus() {
		for(let i = 1; i <= 7; i++) {
			const cards = new Array<Card>();
			for(let j = 1; j <= i; j++) {
				const card = this.deck.pop();

				if (j === i) {
					card.turn();
				}

				cards.push(card);
			}

			this.tableaus.push(new Pile(cards));
		}
	}

	private buildFoundations() {
		this.foundations.push(new Foundation(new Array<Card>()));
		this.foundations.push(new Foundation(new Array<Card>()));
		this.foundations.push(new Foundation(new Array<Card>()));
		this.foundations.push(new Foundation(new Array<Card>()));
	}

	private setUp() {
		this.generateDeck();
		Helpers.shuffle(this.deck);

		this.buildTableaus();

		this.buildFoundations();

		this.stock = this.deck.slice(0);
	}

}

