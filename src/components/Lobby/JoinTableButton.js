import { Link, useNavigate } from "react-router-dom"
import { Button } from "reactstrap"
import { useAccount } from "../../slices/Context/contextSlice"

const JoinTableButton = ({ handleSubmit }) => {
    const account = useAccount()

    if (account.isLoggedIn.value) {
        return (
            <Link className='styled-link' to={'/lobby/play'} target='_self'>
                <Button className='button mx-auto flex jcc' type='submit' onClick={handleSubmit} style={{ height: '43px', width: '86px', border: 'none' }}> 
                    <p><strong>join</strong></p>
                </Button>
            </Link>
        )
    }

    return (
        <Link className='styled-link' to={'/login'} target='_self'>
            <Button className='button mx-auto flex jcc' type='submit' onClick={() => {alert('Log in to join table')}} style={{ height: '43px', width: '86px', border: 'none' }}> 
                <p><strong>join</strong></p>
            </Button>
        </Link>
    )
}

export default JoinTableButton