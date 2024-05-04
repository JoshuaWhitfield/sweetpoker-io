import { store } from "../../store";
import { resetState, updateState } from "../../actions/stateActions";

export const NAV_ITEMS = () => {

    // store.dispatch(setUniKey(''));
    // store.dispatch(setUsername(''));
    // store.dispatch(setBalance(''));
    // store.dispatch(setLoggedIn(false));
    
    let name = 'login'; let target = '_self';
    let path = () => {
        store.dispatch(resetState());
        store.dispatch(updateState());
        return '/login'
    }

    if (store.getState().account.logged_in) {
        name = 'logout';
        path = () => '/login';
    }

    return [
        {
            name: 'home',
            path: '/',
            target: '_self'
        },
    
        {
            name: 'lobby',
            path: '/lobby',
            target: '_self'
        },
    
        {
            name: 'social',
            path: '/social',
            target: '_self'
        },
        
        {
            name: name,
            path: path(),
            target: target
        },
    ];
}
