import { Row, Col } from "reactstrap";
import PageRef from "./PageRef";
import { roundUpFloat } from "../../utils/formatNumbers";
import LeftCaret from "./LeftCaret";
import RightCaret from "./RightCaret";
import { groupBy } from "../../utils/formatArrays";
import {
    index,
} from '../../pages/lobby/LobbyPage';

const Paginator = (props) => {
    const { config, length } = props;
    let pages = Array.from({ length: roundUpFloat(length / config.entries) }, (_, i) => i + 1);

    if (pages.length === 1) return null; /* 
        if only one page exists, 
        there is no need for pagination.
    */

    pages = groupBy(pages);

    return (
        <Row 
            className='flex jcc aic'
            style={styles.masterRow}
        >
            <LeftCaret pages={pages}/>
            <Col className='col-10 flex jcc aic'>
                <Row 
                    className='paginator flex jcc aic'
                    style={styles.row}
                >
                    {
                        pages[index].map(
                            (page, idx) => {
                                return (
                                    <PageRef key={idx} pageNumber={page} config={config} />
                                );
                            }
                        )
                    }  
                </Row>
            </Col>
            <RightCaret pages={pages} />
        </Row>
    );
}

const styles = {
    masterRow: {
        height: 'fit-content',
        width: '500px',
    },
    row: {
        height: 'fit-content',
        width: 'fit-content', //320px
    },
}

export default Paginator