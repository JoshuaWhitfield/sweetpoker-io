import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const AddTableButton = (props) => {
    const { func } = props;
    return (
        <Link className='styled-link flex jcc aic' style={styles.button} onClick={func}>
            <p className='mt-3 light-link-text'><strong>Create Table</strong></p>
        </Link>
    );
}

const styles = {
    button: {
        width: 'fit-content',
        height: 'fit-content'
    },

}

export default AddTableButton