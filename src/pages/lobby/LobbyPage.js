import { Row, Col } from "reactstrap";
import ConfigLobbies from "../../components/Lobby/ConfigLobbies";
import ListLobbies from "../../components/Lobby/ListLobbies";
import XYSpacing from "../../components/Styling/XYSpacing";
import { signal } from '@preact/signals-react';

export const mode = signal('');
export const limit = signal('');
export const stakes = signal('');
export const index = signal(0);

export const setMode = (newMode = '') => mode.value = newMode;
export const setLimit = (newLimit = '') => limit.value = newLimit;
export const setStakes = (newStakes = '') => stakes.value = newStakes;
export const setIndex = (newIndex = 0) => index.value = newIndex;

const LobbyPage = () => {
    return (
        <div className='flex jcc fdc' style={{width: '900px', height: 'fit-content'}}>
            <ConfigLobbies />
            <ListLobbies />
                <XYSpacing height='20px'/>
        </div>
    );
}

export default LobbyPage