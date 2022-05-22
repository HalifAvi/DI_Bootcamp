import { Link } from "react-router-dom";
import Title from "../basicElements/Title";
import Button from "../basicElements/Button";

const Home = (props) => {

    return(

        <div>
            <Title titleName={process.env.REACT_APP_HOME_NAME} />
            <Link to={'/logIn'}>
                <Button id={"login-btt"} buttonName={process.env.REACT_APP_LOG_IN_BUTTON}/>
            </Link>
            <Link to={'/signIn'}>
                <Button id={"login-btt"} buttonName={process.env.REACT_APP_SIGN_IN_BUTTON}/>
            </Link>
        </div>
    )
}

export default Home;


