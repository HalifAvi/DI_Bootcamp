import Title from "./Title";
import Input from "./Input";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Form = ({formKind, id}) => { 

    return(
            <>
                <Title id={id} titleName={formKind}/>
                {
                    formKind === process.env.REACT_APP_SIGN_IN_BUTTON ? 

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
                            <Input inputType={"submit"} inputValue={"Register"}/>
                        </form>
                }
                
            </>
    )
}

export default Form;