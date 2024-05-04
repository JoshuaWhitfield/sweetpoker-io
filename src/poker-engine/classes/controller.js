import { createDeck } from './deck';
import { handRanking } from './handRanking';

class ControllerUtil {

    constructor() {
        this.hierarchy = {
            'Royal Flush': 10,
            'Straight Flush': 9,
            'Four of a Kind': 8,
            'Full House': 7,
            'Flush': 6,
            'Straight': 5,
            'Three of a Kind': 4,
            'Two Pair': 3,
            'Pair': 2,
            'High Card': 1,
        };
        this.handRank = handRanking;
    };

    getMaxValue(cardArr) {
        let maxValue = 0;
        for (let card of cardArr) {
            const cardValue = card.getValue()
            if (cardValue >= maxValue) maxValue = cardValue
        }
        return maxValue
    }

    removeRepeats(arr) {
        const log = [];
        for (let elem of arr) {
            if (log.indexOf(elem) > -1) continue;
            log.push(elem)
        }
        return log;
    }

    generateValueList(cardArr) {
        const valueArr = [];
        for (let card of cardArr) {
            valueArr.push(card.getValue());
        };
        return valueArr;
    };

    generateSuitList(cardArr) {
        const suitArr = [];
        for (let card of cardArr) {
            suitArr.push(card.getSuit());
        };
        return suitArr;
    };

    combineValues(valueArr) {
        let totalValue = 0;
        for (let value of valueArr) { 
            if (value === 1) value = 14
            totalValue += value
        }
        return totalValue;
    }

    determineHandValue(hole, river) {
        const valueArr = this.generateValueList(river.concat(hole));
        return this.combineValues(valueArr)
    }

    determineHandRanking(hole, river) {
        const valueArr = this.generateValueList(river.concat(hole));
        const suitArr = this.generateSuitList(river.concat(hole));
        
        if (this.handRank.RoyalFlush(valueArr, suitArr)) return 'Royal Flush';
        if (this.handRank.StraightFlush(valueArr, suitArr)) return 'Straight Flush';
        if (this.handRank.FourOfAKind(valueArr)) return 'Four of a Kind';
        if (this.handRank.FullHouse(valueArr)) return 'Full House';
        if (this.handRank.Flush(suitArr)) return 'Flush';
        if (this.handRank.Straight(valueArr)) return 'Straight';
        if (this.handRank.ThreeOfAKind(valueArr)) return 'Three of a Kind';
        if (this.handRank.TwoPair(valueArr)) return 'Two Pair';
        if (this.handRank.Pair(valueArr)) return 'Pair';
        
        return 'High Card';
    };

    equalCommunalHand(playerDetails, river) {
        const { contestantRanking, contestant, winnerRanking, winner } = playerDetails;
        const riverRanking = this.determineHandRanking([], river)

        if (this.hierarchy[contestantRanking] > this.hierarchy[riverRanking] || this.hierarchy[winnerRanking] > this.hierarchy[riverRanking]) return false

        const maxValueOfWinner = this.getMaxValue(winner)
        const maxValueOfContestant = this.getMaxValue(contestant)

        if (maxValueOfWinner === maxValueOfContestant) return { 'winner': [winner].concat([contestant]), 'handStrength': contestantRanking };
        if (maxValueOfWinner > maxValueOfContestant) return { 'winner': [winner], 'handStrength': winnerRanking };
        console.log(' equivalency of communal hand ')
        return { 'winner': [contestant], 'handStrength': contestantRanking };
    }

    compareHands(contestant, winnerArr, river) {
        const contestantRanking = this.determineHandRanking(contestant, river);
        const contestantValue = this.determineHandValue(contestant, river)

        const winnerRanking = this.determineHandRanking(winnerArr[0], river); /* all rankings in winnerArray are the same */
        const winnerValue = this.determineHandValue(winnerArr[0], river)

        /* equivalency of communal hand */
        const ECHResults = this.equalCommunalHand(
            {
                contestantRanking,
                contestant, 
                winnerRanking,
                winner: winnerArr[0],
            },
            river
        )
        
        if (ECHResults) return ECHResults;

        /* equivalency of contesting hands */
        if (this.hierarchy[contestantRanking] === this.hierarchy[winnerRanking]) {
            if (contestantValue === winnerValue) return { 'winner': winnerArr.concat([contestant]), 'handStrength': contestantRanking };
            if (contestantValue > winnerValue) return { 'winner': [contestant], 'handStrength': contestantRanking };
            console.log(' equivalency of contesting hands ')
            return { 'winner': winnerArr, 'handStrength': winnerRanking };
        }

        /* inequivalency of contesting hands */
        if (this.hierarchy[contestantRanking] > this.hierarchy[winnerRanking]) return { 'winner': [contestant], 'handStrength': contestantRanking };
        if (this.hierarchy[winnerRanking] > this.hierarchy[contestantRanking]) return { 'winner': winnerArr, 'handStrength': winnerRanking };
        console.log(' inequivalency of contesting hands ')
        return { 'winner': winnerArr.concat([contestant]), 'handStrength': contestantRanking };
    };

}

class Controller {
    constructor() {
        this.deck = createDeck();
        this.cardNamesArr = this.deck.getCardNames();
        this.util = new ControllerUtil();
        this.winningHand = '';
        this.removeRepeats = this.util.removeRepeats;
    };

    getWinningHand = () => this.winningHand;

    determineWinner(holeCardsArr, river) {
        let winner = [];
        for (let current of holeCardsArr) {
            if (!winner.length) {
                winner = [current];
                continue;
            };
            winner = this.util.compareHands(current, winner, river).winner;
            this.winningHand = this.util.compareHands(current, winner, river);
        };
        // console.log(this.winningHand)
        this.winningHand.winner = this.removeRepeats(this.winningHand.winner)



        return this.winningHand;
    };

};

export const controller = new Controller();