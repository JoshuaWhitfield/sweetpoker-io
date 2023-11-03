const set_mode = '@set_mode';
const set_limit = '@set_mode';
const set_stakes = '@set_stakes';

export const setMode = (mode) => {
    return {
        type: set_mode,
        payload: mode,
    }
}

export const setLimit = (limit) => {
    return {
        type: set_limit,
        payload: limit,
    }
}

export const setStakes = (stakes) => {
    return {
        type: set_stakes,
        payload: stakes,
    }
}