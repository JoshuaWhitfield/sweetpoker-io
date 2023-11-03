import PlayingCard from '../PlayingCards/PlayingCard'
import { Row } from "reactstrap";

const River = (props) => {
    let { riverArr } = props;
    if (riverArr.length > 5) riverArr = riverArr.slice(0,5)
    console.log(riverArr)
    return (
        <Row>
            {
                riverArr.map(
                    (card_name, idx) => {
                        let value = card_name.split('_')[0]
                        let suit = card_name.split('_')[1]
                        return (
                            <PlayingCard key={idx} suit={suit} value={value} />
                        );
                    }
                )
            }
        </Row>
    );
}

export default River