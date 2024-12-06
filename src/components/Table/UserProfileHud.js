import { Col, Row } from "reactstrap";
import UserProfile from "./UserProfile";
import EmptySeat from "./EmptySeat";

const UserProfileHud = (props) => {
    const { players, setPlayers } = props;

    return players.map( (player, idx) => {
        
        if (typeof(player) == 'undefined') {
           return (
            <div style={style.position[idx]}>
                <EmptySeat players={players} setPlayers={setPlayers} />
            </div>
           )
        } else {
            return (
                <div style={style.position[idx]}>
                    <UserProfile playerID={player.id} username={player.username} status={player.status}/>
                </div>
            )
        }
        
        }
    )
}

const style = {
    position: {
        0: {
            position: 'absolute',
            zIndex: '2',
            margin: '0px 650px 425px 0px',
        },
        1: {
            position: 'absolute',
            zIndex: '2',
            margin: '0px 850px 0px 0px',
        },
        2: {
            position: 'absolute',
            zIndex: '2',
            margin: '440px 650px 0px 0px',
        },
        3: {
            position: 'absolute',
            zIndex: '2',
            margin: '450px 0px 0px 0px',
        },
        4: {
            position: 'absolute',
            zIndex: '2',
            margin: '440px 0px 0px 650px',
        },
        5: {
            position: 'absolute',
            zIndex: '2',
            margin: '0px 0px 0px 850px',
        },
        6: {
            position: 'absolute',
            zIndex: '2',
            margin: '0px 0px 430px 650px',
        },
        7: {
            position: 'absolute',
            zIndex: '2',
            margin: '0px 0px 450px 0px',
        },

    }
}

export default UserProfileHud;