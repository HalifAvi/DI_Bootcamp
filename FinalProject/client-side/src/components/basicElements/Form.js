import Title from "./Title";
import Input from "./Input";
import '../BasicElementStyle/Form.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleAction } from "../Assistants/FormExtFunctions.js";
import { useEffect } from "react";


const Form = ({formKind, id}) => { 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [gender, setGender] = useState('');
    const [activityLevel, setActivityLevel] = useState('');

    const navigate = useNavigate();

    const stateObj = {

        email,
        password,
        firstName,
        lastName, 
        age,
        height, 
        weight,
        gender, 
        activityLevel
    }

    return(
            <>
                <Title id={id} titleName={formKind}/>
                {
                    formKind === process.env.REACT_APP_SIGN_IN_BUTTON ? 

                        <form onSubmit={(event)=>handleAction(event, formKind, navigate, stateObj)}>
                            <Input inputType={"text"} onChangeEvent={(e)=>setEmail(e.target.value)} inputPlaceholder={process.env.REACT_APP_BASE_SIGN_FORM_EMAIL}/>
                            <Input inputType={"password"} onChangeEvent={(e)=>setPassword(e.target.value)} inputPlaceholder={process.env.REACT_APP_BASE_SIGN_FORM_PASSWORD}/>
                            <Input inputType={"submit"} inputValue={process.env.REACT_APP_BASE_SIGN_FORM_LOGIN_BTT}/>
                        </form>
                    :
                        <form onSubmit={(event)=>handleAction(event, formKind, navigate, stateObj)}>
                            <Input classN={"form-signup-input"} inputType={"text"} onChangeEvent={(e)=>setEmail(e.target.value)} inputPlaceholder={process.env.REACT_APP_BASE_SIGN_FORM_EMAIL}/>
                            <Input classN={"form-signup-input"} inputType={"password"} onChangeEvent={(e)=>setPassword(e.target.value)} inputPlaceholder={process.env.REACT_APP_BASE_SIGN_FORM_PASSWORD}/>
                            <Input classN={"form-signup-input"} inputType={"number"} minNum={process.env.REACT_APP_BASE_SIGN_FORM_MIN_AGE} maxNum={process.env.REACT_APP_BASE_SIGN_FORM_MAX_AGE} onChangeEvent={(e)=>setAge(e.target.value)} inputPlaceholder={process.env.REACT_APP_BASE_SIGN_FORM_AGE}/>
                            <Input classN={"form-signup-input"} inputType={"number"} minNum={process.env.REACT_APP_BASE_SIGN_FORM_MIN_HEIGHT} maxNum={process.env.REACT_APP_BASE_SIGN_FORM_MAX_HEIGHT} onChangeEvent={(e)=>setHeight(e.target.value)} inputPlaceholder={process.env.REACT_APP_BASE_SIGN_FORM_HEIGHT}/>
                            <Input classN={"form-signup-input"} inputType={"number"} minNum={process.env.REACT_APP_BASE_SIGN_FORM_MIN_WEIGHT} maxNum={process.env.REACT_APP_BASE_SIGN_FORM_MAX_WEIGHT} onChangeEvent={(e)=>setWeight(e.target.value)} inputPlaceholder={process.env.REACT_APP_BASE_SIGN_FORM_WEIGHT}/>
                            <Input classN={"form-signup-input"} inputType={"text"} onChangeEvent={(e)=>setFirstName(e.target.value)} inputPlaceholder={process.env.REACT_APP_BASE_SIGN_FORM_FIRST_NAME}/>
                            <Input classN={"form-signup-input"} inputType={"text"} onChangeEvent={(e)=>setLastName(e.target.value)} inputPlaceholder={process.env.REACT_APP_BASE_SIGN_FORM_LAST_NAME}/>
                            <Input inputType={"submit"} inputValue={"Register"}/>
                        </form>
                }
                
            </>
    )
}

export default Form;


        //             <Button onClick={()=>setActivityLevel(process.env.REACT_APP_BASE_ACTIVITY_LEVEL_LOW)} variant="contained">Low</Button>       
        //             <Button onClick={()=>setActivityLevel(process.env.REACT_APP_BASE_ACTIVITY_LEVEL_LIGHT)} variant="contained">Light</Button>  
        //             <Button onClick={()=>setActivityLevel(process.env.REACT_APP_BASE_ACTIVITY_LEVEL_MODERATE)} variant="contained">Moderate</Button>       
        //             <Button onClick={()=>setActivityLevel(process.env.REACT_APP_BASE_ACTIVITY_LEVEL_HIGH)} variant="contained">High</Button>           
        //             <Button onClick={()=>setActivityLevel(process.env.REACT_APP_BASE_ACTIVITY_LEVEL_VERY_HIGH)} variant="contained">Very High</Button>           
 