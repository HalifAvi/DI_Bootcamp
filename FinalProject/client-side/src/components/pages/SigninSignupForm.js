import SwappingSignBackPanel from '../BasicElements/SwappingSignBackPanel';
import SwappingSignFrontPanel from '../BasicElements/SwappingSignFrontPanel';

import '../PagesStyle/SigninSignupForm.css';

const SigninSignupForm = (props) => {

    return(

        <section id={'signinSignupForm-section'}>
            <div id={'signinSignupForm-container'}>
                <SwappingSignBackPanel/>
                <SwappingSignFrontPanel />
            </div>
        </section>
    )
}

export default SigninSignupForm;