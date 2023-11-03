import { Col } from "reactstrap";
import { conditionalRender } from "../../../utils/conditionalRender";
import { store } from "../../../store";

const BestHand = (props) => {
    let { bestHandsArr } = props;

    return (
        <>
            <div className='flex jcc aic fdc backlit' style={{width: '325px', height:'fit-content'}}>
                <Col className='col-6 atc'>
                    <p><strong>Best Hands:</strong></p>
                </Col>

                {
                    conditionalRender(
                        (store.getState().account.logged_in),
                        <p>logged in!</p>,
                        <>
                            <Col className='col-9 atc fuzzy'>
                                <p><strong>....</strong></p>
                            </Col>
                            <Col className='col-9 atc fuzzy'>
                                <p><strong>....</strong></p>
                            </Col>
                        </>
                    )
                }
            </div>
        </>
    );
}

export default BestHand;