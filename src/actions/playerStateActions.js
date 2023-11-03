const reset_player_state = '@reset_player_state';
const toggle_active = '@toggle_active';
const toggle_bankrupt = '@toggle_bankrupt';
const toggle_all_in = '@toggle_all_in';
const toggle_folded = '@toggle_folded';
const toggle_waiting = '@toggle_waiting';
const toggle_joining = '@toggle_joining';

export const resetPlayerState = () => {
    return {
        type: reset_player_state,
        payload: {
            is_active: true,
            is_bankrupt: false,
            is_all_in: false,
            is_folded: false,
            is_waiting: false,
            is_joining: false,
        },
    }
}

export const setPlayerActive = (bool = true) => {
    return {
        type: toggle_active,
        payload: bool,
    }
}

export const setPlayerBankrupt = (bool = true) => {
    return {
        type: toggle_bankrupt,
        payload: bool,
    }
}

export const setPlayerAllIn = (bool = true) => {
    return {
        type: toggle_all_in,
        payload: bool,
    }
}

export const setPlayerFolded = (bool = true) => {
    return {
        type: toggle_folded,
        payload: bool,
    }
}

export const setPlayerWaiting = (bool = true) => {
    return {
        type: toggle_waiting,
        payload: bool,
    }
}

export const setPlayerJoining = (bool = true) => {
    return {
        type: toggle_joining,
        payload: bool,
    }
}
