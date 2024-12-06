import { Button } from "reactstrap";
import io from 'socket.io-client';  // Import socket connection
import { Officialstate } from "../../state";
import md5 from "md5";
import randomSeed from "../../utils/randomSeed";
const socket = io("https://localhost:4000")

const EmptySeat = ({ players, setPlayers }) => {

    const handleJoinTable = () => {
        console.log('joining table');

        const player = {
            id: md5(randomSeed()),
            username: Officialstate.account.username,
            chips: Officialstate.playroom.chips.value,
            status: "waiting"
        }
        let playerData = []
        let found = false;
        for (let _player of players) {
            if (_player === undefined) {continue}
            if (_player.username == Officialstate.account.username) {
                found = _player
            }
        }

        if (!found) {
            if (players.indexOf(undefined) == -1) {
                console.log('table currently full')
                return 
            }
            players[players.indexOf(undefined)] = player
            console.log(players)
            setPlayers(players)
            // Emit event to join table via socket
            socket.emit('joinTable', playerData);
        }
        
    };

    return (
        <button className='button flex jcc aic' type='button' onClick={handleJoinTable}>
            <h1>&nbsp;&nbsp;+&nbsp;&nbsp;</h1>
        </button>
    );
};

export default EmptySeat;
