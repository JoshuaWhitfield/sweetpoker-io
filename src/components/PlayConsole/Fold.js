import { Button } from "reactstrap"

const Fold = () => {
    const handleFold = () => {
        console.log('Fold')
    }

    return (
        <Button className="button" onClick={handleFold}>
            <p style={styles.p}>
                &nbsp;&nbsp;Fold&nbsp;&nbsp;
            </p>
        </Button>
    )
}

const styles = {
    p: {
        margin: '-2px 0px 0px 0px'
    }
}

export default Fold;