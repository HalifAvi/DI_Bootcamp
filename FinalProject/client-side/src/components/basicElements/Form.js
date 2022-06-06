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
                            <Input inputType={"text"} onChangeEvent={(e)=>setEmail(e.target.value)} inputPlaceholder={"Email Address"}/>
                            <Input inputType={"password"} onChangeEvent={(e)=>setPassword(e.target.value)} inputPlaceholder={"Password"}/>
                            <Input inputType={"submit"} inputValue={"Register"}/>
                        </form>
                }
                
            </>
    )
}

export default Form;




        //             <TextField onChange={(e)=>setFirstName(e.target.value)} sx={{m:1}} id='firstName' label='Enter your first name' />
        //             <TextField onChange={(e)=>setLastName(e.target.value)} sx={{m:1}} id='lastName' label='Enter your last name' /> 
        //             <TextField onChange={(e)=>setAge(e.target.value)} sx={{m:1}} id='age' label='Enter your age' /> 
        //             <TextField onChange={(e)=>setHeight(e.target.value)} sx={{m:1}} id='height' label='Enter your height' /> 
        //             <TextField onChange={(e)=>setWeight(e.target.value)} sx={{m:1}} id='weight' label='Enter your weight' /> 

        //             <Button onClick={()=>setGender("male")} variant="contained">Male</Button>       
        //             <Button onClick={()=>setGender("female")} variant="contained">Female</Button>     

        //             <Button onClick={()=>setActivityLevel(process.env.REACT_APP_BASE_ACTIVITY_LEVEL_LOW)} variant="contained">Low</Button>       
        //             <Button onClick={()=>setActivityLevel(process.env.REACT_APP_BASE_ACTIVITY_LEVEL_LIGHT)} variant="contained">Light</Button>  
        //             <Button onClick={()=>setActivityLevel(process.env.REACT_APP_BASE_ACTIVITY_LEVEL_MODERATE)} variant="contained">Moderate</Button>       
        //             <Button onClick={()=>setActivityLevel(process.env.REACT_APP_BASE_ACTIVITY_LEVEL_HIGH)} variant="contained">High</Button>           
        //             <Button onClick={()=>setActivityLevel(process.env.REACT_APP_BASE_ACTIVITY_LEVEL_VERY_HIGH)} variant="contained">Very High</Button>           
 