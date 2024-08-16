import { Col, Row } from "reactstrap";
import UserProfile from "./UserProfile";

const UserProfileHud = (props) => {
    const { players } = props;

    return players.map( (player, idx) => {
            
        if (typeof player == undefined) {
           return (
            <div style={style.position[idx]}>
                <EmptySeat />
            </div>
           )
        } else {
            return (
                <div style={style.position[idx]}>
                    <UserProfile player={player} />
                </div>
            )
        }
        
        }
    )
}

const style = {
    position: {
        0: {},
        1: {},
        2: {},
        3: {},
        4: {},
        5: {},
        6: {},
        7: {},
        8: {},
    }
}

export default UserProfileHud;