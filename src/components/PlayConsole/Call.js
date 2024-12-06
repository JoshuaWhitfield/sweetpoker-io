import { Button } from "reactstrap"

const Call = () => {
    const handleCall = () => {
        console.log('Call')
    }

    return (
        <Button className="button" onClick={handleCall}>
            <p style={styles.p}>
                &nbsp;&nbsp;Call&nbsp;&nbsp;
            </p>
        </Button>
    )
}

const styles = {
    p: {
        margin: '2px 5px 5px 5px'
    }
}

export default Call;