import Title from "./Title";
import Input from "./Input";

const Form = ({formKind}) => { 

    return(
            <>
                <Title titleName={formKind}/>
                {
                    formKind === process.env.REACT_APP_SIGN_IN_NAME ? 

                        <form>
                            <Input inputType={"text"} inputPlaceholder={"Username"}/>
                            <Input inputType={"password"} inputPlaceholder={"Password"}/>
                            <Input inputType={"submit"} inputValue={"LogIn"}/>
                        </form>
                    :
                        <form>
                            <Input inputType={"text"} inputPlaceholder={"Username"}/>
                            <Input inputType={"text"} inputPlaceholder={"Email Address"}/>
                            <Input inputType={"password"} inputPlaceholder={"Password"}/>
                            <Input inputType={"password"} inputPlaceholder={"Confirm password"}/>
                            <Input inputType={"submit"} inputValue={"Register"}/>
                        </form>
                }
                
            </>
    )
}

export default Form;