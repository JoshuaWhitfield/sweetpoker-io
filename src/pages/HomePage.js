import Dashboard from "../components/HomePage/Dashboard/Dashboard.js";
import Interface from "../components/HomePage/Interface/Interface.js";
import { store } from "../store.js";
import { Row, Col } from "reactstrap";

const HomePage = () => {
    console.log('account:'); console.log(store.getState().account);
    console.log('balance:'); console.log(store.getState().balance);
    //, display: 'flex', justifyContent: 'center', alignItems: 'center'
    return (
        <>
            <Row className='fdr flex jcc' style={{width: 'fit-content', height: 'fit-content'}}>
                <Col className='col-5'>
                    <Dashboard />
                </Col>
                
                <Col className='col-7 flex fuzzy2'>
                    <Interface />
                </Col>
            </Row>
        </>
    );
}

export default HomePage