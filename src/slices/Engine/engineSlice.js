import { pokerEngine } from "../../poker-engine/classes/engine";

export const generateRiver = () => {
    return pokerEngine.generateRiver()
}

export const generateHoleCards = (amount = 5) => {
    return pokerEngine.generateHoleCards(amount)
}