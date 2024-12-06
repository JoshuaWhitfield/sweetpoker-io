import { Button, Col, Row } from "reactstrap";
import CustomRangeSlider from "../CustomRangeSlider"
import { useState } from "react";

const Raise = (props) => {
    const { min, max } = props;
    const [ sliderValue, setSliderValue ] = useState(Math.floor(max/2));

    const handleRaise = () => {
        console.log('Raise')
    }

    const handleChange = (e) => {
        if (e.target.value > max) e.target.value = max;
        setSliderValue(e.target.value);
    }

    return (
        <div className="flex fdr jcc aic" style={styles.contents}>
            
                <Button className="button" onClick={handleRaise}>
                    <p style={styles.p}>&nbsp;&nbsp;&nbsp;Raise&nbsp;&nbsp;&nbsp;</p>
                </Button>
           
           
                <CustomRangeSlider min={min} max={max} sliderValue={sliderValue} setSliderValue={setSliderValue} onChange={handleChange} />
         
        </div>
    )
}

const styles = {
    p: {
        margin: '2px 5px 5px 5px'
    },
    contents: {
        margin: '-20px 0px 0px 0px'
    }
}

export default Raise;