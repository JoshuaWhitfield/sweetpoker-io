import { Col } from "reactstrap";
import CardContent from "./CardContent";

const Card = (props) => {
    let { width, height, content } = props
    if (!content) return null
    if (!width) width = '200px'
    if (!height) height = '200px'

    return (
        <div className='content-center basic-card' style={{width: width, height: height}}>
            <CardContent content={content} />
        </div>
    );
}

export default Card