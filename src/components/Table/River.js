import PlayingCard from '../PlayingCards/PlayingCard'
import { Row } from "reactstrap";

const River = (props) => {
    let { riverArr } = props;
    if (riverArr.length > 5) riverArr = riverArr.slice(0,5)
    return (
        <Row>
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

export default River