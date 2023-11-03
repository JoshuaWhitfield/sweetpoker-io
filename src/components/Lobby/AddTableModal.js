import { Row, Col, Button } from 'reactstrap';
import { useState } from 'react';
import CustomRangeSlider from '../CustomRangeSlider';
import CLOption from './CLOption';
import { replaceK, replaceM, calcStakes, getMedian } from '../../utils/formatNumbers';
import { useNavigate } from 'react-router-dom';
import { addTable } from '../../utils/api';
import { store } from '../../store';
import generateRoom from '../../utils/generateRoom';

const AddTableModal = (props) => {
    let { open } = props;

    const [ mode, setMode ] = useState('');
    const [ limit, setLimit ] = useState('');
    const [ stakes, setStakes ] = useState('');
    const [ value, setValue ] = useState(0);

    const navigate = useNavigate();

    const [ errors, setErrors ] = useState({
        modeSelected: false,
        limitSelected: false,
        stakesSelected: false,
        chipsSelected: false,
    });

    const pseudoSetValue = (newValue) => {
        setValue(newValue);
    }

    const handleChange = () => {
        setErrors({
            modeSelected: false,
            limitSelected: false,
            stakesSelected: false,
            chipsSelected: false,
        });
    }
    
    const handleSubmit = () => {

        /* make sure the drop downs are all selected: */

        if (!mode.length) {
            setErrors({
                ...errors,
                modeSelected: true,
            })
            return;
        }

        if (!limit.length) {
            setErrors({
                ...errors,
                limitSelected: true,
            })
            return;
        }

        if (!stakes.length) {
            setErrors({
                ...errors,
                stakesSelected: true,
            })
            return;
        }

        if (value < calcStakes(stakes)) {
            setErrors({
                ...errors,
                chipsSelected: true,
            })
            return;
        }

        /* insert poker table into database */

        const requestData = {
            room: generateRoom(),
            player_names: `${store.getState().account.username}(${value})`,
            variant: mode,
            stakes: stakes,
            pot_limit: limit, 
            avg_pot: 0,
        }

        console.log(requestData)

        addTable(
            requestData,
            (res) => {
                //navigate('/lobby/play');
                console.log('addTable (res):')
                console.log(res.data)
                return res.data;
            },
            (err) => {
                console.log(err)
                return err;
            }
        )
    }


    const configData = [
        ['mode', ['holdem', 'omaha'], [mode, (newValue) => {setMode(newValue)}]],
        ['limit', ['no limit', 'fixed limit', 'pot limit', 'mixed limit'], [limit, (newValue) => {setLimit(newValue)}]],
        ['stakes',
            [
                'low 4/8',
                'low 8/16',
                'low 16/32',
                'med 50/100',
                'med 100/200',
                'med 200/400',
                'high 500/1k',
                'high 1k/2k',
                'high 2.5k/5k',
                'max 5k/10k',
                'max 10k/20k',
                'max 25k/50k',
                'insane 250K/500k',
                'insane 500K/1M',
                'insane 1.5M/3M',
            ], 
        [stakes, (newValue) => {setStakes(newValue)}]]
    ];

    if (!open) return null;

    return (
        <>
            <div className='flex jcs aic fdc fuzzy2' style={styles.containerDiv}>
                <Row className='flex jcc aic' style={styles.row}>
                   <Col className='flex jcc'>
                        <h2 className='light-text'>Create Table</h2>
                   </Col>
                </Row>
                <Row className='flex jcc aic' style={styles.customRow}>
                    {
                        configData.map(
                            (pairs, idx) => {
                                return (
                                    <CLOption 
                                        key={idx} 
                                        name={pairs[0]} 
                                        options={pairs[1]} 
                                        selection={pairs[2][0]} 
                                        setSelection={pairs[2][1]} 
                                        onChange={handleChange}
                                    />
                                );
                            }
                        )
                    }
                </Row>
                <Row className='flex jcc aic' style={styles.row}>
                    <Col className='flex jcc aic'>
                        <div>
                            <h2>chips: </h2>
                        </div>
                        <CustomRangeSlider
                            min={calcStakes(stakes)}
                            max={(calcStakes(stakes) * 1.5)}
                            sliderValue={value}
                            setSliderValue={pseudoSetValue}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row className='flex jcc aic' style={styles.row}>
                    <Col className=''>
                    {errors.modeSelected && <div className='flex jcc aic' style={styles.error}><p className="error-message">must select a game mode...</p></div>}
                    {errors.limitSelected && <div className='flex jcc aic' style={styles.error}><p className="error-message">must select a pot limit...</p></div>}
                    {errors.stakesSelected && <div className='flex jcc aic' style={styles.error}><p className="error-message">must select the stakes...</p></div>}
                    {errors.chipsSelected && <div className='flex jcc aic' style={styles.error}><p className="error-message">must select chip amount...</p></div>}
                        <Button type='submit' onClick={handleSubmit} className='button mx-auto flex jcc' style={styles.button}>
                            <p>start table</p>
                        </Button>
                    </Col>
                </Row>
            </div>
        </>
    );
}

const styles = {
    containerDiv: {
        width: '700px',
        height: '350px',
        marginTop: '10px',
    },
    row: {
        width: '100%',
        height: '20%',
        marginTop: '10px'
    },
    customRow: {
        width: '100%',
        height: '20%',
        marginTop: '10px',
        marginRight: '30px',
    },
    col: {
        height: '100%',
    },
    button: {
        height: '43px',
        width: 'fit-content',
        border: 'none'
    },
    error: {
        height: '5px', 
        position: 'relative',

    }
}

export default AddTableModal
