import { useState } from "react";
import { Col, Row } from "reactstrap";

const CustomRangeSlider = (props) => {
    let { min = 0, max = 100, step = Math.floor(max / 50), onChange, sliderValue = 0, setSliderValue } = props;
    
    const handleInputChange = (e) => {
        if (e.target.value > max) e.target.value = max;
        setSliderValue(e.target.value);
        if (typeof onChange === 'function') {
            onChange(e.target.value);  // Corrected case sensitivity
        }
    }

    return (
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
                            onChange={(e) => {
                                setSliderValue(e.target.value);
                                if (typeof onChange === 'function') {
                                    onChange(e.target.value);  // Ensure the correct value is passed
                                }
                            }}
                            className='range'
                            style={styles.slider}
                        />
                    </div>
                </Col>
            </Row>
        </div>
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

export default CustomRangeSlider;
