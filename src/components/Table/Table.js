import PokerTableImage from '../../app/assets/play-room/poker-table.png'
//import { generateHoleCards, generateRiver } from '../../slices/Engine/engineSlice';
import { pokerEngine } from '../../poker-engine/classes/engine';
import River from './River';
import UserProfileHud from './UserProfileHud';
//import { finalPlayers, formatPlayer, setPlayers } from '../../slices/Player/playerSlice';
import { sepNumByComma } from '../../utils/formatNumbers';
//import { useSelector } from 'react-redux';
import { createGame } from '../../models/pokerGame';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';

const socket = io('http://localhost:4000');

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

  const [players, setPlayers] = useState([]);
  const [communityCards, setCommunityCards] = useState([]);
  const [pot, setPot] = useState(0);

  useEffect(() => {
    // Listen for updates on players joining
    socket.on('updatePlayers', (playersData) => {
      setPlayers(playersData);
    });

    // Listen for new hands starting
    socket.on('newHand', (communityCardsData) => {
      setCommunityCards(communityCardsData);
    });

    // Listen for chip updates
    socket.on('updateChips', (chipData) => {
      setPlayers((prevPlayers) =>
        prevPlayers.map((player) =>
          player.id === chipData.playerId
            ? { ...player, chips: chipData.chips }
            : player
        )
      );
    });

    // Listen for community card updates (Flop, Turn, River)
    socket.on('startFlop', (flopCards) => {
      setCommunityCards(flopCards);
    });

    socket.on('startTurn', (turnCard) => {
      setCommunityCards((prevCards) => [...prevCards, turnCard]);
    });

    socket.on('startRiver', (riverCard) => {
      setCommunityCards((prevCards) => [...prevCards, riverCard]);
    });

    // Cleanup on component unmount
    return () => {
      socket.off('updatePlayers');
      socket.off('newHand');
      socket.off('updateChips');
      socket.off('startFlop');
      socket.off('startTurn');
      socket.off('startRiver');
    };
  }, []);
   
    
    const game = createGame();

    while (players.length < 8) {
        players.push(undefined)
    }

    return (
        <>
            <div className='center-content' style={{width: width, height: height, backgroundImage: `url(${PokerTableImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative'}}>
                <River riverArr={communityCards}/>
                <div>
                    <p>
                        pot: {sepNumByComma(pot)}
                    </p>
                </div>
                <UserProfileHud players={players} setPlayers={setPlayers} />
            </div>
        </>
    );
}


export default Table