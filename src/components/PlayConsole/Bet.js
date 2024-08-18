import { Button, Col, Row } from "reactstrap";
import CustomRangeSlider from "../CustomRangeSlider"
import { useState } from "react";

const Bet = (props) => {
    const { min, max } = props;
    const { sliderValue, setSliderValue } = useState(Math.floor(max/2));

    const handleBet = () => {
        console.log('Bet')
    }

    return (
        <div className="flex fdr jcc aic" style={styles.contents}>
            
                <Button className="button" onClick={handleBet}>
                    <p style={styles.p}>&nbsp;&nbsp;&nbsp;Bet&nbsp;&nbsp;&nbsp;</p>
                </Button>
           
           
                <CustomRangeSlider min={min} max={max} sliderValue={sliderValue} setSliderValue={setSliderValue} />
         
        </div>
    )
}

const styles = {
    p: {
        margin: '-2px 0px 0px 0px'
    },
    contents: {
        margin: '-20px 0px 0px 0px'
    }
}

export default Bet;