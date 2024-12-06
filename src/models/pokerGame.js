// poker-engine/Game.js
import { pokerEngine } from "../poker-engine/classes/engine";

class Game {
    constructor() {
      this.players = [];
      this.communityCards = [];
      this.holeCards = [];
      this.pot = 0;
    }
  
    addPlayer(playerData) {
      // Logic to add player
      this.players.push({
        id: playerData.id,
        name: playerData.name,
        chips: playerData.chips,
        status: 'waiting',
        hand: [],
      });
    }
  
    prefabRiver() {
        this.communityCards = pokerEngine.generateRiver();
    }

    dealPreflop = () => [];
  
    dealFlop = () =>  this.communityCards.slice(0, 2);
  
    dealTurn = () => this.communityCards.slice(0, 3);
  
    dealRiver = () => this.communityCards;

    dealHoleCards = () => {
        const _holeCards = pokerEngine.generateHoleCards(this.players.length)
        _holeCards.map((hole, idx) => {
            this.players[idx].hand = hole;
        })
        this.holeCards = _holeCards;
    }
  
    placeBet(playerId, amount) {
      const player = this.getPlayerById(playerId);
      player.chips -= amount;
      this.pot += amount;
    }
  
    getPlayerById(id) {
      return this.players.find(player => player.id === id);
    }
  
    getPlayers() {
      return this.players;
    }
  
    getCommunityCards() {
      return this.communityCards;
    }
  
    endHand() {
      // Logic to evaluate hand results and declare winner
      const winnerObject = pokerEngine.getWinner(this.holeCards, this.communityCards)
      return {
        winnerObject,
        "readableWinner": pokerEngine.readableWinner(winnerObject)
      }
    }
  }
  
export const createGame = () => {
    return new Game();
}
  