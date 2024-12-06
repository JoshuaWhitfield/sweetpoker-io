import { Button, Col, Row } from "reactstrap";
import CustomRangeSlider from "../CustomRangeSlider";
import { useState } from "react";
import { sepNumByComma } from "../../utils/formatNumbers";

const Bet = (props) => {
    const { min, max } = props;
    const [sliderValue, setSliderValue] = useState(Math.floor(max / 2));

    const handleBet = () => {
        console.log(`bet ${sepNumByComma(sliderValue)} chips`);
    };

    // Handle change by receiving the value directly instead of an event
    const handleChange = (value) => {
        if (value > max) value = max;
        setSliderValue(value);
    };

    return (
        <div className="col db  flex jcc aic" style={styles.contents}>
            <Button className="button" onClick={handleBet}>
                <p style={styles.p}>&nbsp;&nbsp;&nbsp;Bet&nbsp;&nbsp;&nbsp;</p>
            </Button>
            <div className="col db2">
                <CustomRangeSlider
                    min={min}
                    max={max}
                    sliderValue={sliderValue}
                    setSliderValue={setSliderValue}
                    onChange={handleChange}  // Pass handleChange to receive the value directly
                />
            </div>
        </div>
    );
};

const styles = {
    p: {
        margin: '2px 5px 5px 5px',
    },
    contents: {
        margin: '-20px 0px 0px 0px',
    },
    sliderContent: {
        width: '100%',
        // margin: ''
    }
};

export default Bet;
