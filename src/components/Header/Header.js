import '../../css/header/header.scss'
import { Col } from "reactstrap";
import Button from '../Styling/Button.js';
import Logo from '../../app/assets/logo/logo-gradient.png'
import { Link, useLocation } from 'react-router-dom';
import NavList from './NavList.js';



const Header = () => {
    if (useLocation().pathname === '/lobby/play') return null

    return (
        <div className='container container-fluid flex jcc aic'>
            <div className='center-content' style={{height: '80px', width: 'fit-content'}}>
                <Col className='col-2'><Link to={'/'}><img style={{width: '190px', height: '30%'}} src={Logo} alt='logo' /></Link></Col>
                <Col className='offset-2 col-6'>
                    <NavList />
                </Col>
                <Col className='col-3 center-content offset-2 full-height' style={{justifyContent: 'end'}}>
                    <Button path={'/chip-store'} target={'_self'} name={'Top Up'} width='110px' />
                </Col>
            </div>
        </div>
    );
}

export default Header