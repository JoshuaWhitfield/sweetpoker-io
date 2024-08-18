import { Button } from "reactstrap"

const Call = () => {
    const handleCall = () => {
        console.log('Call')
    }

    return (
        <Button className="button" onClick={handleCall}>
            <p>
                &nbsp;Call&nbsp;
            </p>
        </Button>
    )
}

export default Call;