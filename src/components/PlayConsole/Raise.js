import { Button, Col, Row } from "reactstrap";
import CustomRangeSlider from "../CustomRangeSlider"
import { useState } from "react";

const Raise = (props) => {
    const { min, max } = props;
    const { sliderValue, setSliderValue } = useState(Math.floor(max/2));

    const handleRaise = () => {
        console.log('Raise')
    }

    return (
        <Row>
            <Col>
                <Button className="button" onClick={handleRaise}>
                    <p>&nbsp;Raise&nbsp;</p>
                </Button>
            </Col>
            <Col>
                <CustomRangeSlider min={min} max={max} sliderValue={sliderValue} setSliderValue={setSliderValue} />
            </Col>
        </Row>
    )
}

export default Raise;