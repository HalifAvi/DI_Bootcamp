import '../BasicElementStyle/SigninSignupCard.css';

const SigninSignupCard = (props) => {

    return(

        <div className='container'>
            <div className='blueBg'>
                <div className='box signin'>
                    <h2>Already Have an Account ? </h2>
                    <button className='signinBtn'>Sign in</button>
                </div>
                <div className='box signup'>
                    <h2>Don't Have an Account ? </h2>
                    <button className='signupBtn'>Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default SigninSignupCard;