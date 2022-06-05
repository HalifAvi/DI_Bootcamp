import '../BasicElementStyle/SwappingSignFrontPanel.css';


const SwappingSignFrontPanel = (props) => { 

    return(

        <>
          <div className={'swappingSignFrontPanel-formBx'}>
                <div className={'swappingSignFrontPanel-form swappingSignFrontPanel-signinForm'}>
                    <form>
                        <h3>Sign In</h3>
                        <input type={"text"} placeholder={"Username"}/>
                        <input type={"password"} placeholder={"Password"}/>
                        <input type={"submit"} value={"Login"}/>
                    </form>
                </div>

                <div className={'swappingSignFrontPanel-form swappingSignFrontPanel-signupForm'}>
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
        </>
    )
}

export default SwappingSignFrontPanel;