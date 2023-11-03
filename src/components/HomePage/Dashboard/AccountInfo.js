import { Col } from "reactstrap";
import XYSpacing from "../../Styling/XYSpacing";

const AccountInfo = (props) => {
    const { pfp, username, balance } = props;

    return (
        <>
            <div className='flex jcc aic backlit' style={{width: '325px', height:'fit-content'}}>
                <Col className='col-5'>
                    {pfp}
                </Col>
                <Col className='fuzzy bb col-7 atc mt-2'>
                    <p><strong>{username}</strong></p>
                    <p>{balance}</p>
                </Col>
                <Col><XYSpacing width='20px'/></Col>
            </div>
        </>
    );
}

export default AccountInfo