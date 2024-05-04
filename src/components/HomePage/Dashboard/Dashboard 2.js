import { Link } from "react-router-dom";
import { store } from "../../../store";

import { sepNumByComma } from "../../../utils/formatNumbers";
import ProfilePicture from '../../ProfilePicture';
import XYSpacing from "../../Styling/XYSpacing";
import AccountInfo from "./AccountInfo";
import BestHand from "./BestHand";

const Dashboard = () => {

    const username = <p>{store.getState().account.username}</p>;
    const balance = <p>${sepNumByComma(store.getState().balance.value)}</p>;

    return (
        <div className='flex jcc aic fdc'>
            <Link className={classes.link} to='/profile' target='blank_'  style={styles.link}>
                <AccountInfo pfp={<ProfilePicture/>} username={username} balance={balance} />
            </Link>
                <XYSpacing height='10px'/>
            <Link className={classes.link} to='/mastery' target='blank_'  style={styles.link}>
                <BestHand />
            </Link>
                <XYSpacing height='10px'/>
        </div>
    );
}

const styles = {
    link: {
        width: 'fit-content',
        height: 'fit-content',
    }
}

const classes = {
    link: 'styled-link flex jcc aic fdc'
}

export default Dashboard