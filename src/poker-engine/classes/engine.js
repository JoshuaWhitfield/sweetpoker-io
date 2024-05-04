import { controller } from "./controller"; 

class PokerEngine {

    constructor() {
        this.controller = controller;
        this.deck = this.controller.deck;
        this.holeCardCount = 2;
    }

    showDeck = () => this.deck;
    showController = () => this.controller;
    getWinningHand = () => this.controller.getWinningHand();
    setHoleCardCount = (value) => this.holeCardCount = value;

    generateRiver() {
        this.deck.generateRiver();
        return this.deck.getRiver();
    };

    generateHoleCards(amount = 5) {
        if (amount <= 0) return [];
        this.deck.generateHoleCards(amount);
        return this.deck.getHoleCards()
    };
    
    getWinner(holeCardsArr, river) {
        return this.controller.determineWinner(holeCardsArr, river);
    };

    getWinnerData() {
        return this.controller.getWinningHand()
    }

    readableRiver(river) {
        let riverString = '';
        for (let card of river) {
            riverString += `${card.getName()} `;
        };
        return riverString.slice(0, -1);
    };

    readableHole(holeArr) {
        let holeString = '';
        for (let holeSet of holeArr) {
            for (let card of holeSet) {
                holeString += `${card.getName()} `;
            };
            holeString += '\n'
        }
        return holeString.slice(0, -1);
    };
    
    readableWinner(winnerObj) {
        let totalWinnerString = '';
        const winnerArr = winnerObj.winner;
        const handStrength = winnerObj.handStrength;
        for (let winner of winnerArr) {
            let winnerString = `hand strength: ${handStrength}\n`;
            for (let card of winner) {
                winnerString += `${card.getName()} `;
            };
            totalWinnerString += `${winnerString} \n\n`;
        };
        return totalWinnerString.slice(0, -1);
    };

};

export const pokerEngine = new PokerEngine();
