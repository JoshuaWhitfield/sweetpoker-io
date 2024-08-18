import { Button } from "reactstrap"

const AllIn = () => {
    const handleAllIn = () => {
        console.log('All In')
    }
    return (
        <Button className="button" onClick={handleAllIn}>
            <p>
                &nbsp;All-In&nbsp;
            </p>
        </Button>
    )
}

export default AllIn;