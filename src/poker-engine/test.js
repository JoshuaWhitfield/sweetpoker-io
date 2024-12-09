import { createEngine } from "./classes/engine.js";
const pokerEngine = createEngine();

let river = pokerEngine.generateRiver()
let holeCards = pokerEngine.generateHoleCards(2)

const winner = pokerEngine.getWinner(holeCards, river);

let winnerObj = pokerEngine.getWinnerData()
console.log(`river: ${pokerEngine.readableRiver(river)}`)
console.log(`players: ${pokerEngine.readableHole(holeCards)}\n`)
console.log(`winner: ${pokerEngine.readableWinner(winnerObj)}`)

