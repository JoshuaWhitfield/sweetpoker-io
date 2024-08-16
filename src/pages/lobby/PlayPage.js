//import Table from '../../components/Table/Table';
import PlayConsole from '../../components/PlayConsole/PlayConsole';
import { createDeck } from '../../poker-engine/classes/deck';
import PokerGame from '../../components/Table/PokerGame';

const PlayPage = () => {
    const width = '990px';
    const height = '500px';
    return (
        <div className='custom-body-pr'>
            <PokerGame players={[]} width={width} height={height} />
            <div className='console-container'>
                <PlayConsole />
            </div>
        </div>
    );
}

export default PlayPage