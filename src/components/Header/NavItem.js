import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import { store } from '../../store';
import { resetState } from '../../actions/stateActions';
import account from '../../utils/classes/account';
import { 
    navLoginName,
    setNavLoginName,
} from '../../App';

const NavItem = (props) => {
    let { name, path, target } = props;
    const handleClick = () => {
        if (path === '/login') {
            if (navLoginName.value == 'logout') { /* logout operation */
                setNavLoginName('login');
                name = navLoginName.value;
                account.isLoggedIn(false);
                account.setUserName('');
                account.setEmail('');
                account.setBalance(0);
                account.setChips(0);
                /* when logout nav link is clicked, 
                this code will run */
            };
        };
    };

    return (
        <Col className='col-1 mx-auto mt-3'>
            <Link 
                className='styled-link'
                to={path} 
                target={target} 
                onClick={handleClick}
            >
                <p className='nav-text'>
                    {name}
                </p>
            </Link>
        </Col>
    );

}

export default NavItem