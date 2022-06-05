import '../BasicElementStyle/SwappingSignBackPanel.css';
import Button from './Button';
import Title from './Title';

const SwappingSignBackPanel = (props) => {

    const moveToSignUp = () => {

        (document.querySelector('.swappingSignFrontPanel-formBx')).classList.add('active');
        (document.querySelector('#signinSignupForm-section ')).classList.add('active');
    }

    const moveToSignIn = () => {

        (document.querySelector('.swappingSignFrontPanel-formBx')).classList.remove('active');
        (document.querySelector('#signinSignupForm-section ')).classList.remove('active');

    }

    return(

        <>
          <div className={"SwappingSignBackPanel-container"}>
                <div className={'swappingSignBackPanel-box signin'}>
                    <Title id={"signinSignupForm-title"} titleName={process.env.REACT_APP_BASE_SIGNIN_SENTENCE}/> 
                    <Button id={"signinSignupForm-swipe-signin-btt"} buttonName={process.env.REACT_APP_SIGN_IN_BUTTON} onClickEvent={moveToSignIn}/>
                </div>
                <div className={'swappingSignBackPanel-box signup'}>
                    <Title id={"signinSignupForm-title"} titleName={process.env.REACT_APP_BASE_SIGNUP_SENTENCE}/> 
                    <Button id={"signinSignupForm-swipe-signup-btt"} buttonName={process.env.REACT_APP_SIGN_UP_BUTTON} onClickEvent={moveToSignUp}/>
                </div>
            </div>   
        </>
    )
}

export default SwappingSignBackPanel;