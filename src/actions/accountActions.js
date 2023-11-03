const set_username = '@set_username';
const set_decal = '@set_decal';
const set_login = '@set_login';
const set_uni_key = '@set_uni_key';

export const setUsername = (username) => {
    return {
        type: set_username,
        payload: username,
    }
}

export const setUniKey = (key) => {
    return {
        type: set_uni_key,
        payload: key,
    }
}

export const setDecal = (decal) => {
    return {
        type: set_decal,
        payload: decal,
    }
}

export const setLoggedIn = (bool) => {
    return {
        type: set_login,
        payload: bool,
    }
} 