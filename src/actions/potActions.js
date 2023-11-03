const pot_inc = '@pot_increase';
const pot_inc_split = '@pot_increment_split_value';
const pot_reset = '@pot_reset';

export const potIncrease = (amount) => {
    return {
        type: pot_inc,
        payload: amount,
    }
}

export const potIncrementSplit = (amount) => {
    return {
        type: pot_inc_split,
        payload: amount,
    }
}

export const potReset = () => {
    return {
        type: pot_reset,
        payload: null,
    }
}