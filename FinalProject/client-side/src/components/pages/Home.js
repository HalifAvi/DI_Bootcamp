import { Link } from "react-router-dom";
import Title from "../basicElements/Title";
import Button from "../basicElements/Button";
import AppLogo from "../basicElements/AppLogo";

import '../pagesStyle/Home.css';
import Video from "../basicElements/Video";


const Home = (props) => {

    return(

        <div>
            <Video src={process.env.REACT_APP_BASE_VIDEO_HOME_URL} id={"home-back-video"} autoPlay muted loop />

            <div id={"home-left-side-div"}>

                <div id={"home-logo-div"}>
                    <AppLogo />
                </div>

                <div id={"home-snd-title-div"}>
                    <Title id={"home-snd-title"} titleName={process.env.REACT_APP_HOME_SND_TITLE} />
                </div>

            </div>

            <div id={"home-btt-div"}>

                <Link to={'/logIn'}>
                    <Button id={"home-login-btt"} buttonName={process.env.REACT_APP_LOG_IN_BUTTON}/>
                </Link>
                <Link to={'/signIn'}>
                    <Button id={"home-signin-btt"} buttonName={process.env.REACT_APP_SIGN_IN_BUTTON}/>
                </Link>

            </div>
        </div>
    )
}

export default Home;