import { Form, FormGroup, Label, Input, Button, Row } from 'reactstrap';
import XYSpacing from '../Styling/XYSpacing';
import CLOption from './CLOption';
import { Col } from "reactstrap";
import AddTableButton from './AddTableButton';
import AddTableModal from './AddTableModal';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { 
    mode, 
    setMode,

    limit,
    setLimit,

    stakes,
    setStakes,
} from '../../pages/lobby/LobbyPage';
import { setFirstIdx, setLastIdx } from './ListLobbies';

const ConfigLobbies = () => {
    const [ isOpen, setOpen ] = useState(false);

    const configData = [
        ['mode', ['holdem', 'omaha'], [mode.value, setMode]],
        ['limit', ['no limit', 'pot limit', 'fixed limit', 'mixed limit'], [limit.value, setLimit]],
        ['stakes', ['low', 'med', 'high', 'max', 'insane'], [stakes.value, setStakes]],
    ];

    const handleModalButton = () => {
        if (isOpen) {
            setOpen(false);
            return;
        }
        setOpen(true);
    }

    const handleModalClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Form className='backlit fdr mx-auto' style={styles.form}>
                <XYSpacing height='10px' />
                <Row className=''>
                    {
                        configData.map(
                            (pairs, idx) => {
                                return (
                                    <CLOption key={idx} name={pairs[0]} options={pairs[1]} selection={pairs[2][0]} setSelection={pairs[2][1]} />
                                );
                            }
                        )
                    }
                    
                    <Col className='col-1 flex jcc aic mx-auto'>
                        <FontAwesomeIcon 
                            icon={faArrowRotateLeft} 
                            style={styles.refreshIcon} 
                            onClick={() => {
                                setMode();
                                setLimit();
                                setStakes();
                                setFirstIdx();
                                setLastIdx();
                            }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col 
                        className='col-6 flex jcc aic mx-auto'
                        style={styles.addButtonCol}
                    >
                        <AddTableButton func={handleModalButton}/>
                    </Col>
                </Row>
                <XYSpacing height='10px' />
            </Form>
            <div className='flex jcc'>
                <AddTableModal open={isOpen} onClose={handleModalClose} />
            </div>
        </>
    );
}

const styles = {
    form: {
        width: '100%',
        height: '8%'
    },
    addButtonCol: {
        height: '20px',
        marginBottom: '10px',
    },
    refreshIcon: {
        color: '#ffffff',
        fontWeight: 'bold',
        width: '25px',
        height: '25px'
    }
}

export default ConfigLobbies