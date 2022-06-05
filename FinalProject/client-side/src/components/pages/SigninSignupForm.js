import SwappingSignBackPanel from '../BasicElements/SwappingSignBackPanel';
import SwappingSignFrontPanel from '../BasicElements/SwappingSignFrontPanel';
import Video from "../BasicElements/Video.js";
import AppLogo from '../BasicElements/AppLogo';


import '../PagesStyle/SigninSignupForm.css';

const SigninSignupForm = ({formToDisplay}) => {

    return(
        <>
            <Video src={process.env.REACT_APP_BASE_VIDEO_SIGN_FORM_URL} id={"signForm-back-video"} autoPlay muted loop />

            <div id={"signinSignUpForm-left-side-div"}>

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