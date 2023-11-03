const set_mode = '@set_mode';
const set_limit = '@set_limit';
const set_stakes = '@set_stakes';
const set_players = '@set_players';

export const setMode = (mode = '') => {
    return {
        type: set_mode,
        payload: mode,
    }
}

export const setLimit = (limit = '') => {
    return {
        type: set_limit,
        payload: limit,
    }
}

export const setStakes = (stakes = '') => {
    return {
        type: set_stakes,
        payload: stakes,
    }
}

export const setPlayers = (players = []) => {
    return {
        type: set_players,
        payload: players,
    }
}
