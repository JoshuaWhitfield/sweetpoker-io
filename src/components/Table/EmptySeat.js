import { Button } from "reactstrap"


const EmptySeat = () => {

    const handleJoinTable = () => {
        console.log('joining table')
    } 

    return (
        <button class='button flex jcc aic' type='button' onClick={handleJoinTable}>
            <h1>&nbsp;&nbsp;+&nbsp;&nbsp;</h1>
        </button>
    )
}

export default EmptySeat;