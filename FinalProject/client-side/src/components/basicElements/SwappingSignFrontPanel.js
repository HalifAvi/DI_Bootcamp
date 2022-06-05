import '../BasicElementStyle/SwappingSignFrontPanel.css';
import Form from "../BasicElements/Form.js";


const SwappingSignFrontPanel = ({formToDisplay}) => { 

    return(

        <>
            {
                formToDisplay === process.env.REACT_APP_SIGN_IN_NAME ?

                    <div className={'swappingSignFrontPanel-formBx'}>

                        <div className={'swappingSignFrontPanel-form swappingSignFrontPanel-signinForm'}>
                            <Form formKind={process.env.REACT_APP_SIGN_IN_NAME}/>
                        </div>

                        <div className={'swappingSignFrontPanel-form swappingSignFrontPanel-signupForm'}>
                            <Form formKind={process.env.REACT_APP_SIGN_UP_NAME}/>
                        </div>

                    </div>

                :

                    <div className={'swappingSignFrontPanel-formBx'}>

                        <div className={'swappingSignFrontPanel-form swappingSignFrontPanel-signinForm'}>
                            <Form formKind={process.env.REACT_APP_SIGN_UP_NAME}/>
                        </div>

                        <div className={'swappingSignFrontPanel-form swappingSignFrontPanel-signupForm'}>
                            <Form formKind={process.env.REACT_APP_SIGN_IN_NAME}/>
                        </div>

                    </div>
            }

        </>
    )
}

export default SwappingSignFrontPanel;