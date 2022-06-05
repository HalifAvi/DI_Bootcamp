import '../BasicElementStyle/SwappingSignBackPanel.css';
import Button from './Button';
import Title from './Title';
import {moveToSignIn, moveToSignUp} from "../Assistants/SwappingSignBackPanelExtFunctions.js"


const SwappingSignBackPanel = ({formToDisplay}) => {

    return(

        <>
        {
            formToDisplay === process.env.REACT_APP_SIGN_IN_NAME ?

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

            :

            <div className={"SwappingSignBackPanel-container"}>

                <div className={'swappingSignBackPanel-box signup'}>
                    <Title id={"signinSignupForm-title"} titleName={process.env.REACT_APP_BASE_SIGNUP_SENTENCE}/> 
                    <Button id={"signinSignupForm-swipe-signup-btt"} buttonName={process.env.REACT_APP_SIGN_UP_BUTTON} onClickEvent={moveToSignIn}/>
                </div>
                <div className={'swappingSignBackPanel-box signin'}>
                    <Title id={"signinSignupForm-title"} titleName={process.env.REACT_APP_BASE_SIGNIN_SENTENCE}/> 
                    <Button id={"signinSignupForm-swipe-signin-btt"} buttonName={process.env.REACT_APP_SIGN_IN_BUTTON} onClickEvent={moveToSignUp}/>
                </div>

            </div>   
        }

    </>
    )
}

export default SwappingSignBackPanel;