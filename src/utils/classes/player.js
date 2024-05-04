import { useEffect, useState } from "react"
import { sepNumByComma } from "../../utils/formatNumbers";
import ProfilePicture from "../ProfilePicture";
import { Col, Row } from "reactstrap";

const Player = ({ name, chips, state, customStyle }) => {
    const [stateDisplay, setStateDisplay] = useState('');

    const setSD = () => {
        return state.stringifyState()
    }

    useEffect(() => {

        setStateDisplay(
            setSD()
        )

    }, [state])
    
    return (
        <Row 
            className='player-hud flex jcc aic'
            style={customStyle}
        >
            <Col>
                <ProfilePicture />
            </Col>
            <Col className='fdc'>
                <p style={styles.name}>{name}</p>
                <p style={styles.chips}>{sepNumByComma(chips)}</p>
            </Col>
            <Col>
                <p style={styles.state[stateDisplay]}>
                    <strong>
                        {stateDisplay}
                    </strong>
                </p>
            </Col>
        </Row>
    )

}

const styles = {
    name: {
        fontSize: '20px'
    },

    chips: {
        fontSize: '15px'
    },

    state: {
        fold: {
            color: 'black',
            fontSize: '15px'
        },

        betting: {
            color: 'purple',
            fontSize: '15px'
        },

        check: {
            color: 'white',
            fontSize: '15px'
        },

        call: {
            color: 'purple',
            fontSize: '15px'
        },

        raise: {
            color: 'raise',
            fontSize: '15px'
        },

        '': {}
    }
}

export default Player