import { createCard } from './card.js';
import { createRiver } from './river.js';
import { createHole } from './hole.js';
import { createCache } from './cache.js';
import { randomIdx } from './operations.js';
//import { controller } from './controller.js';

class DeckUtil {
    constructor() {
        this.meta = {
            suits: [
                'clubs',
                'spades',
                'diamonds',
                'hearts',
            ],
    
            suits_abbr: [ 'c', 's', 'd', 'h' ]
        };

    }

    init() {
        const arr = [];
        const royals = { 11: 'J', 12: 'Q', 13: 'K', 1: 'A' };
        for (let suit of this.meta.suits) {
            for (let value_idx = 1; value_idx <= 13; value_idx++) {
                let name = `${value_idx}`;
                if ( value_idx >= 11 || value_idx === 1 ) name = royals[value_idx];
                arr.push( createCard(`${name}_${suit}`, suit, value_idx ) )
            }
        }
        return arr;
    }

    generateCardNames = (deck) => {
        const arr = [];
        for (let card of deck) {
            arr.push(card.getName());
        }
        return arr;
    }

}

class Deck {
    constructor () {
        this.utils = new DeckUtil(); 
        this.deck = this.utils.init();
        this.cardNamesArr = this.utils.generateCardNames(this.deck);
        this.hole_cards = [];
        this.river = [];
        this.cache = createCache();
    }

    getDeck = () => this.deck;
    getHoleCards = () => this.hole_cards;
    getRiver = () => this.river;
    getUtil = () => this.utils;
    getCardNames = () => this.card_names;

    generateRiver = () => {
        const river = createRiver();
        river.deal(this.deck, this.generateRiverTarget());
        this.river = river.getRiver();
    }

    generateHoleCards = (amount = 5) => {
        const targets = this.generateHoleTargets(amount)
        const holeCardsArr = []

        for (let targetSet of targets) {
            const hole = createHole()
            hole.deal(this.deck, targetSet)
            holeCardsArr.push(hole.getHole())
        }

        this.hole_cards = holeCardsArr;
        // this.hole_cards.map((hole, idx) => {
        //     console.log(`hole (${idx+1}): `)
        //     console.log(hole[0].getName())
        //     console.log(hole[1].getName())
        //     console.log('\n')
        // })
    }

    generateRiverTarget() {
        const targets = [];
        for (let idx = 0; idx < 5; idx++) {
            const rndCardName = randomIdx(this.cardNamesArr);
            if (this.cache.has(rndCardName)) {
                idx -= 1
                continue;
            };
            this.cache.add(rndCardName)
            targets.push(rndCardName)
        };

        return targets;
    };

    generateHoleTargets(amount = 5) {
        const targets = [];
        for (let count = 1 ; count <= amount ; count++) {
            let holeSet = [];
            for (let idx = 0; idx < 2; idx++) {
                const rndCardName = randomIdx(this.cardNamesArr);
                if (this.cache.has(rndCardName)) {
                    idx -= 1
                    continue;
                }
                this.cache.add(rndCardName)
                holeSet.push(rndCardName)
            };
            targets.push(holeSet)
        }

        return targets;
    };

};

export const createDeck = () => {
    const deck = new Deck();
    return deck;
};