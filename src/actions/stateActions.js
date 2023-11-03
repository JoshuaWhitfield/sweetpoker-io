const update = '@update_state';
const reset = '@reset_state';

export const updateState = () => {
    return {
        type: update,
        payload: false,
    }
}

export const resetState = () => {
    return {
        type: reset,
        payload: false,
    }
}