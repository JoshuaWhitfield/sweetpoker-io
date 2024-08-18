import { Button } from "reactstrap"

const Check = () => {
    const handleCheck = () => {
        console.log('Check')
    }

    return (
        <Button className="button" onClick={handleCheck}>
            <p style={styles.p}>
                &nbsp;Check&nbsp;
            </p>
        </Button>
    )
}

const styles = {
    p: {
        margin: '-2px 0px 0px 0px'
    }
}

export default Check;