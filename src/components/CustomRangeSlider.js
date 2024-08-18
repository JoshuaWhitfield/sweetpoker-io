import { useState } from "react";
import { Col, Row } from "reactstrap";

const CustomRangeSlider = (props) => {
    let { min, max, step, onChange, sliderValue, setSliderValue } = props;
    if (!max) max = 100;
    if (!min) min = 0;
    if (!step) step = (max * Math.floor(1/50));
    
    const handleInputChange = (e) => {
        if (e.target.value > max) e.target.value = max;
        setSliderValue(e.target.value);
        if (typeof(onChange) == 'function') { onchange() }
    }
    
    //if (!max) return null;
    return (
        <>
            <div className='flex jcc aic' style={styles.sliderParent}>
                <Row>
                    <Col className='flex jcc mx-auto' style={styles.col}>
                        <input 
                            className='special-input flex atc'
                            type='number'
                            placeholder={sliderValue}
                            value={sliderValue}
                            onChange={handleInputChange}
                            style={styles.displayValue}
                        />
                        <div className='slider flex jcc'>
                            <input 
                                type='range'
                                min={min.toString()} 
                                max={max.toString()} 
                                step={step.toString()}
                                value={sliderValue}
                                onChange={(e) => {setSliderValue(e.target.value); onChange()}}
                                className='range'
                                style={styles.slider}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

const styles = {
    sliderParent: {
        width: 'fit-content',
        height: 'fit-content',
        padding: '15px 15px 15px 15px'
    },
    slider: {
        width: '200px',
    },
    displayValue: {
        width: '100px'
    },
    col: {
        width: 'fit-content',
    }
}

export default CustomRangeSlider