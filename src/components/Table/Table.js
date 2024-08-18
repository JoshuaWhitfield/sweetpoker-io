import PokerTableImage from '../../app/assets/play-room/poker-table.png'
import { generateHoleCards, generateRiver } from '../../slices/Engine/engineSlice';
import { pokerEngine } from '../../poker-engine/classes/engine';
import River from './River';
import UserProfileHud from './UserProfileHud';


/* 

simple solutions: 
    -put any class related function calls inside of an array. 
    access the index of the array from the useState value holder.

complex solutions: 
    -use Array prototypes to hold all of the values and methods of the 
    player, playerHUD, and playerUtil classes. This way the useState
    update functions will accept changes.

*/


const Table = (props) => {
    const { width, height } = props;
    const riverArr = generateRiver()
    //console.log(riverArr)
    const holeCardsArr = pokerEngine.generateHoleCards(3)
    // console.log('Hole Cards: ')
    // console.log(pokerEngine.readableHole(holeCardsArr))
    // console.log('\n\n')
    // console.log('River: ')
    // console.log(pokerEngine.readableRiver(riverArr))
    // console.log('\n\n')
    // console.log('Winner Data')
    // console.log(pokerEngine.getWinner(holeCardsArr, riverArr))
    // console.log(pokerEngine.readableWinner(pokerEngine.getWinner(holeCardsArr, riverArr)))
    // console.log('\n\n')
    const players = [
        {
            "username": "goodBoy747",
            "chips": 10000,
            "status": "folded",
            "profilePicture": "pfp",
        },

        {
            "username": "ladyDamascus",
            "chips": 10000,
            "status": "folded",
            "profilePicture": "pfp",
        },

        {
            "username": "DomeSlayer",
            "chips": 10000,
            "status": "folded",
            "profilePicture": "pfp",
        },

        {
            "username": "cringeCoreGod",
            "chips": 10000,
            "status": "folded",
            "profilePicture": "pfp",
        },
        {
            "username": "goodBoy747",
            "chips": 10000,
            "status": "folded",
            "profilePicture": "pfp",
        },

        {
            "username": "ladyDamascus",
            "chips": 10000,
            "status": "folded",
            "profilePicture": "pfp",
        },

        {
            "username": "DomeSlayer",
            "chips": 10000,
            "status": "folded",
            "profilePicture": "pfp",
        },

        {
            "username": "cringeCoreGod",
            "chips": 10000,
            "status": "folded",
            "profilePicture": "pfp",
        },
        // undefined,
        // undefined,
        // undefined,
        // undefined,
        // undefined,
        // undefined,
        // undefined,
        // undefined,
    ];

    return (
        <>
            <div className='center-content' style={{width: width, height: height, backgroundImage: `url(${PokerTableImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative'}}>
                <River riverArr={riverArr}/>
                <UserProfileHud players={players} />
            </div>
        </>
    );
}


export default Table