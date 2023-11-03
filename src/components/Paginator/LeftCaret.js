import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { Col } from 'reactstrap';
import {
    index,
    setIndex
} from '../../pages/lobby/LobbyPage';

const LeftCaret = (props) => {
    const { pages } = props;
    if (!index.value) return <Col className='col-1 flex jcc aic mx-auto'></Col>;

    return (
        <Col className='col-1 flex jcc aic mx-auto'>
            <FontAwesomeIcon 
                icon={faCaretLeft}
                style={styles.caret}
                onClick={() => {
                    if (pages[index-1] != undefined) setIndex(index-1);
                }}
            />
        </Col>
    );
} 

const styles = {
    caret: {
        color: 'rgba(97, 14, 205, 0.885)',
        fontWeight: 'bold',
        width: '35px',
        height: '35px'
    },
}

export default LeftCaret;