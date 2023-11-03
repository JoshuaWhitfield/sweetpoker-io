import { CARDS } from "../../app/shared/CARDS";

export const getAllCards = () => {
    return CARDS
}

export const getCard = (suit, value) => {
    return getAllCards()[`${value}_${suit}`]
}