import { Button } from "reactstrap"

const Check = () => {
    const handleCheck = () => {
        console.log('Check')
    }

    return (
        <Button className="button" onClick={handleCheck}>
            <p>
                &nbsp;Check&nbsp;
            </p>
        </Button>
    )
}

export default Check;