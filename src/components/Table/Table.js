import PokerTableImage from '../../app/assets/play-room/poker-table.png'
import { deck } from '../../poker-engine/poker-engine';
import River from './River';


const Table = (props) => {
    const { width, height } = props;
    deck.generate()
    deck.river.deal()
    let riverArr = deck.river.item.split(" ");
    riverArr = riverArr.slice(0, riverArr.length-1)
    return (
        <>
            <div className='center-content' style={{width: width, height: height, backgroundImage: `url(${PokerTableImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <River riverArr={riverArr}/>
            </div>
        </>
    );
}

export default Table