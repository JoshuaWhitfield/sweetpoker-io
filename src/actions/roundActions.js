const round_iterate = '@round_iterate';
const player_iterate = '@player_iterate';
const round_reset = '@round_reset';
const player_reset = '@player_reset';

export const roundIterate = () => {
    return {
        type: round_iterate,
        payload: null,
    }
}

export const playerIterate = () => {
    return {
        type: player_iterate,
        payload: null,
    }
}

export const roundReset = () => {
    return {
        type: round_reset,
        payload: 0,
    }
}

export const playerReset = () => {
    return {
        type: player_reset,
        payload: 0,
    }
}