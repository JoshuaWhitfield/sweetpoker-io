const allow_rebuy = '@allow_rebuy';
const set_rebuy_amount = '@set_rebuy_amount';
const set_rebuy_threshold = '@set_rebuy_threshold';
const toggle_rebuy_type_perc = '@toggle_rebuy_type_perc';
const toggle_rebuy_type_zero = '@toggle_rebuy_type_zero';


export const allowRebuy = (bool = true) => {
    return {
        type: allow_rebuy,
        payload: bool,
    }
}

export const setRebuyAmount = (amount) => {
    return {
        type: set_rebuy_amount,
        payload: amount,
    }
}

export const setRebuyThreshold = (percent) => {
    return {
        type: set_rebuy_threshold,
        payload: percent,
    }
}

export const toggleRebuyToPerc = (bool = true) => {
    return {
        type: toggle_rebuy_type_perc,
        payload: bool,
    }
}

export const toggleRebuyToZero = (bool = true) => {
    return {
        type: toggle_rebuy_type_zero,
        payload: bool,
    }
}