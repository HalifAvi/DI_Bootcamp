import SwappingSignBackPanel from '../BasicElements/SwappingSignBackPanel';
import SwappingSignFrontPanel from '../BasicElements/SwappingSignFrontPanel';

import '../PagesStyle/SigninSignupForm.css';

const SigninSignupForm = ({formToDisplay}) => {

    return(

        <section id={'signinSignupForm-section'}>
            <div id={'signinSignupForm-container'}>
                <SwappingSignBackPanel formToDisplay={process.env.REACT_APP_SIGN_UP_NAME}/>
                <SwappingSignFrontPanel formToDisplay={process.env.REACT_APP_SIGN_UP_NAME}/>
            </div>
        </section>
    )
}

export default SigninSignupForm;