import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "reactstrap";
import { store } from "../../store";
import { setPlayers, setMode, setLimit, setStakes } from "../../actions/roomActions";
import formatPlayerNames from "../../utils/formatPlayerNames";
import { getBigBlind, getSmallBlind } from "../../utils/formatNumbers";

const Lobby = (props) => {
    let { sections, playerNames, config, avgPot } = props
    const [ isOpen, setOpen ] = useState(false);

    const LobbyInterface = (props) => {
        let { status } = props;

        const handleSubmit = () => {
            store.dispatch(setPlayers(formatPlayerNames(playerNames, true)));
            store.dispatch(setMode(sections[1]));
            store.dispatch(setLimit(sections[2]));
            store.dispatch(setStakes({
                small_blind: getSmallBlind(sections[3]),
                big_blind: getBigBlind(sections[3])
            }));
        }

        if (!status) return null;

        return (
            <Row className='static-card' style={styles.interface}>
                <Col 
                    className='col-6 flex jcc aic'
                    style={styles.partition}
                >
                    <p><strong>player names</strong></p>
                </Col>
                <Col 
                    className='col-3 flex jcc aic'
                    style={styles.partition}
                >
                    <p><strong>avg pot</strong></p>
                </Col>
                <Col 
                    className='col-3 flex jcc aic'
                >
                    <Link className='styled-link' to={'/lobby/play'} target='_blank'>
                        <Button className='button mx-auto flex jcc' type='submit' onClick={handleSubmit} style={{ height: '43px', width: '86px', border: 'none' }}> 
                            <p><strong>join</strong></p>
                        </Button>
                    </Link>
                </Col>
            </Row>
        );
    }

    const handleClick = (e) => {
        e.preventDefault()
        if (isOpen) {
            setOpen(false);
            return;
        }
        setOpen(true);
    }

    const styles = {
        container: {
            width: '95%',
            height: (isOpen) ? '200px' : '50px' // '50px',
        },
        lobby: {
            width: '95%',
            height: '50px',
        },
        interface: {
            width: '60%',
            height: '150px',
            marginTop: '4px',
        },
        partition: {
            borderRight: 'solid 2px rgb(17, 0, 36)',
        },
    }

    return (
        <>
            <Row className='flex jcc aic' style={styles.container}>
                <Col className='col-12 flex jcc aic'>
                    <Row onClick={handleClick} className='styled-card' style={styles.lobby}>
                        {
                            sections.map(
                                (sect, idx) => {
                                    if (!idx || idx === sections.length-1) {
                                        return (
                                            <Col className='col-4 flex jcc mx-auto mt-2' key={idx} style={{margin: '2px'}}>
                                                {sect}
                                            </Col>
                                        );
                                    }

                                    return (
                                        <Col className='col-2 flex jcc mx-auto mt-2' key={idx} style={{margin: '2px'}}>
                                            {sect}
                                        </Col>
                                    );
                                }
                            )
                        }
                    </Row>
                </Col>
                <Col className='flex jcc aic'>
                    <LobbyInterface status={isOpen} />
                </Col>
            </Row>
        </>
    );
}

export default Lobby