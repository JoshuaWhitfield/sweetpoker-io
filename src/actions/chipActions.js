const increase_chips = '@increase_chips';
const decrease_chips = '@decrease_chips';
const set_chips = '@set_chips';
const toggle_bankrupt = '@toggle_bankrupt';

export const increaseChips = (amount) => {
    return {
        type: increase_chips,
        payload: amount,
    }
}

export const decreaseChips = (amount) => {
    return {
        type: decrease_chips,
        payload: amount,
    }
}

export const setChips = (amount) => {
    return {
        type: set_chips,
        payload: amount,
    }
}
