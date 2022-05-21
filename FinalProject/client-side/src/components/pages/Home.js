import { Link } from "react-router-dom";
import Title from "../basicElements/Title";
import Button from "../basicElements/Button";

const Home = (props) => {

    return(

        <div>
            <Title titleName={process.env.REACT_APP_HOME_NAME} />
            <Button id={process.env.REACT_APP_LOG_IN_BUTTON} component={Link} to={'/login'} buttonName={process.env.REACT_APP_LOG_IN_BUTTON}/>
        </div>
    )
}

export default Home;


