import { Link } from "react-router-dom";
import { store } from "../../../store";

import { sepNumByComma } from "../../../utils/formatNumbers";
import ProfilePicture from '../../ProfilePicture';
import XYSpacing from "../../Styling/XYSpacing";
import AccountInfo from "./AccountInfo";
import BestHand from "./BestHand";
import account from "../../../utils/classes/account";

const Dashboard = () => {

    return (
        <div className='flex jcc aic fdc'>
            <Link className={classes.link} to='/profile' target='blank_'  style={styles.link}>
                <AccountInfo pfp={<ProfilePicture/>} username={<p>{account.username.value}</p>} balance={<p>${sepNumByComma(account.balance.value)}</p>} />
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