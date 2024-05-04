import Login from "../../components/Login/Login";
import { AccountContextProvider } from "../../slices/Context/contextSlice";
const LoginPage = () => {

    return (
        <AccountContextProvider children={
            <Login />
        }/>
    );
}

export default LoginPage