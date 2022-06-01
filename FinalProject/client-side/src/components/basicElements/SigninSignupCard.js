import '../BasicElementStyle/SigninSignupCard.css';

const SigninSignupCard = (props) => {

    const moveToSignUp = () => {

        (document.querySelector('.formBx')).classList.add('active');
        (document.querySelector('#signinSignup-section')).classList.add('active');
    }

    const moveToSignIn = () => {

        (document.querySelector('.formBx')).classList.remove('active');
        (document.querySelector('#signinSignup-section')).classList.remove('active');

    }

    return(

        <section id={'signinSignup-section'}>
            <div id={'signinSignup-container'}>
                <div className={'blueBg'}>
                    <div className={'box signin'}>
                        <h2>Already Have an Account ?</h2>
                        <button onClick={moveToSignIn} className={'signinBtn'}>Sign in</button>
                    </div>
                    <div className={'box signup'}>
                        <h2>Don't Have an Account ? </h2>
                        <button onClick={moveToSignUp} className={'signupBtn'}>Sign up</button>
                    </div>
                </div>
                <div className={'formBx'}>
                    <div className={'form signinForm'}>
                        <form>
                            <h3>Sign In</h3>
                            <input type={"text"} placeholder={"Username"}/>
                            <input type={"password"} placeholder={"Password"}/>
                            <input type={"submit"} value={"Login"}/>
                        </form>
                    </div>

                    <div className={'form signupForm'}>
                        <form>
                            <h3>Sign Up</h3>
                            <input type={"text"} placeholder={"Username"}/>
                            <input type={"text"} placeholder={"Email Address"}/>
                            <input type={"password"} placeholder={"Password"}/>
                            <input type={"password"} placeholder={"Confirm password"}/>
                            <input type={"submit"} value={"Register"}/>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SigninSignupCard;