import { Col } from "reactstrap";
import { getCard } from "../../slices/PlayingCard/playingCardSlice";

const PlayingCard = (props) => {
    const { suit, value } = props
    let width = '83px'; let height = '120px'
    //<div style={{width: width, height: height, backgroundImage: `url(${getCard(suit, value)})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></div>
    return (
        <Col className='mx-auto'>
            <img tabIndex={0} src={require(`../../app/assets/playing-cards/${value}_of_${suit}.png`)} alt={`card ${value} of ${suit}`} style={{width: width, height: height}}/>
        </Col>
    );
}

export default PlayingCard