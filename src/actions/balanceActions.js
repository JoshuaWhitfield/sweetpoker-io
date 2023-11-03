const increase_balance = '@increase_balance';
const decrease_balance = '@decrease_balance';
const set_balance = '@set_balance';

export const increaseBalance = (amount) => {
    return {
        type: increase_balance,
        payload: amount,
    }
}

export const decreaseBalance = (amount) => {
    return {
        type: decrease_balance,
        payload: amount,
    }
}

export const setBalance = (amount) => {
    return {
        type: set_balance,
        payload: amount,
    }
}