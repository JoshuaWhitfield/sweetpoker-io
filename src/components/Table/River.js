import PlayingCard from '../PlayingCards/PlayingCard'
import { Row } from "reactstrap";

const River = (props) => {
    let { riverArr } = props;
    if (riverArr.length > 5) riverArr = riverArr.slice(0,5)
    return (
        <Row style={styles.river}>
            {
                riverArr.map(
                    (card, idx) => {
                        return (
                            <PlayingCard 
                                key={idx} 
                                suit={card.getName().split('_')[1]} 
                                value={card.getName().split('_')[0]} 
                            />
                        );
                    }
                )
            }
        </Row>
    );
}

const styles = {
    river: {
        position: 'absolute',
        zIndex: 1,
    }
}

export default River