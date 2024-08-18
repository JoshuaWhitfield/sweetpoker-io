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
        <Row>
            <Col>
                <Button className="button" onClick={handleBet}>
                    <p>&nbsp;Bet&nbsp;</p>
                </Button>
            </Col>
            <Col>
                <CustomRangeSlider min={min} max={max} sliderValue={sliderValue} setSliderValue={setSliderValue} />
            </Col>
        </Row>
    )
}

export default Bet;