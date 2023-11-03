import { Row, Col } from "reactstrap";

const TableKey = (props) => {
    let { sections } = props;

    const styles = {
        sections: {
            border: 'solid 1px rgba(58, 53, 64, 0.8)', 
            borderRight: 'none', 
            borderLeft: 'none', 
            borderTop: 'none'
        }
    }

    return (
        <>
            <Row className='discreet-card' style={{width: '88%', height: '40px'}}>
                {
                    sections.map(
                        (sect, idx) => {
                            if (!idx || idx === sections.length-1) {
                                return (
                                    <Col className='col-4 flex jcc mx-auto mt-1 light-text' key={idx} style={styles.sections}>
                                        {sect}
                                    </Col>
                                )
                            }
                            return (
                                <Col className='col-2 flex jcc mx-auto mt-1 light-text' key={idx} style={styles.sections}>
                                    {sect}
                                </Col>
                            )
                        }
                    )
                }
            </Row>
        </>
    );
}

export default TableKey