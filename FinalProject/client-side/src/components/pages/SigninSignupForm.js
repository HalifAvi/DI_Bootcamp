import SwappingSignBackPanel from '../BasicElements/SwappingSignBackPanel';
import SwappingSignFrontPanel from '../BasicElements/SwappingSignFrontPanel';
import Video from "../BasicElements/Video.js";
import AppLogo from '../BasicElements/AppLogo';
import { Link } from "react-router-dom";
import Image from "../BasicElements/Image";




import '../PagesStyle/SigninSignupForm.css';

const SigninSignupForm = ({formToDisplay}) => {

    return(
        <>


            <Video src={process.env.REACT_APP_BASE_VIDEO_SIGN_FORM_URL} id={"signForm-back-video"} autoPlay muted loop />

            <div id={"signinSignUpForm-left-side-div"}>

            <Link to={formToDisplay === process.env.REACT_APP_SIGN_UP_NAME  ?
                    process.env.REACT_APP_BASE_SIGN_UP_INTRO_PATH :
                    process.env.REACT_APP_BASE_SIGN_IN_INTRO_PATH}>
                <Image id={"signinSignupForm-back-icon"} src={process.env.REACT_APP_BASE_BACK_ICON_URL}/>
            </Link>

            <Link to={process.env.REACT_APP_BASE_HOME_PATH}>
                    <Image id={"signinSignUpForm-home-icon"} src={process.env.REACT_APP_BASE_HOME_ICON_URL}/>
            </Link>

                <div id={"signinSignUpForm-logo-div"}>
                    <AppLogo id={"signinSignUpIntro-logo"} />
                </div>
                <section id={'signinSignupForm-section'}>
                    <div id={'signinSignupForm-container'}>
                        <SwappingSignBackPanel formToDisplay={formToDisplay}/>
                        <SwappingSignFrontPanel formToDisplay={formToDisplay}/>
                    </div>
                </section>
            </div>
        </>
    )
}

export default SigninSignupForm;