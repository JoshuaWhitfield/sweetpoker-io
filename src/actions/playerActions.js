const check = '@player_check';
const fold = '@player_fold';
const bet = '@player_bet';
const raise = '@player_raise';
const call = '@player_call';
const all_in = '@player_all_in';

const add_player_action = '@add_action';
const reset_player_action = '@reset_action';
const player_is_active = '@player_is_active';

export const playerCheck = () => {
    return {
        type: check,
        payload: null,
    }
}

export const playerFold = (amount) => {
    return {
        type: fold,
        payload: amount,
    }
}

export const playerBet = (amount) => {
    return {
        type: bet,
        payload: amount,
    }
}

export const playerRaise = (amount) => {
    return {
        type: raise,
        payload: amount,
    }
}

export const playerCall = (amount) => {
    return {
        type: call,
        payload: amount,
    }
}

export const playerAllIn = (amount) => {
    return {
        type: all_in,
        payload: amount,
    }
}

export const addAction = (action) => {
    return {
        type: add_player_action,
        payload: action,
    }
}

export const resetAction = () => {
    return {
        type: reset_player_action,
        payload: null,
    }
}

export const playerIsActive = (bool) => {
    return {
        type: player_is_active,
        payload: bool,
    }
}