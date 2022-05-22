import { Link } from "react-router-dom";
import Title from "../basicElements/Title";
import Button from "../basicElements/Button";
import Image from "../basicElements/Image";

import '../pagesStyle/Home.css';

const Home = (props) => {

    return(

        <section>
            <Title id={"home-title"} titleName={process.env.REACT_APP_HOME_NAME} />
            <Image id={"layer-img"} src={"./images/layer-1.png"}/>
            {/* <img src="./layer-2.png" />
            <img src="./layer-3.png" />
            <img src="./layer-4.png" />
            <img src="./layer-5.png" />
            <img src="./layer-6.png" />
            <img src="./layer-7.png" />
            <img src="./layer-8.png" />
            <img src="./layer-9.png" />
            <img src="./layer-10.png" />
            <img src="./layer-11.png" />
            <img src="./layer-12.png" />
            <img src="./layer-13.png" />
            <img src="./layer-14.png" />
            <img src="./layer-15.png" /> */}
            <Link to={'/logIn'}>
                <Button id={"login-btt"} buttonName={process.env.REACT_APP_LOG_IN_BUTTON}/>
            </Link>
            <Link to={'/signIn'}>
                <Button id={"login-btt"} buttonName={process.env.REACT_APP_SIGN_IN_BUTTON}/>
            </Link>
        </section>
    )
}

export default Home;


