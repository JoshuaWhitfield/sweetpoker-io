import { Button } from "reactstrap"

const Fold = () => {
    const handleFold = () => {
        console.log('Fold')
    }

    return (
        <Button className="button" onClick={handleFold}>
            <p>
                &nbsp;Fold&nbsp;
            </p>
        </Button>
    )
}

export default Fold;