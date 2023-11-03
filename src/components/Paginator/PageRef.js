import { Col } from "reactstrap";
import {
    setFirstIdx,
    setLastIdx,
} from '../Lobby/ListLobbies';

const PageRef = (props) => {
    const { pageNumber, config } = props;
    const handleClick = () => {
        const entries = config.entries;
        let firstIdx = ((pageNumber * entries) - entries);
        let lastIdx = (pageNumber * entries);
        
        setFirstIdx(firstIdx);
        setLastIdx(lastIdx);
        config.setOpen(false);
    }

    return (
        <Col 
            style={styles.col}
            className='col-1 page-ref link-text flex jcc aic mx-auto'
            onClick={handleClick}
        >
            {pageNumber}
        </Col>
    );
}

const styles = {
    col: {
        height: 'fit-content',
    },
}

export default PageRef