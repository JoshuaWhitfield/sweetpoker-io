import { navLoginName } from "../../App";

export const NAV_ITEMS = () => {

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
            name: navLoginName.value,
            path: '/login',
            target: '_self',
        },
    ];
}
