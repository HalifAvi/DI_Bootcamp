import Title from "./Title";
import Input from "./Input";
import Label from "./Label";
import RadioBtt from "./RadioBtt";
import '../BasicElementStyle/Form.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleAction } from "../Assistants/FormExtFunctions.js";
import genders from '../Assistants/genders.json';
import activityLevels from '../Assistants/activityLevels.json';
import UploadFile from "./UploadFile";





const Form = ({formKind, id}) => { 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [gender, setGender] = useState(process.env.REACT_APP_BASE_GENDER_DEFAULT);
    const [activityLevel, setActivityLevel] = useState(process.env.REACT_APP_BASE_ACTIVITY_LEVEL_DEFAULT);
    const [imgValue, setImgValue] = useState('');


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

                        <form onSubmit={(event)=>handleAction(event, formKind, navigate, stateObj, imgValue)}>
                            <Input inputType={"text"} onChangeEvent={(e)=>setEmail(e.target.value)} inputPlaceholder={process.env.REACT_APP_BASE_SIGN_FORM_EMAIL}/>
                            <Input inputType={"password"} onChangeEvent={(e)=>setPassword(e.target.value)} inputPlaceholder={process.env.REACT_APP_BASE_SIGN_FORM_PASSWORD}/>
                            <Input inputType={"submit"} inputValue={process.env.REACT_APP_BASE_SIGN_FORM_LOGIN_BTT}/>
                        </form>
                    :
                        <form onSubmit={(event)=>handleAction(event, formKind, navigate, stateObj, imgValue)}>
                            <span className={"form-input-signup"}>
                                <Input classN={"form-signup-input"} inputType={"text"} onChangeEvent={(e)=>setEmail(e.target.value)} inputPlaceholder={process.env.REACT_APP_BASE_SIGN_FORM_EMAIL}/>
                                <Input classN={"form-signup-input"} inputType={"password"} onChangeEvent={(e)=>setPassword(e.target.value)} inputPlaceholder={process.env.REACT_APP_BASE_SIGN_FORM_PASSWORD}/>
                            </span>
                            <span className={"form-input-signup"}>
                                <Input classN={"form-signup-input"} inputType={"text"} onChangeEvent={(e)=>setFirstName(e.target.value)} inputPlaceholder={process.env.REACT_APP_BASE_SIGN_FORM_FIRST_NAME}/>
                                <Input classN={"form-signup-input"} inputType={"text"} onChangeEvent={(e)=>setLastName(e.target.value)} inputPlaceholder={process.env.REACT_APP_BASE_SIGN_FORM_LAST_NAME}/>
                            </span>
                            <span className="form-radioBtt">
                                <Label classN={"form-sign-label"} labelName={process.env.REACT_APP_BASE_SIGN_FORM_GENDER}/>
                                <RadioBtt optionsArray={genders} onChangeEvent={(e)=>setGender(e.target.value)}/>
                            </span>
                            <span className={"form-input-signup"}>
                                <Input classN={"form-signup-input-little"} inputType={"number"} minNum={process.env.REACT_APP_BASE_SIGN_FORM_MIN_AGE} maxNum={process.env.REACT_APP_BASE_SIGN_FORM_MAX_AGE} onChangeEvent={(e)=>setAge(e.target.value)} inputPlaceholder={process.env.REACT_APP_BASE_SIGN_FORM_AGE}/>
                                <Input classN={"form-signup-input-little"} inputType={"number"} minNum={process.env.REACT_APP_BASE_SIGN_FORM_MIN_HEIGHT} maxNum={process.env.REACT_APP_BASE_SIGN_FORM_MAX_HEIGHT} onChangeEvent={(e)=>setHeight(e.target.value)} inputPlaceholder={process.env.REACT_APP_BASE_SIGN_FORM_HEIGHT}/>
                                <Input classN={"form-signup-input-little"} inputType={"number"} minNum={process.env.REACT_APP_BASE_SIGN_FORM_MIN_WEIGHT} maxNum={process.env.REACT_APP_BASE_SIGN_FORM_MAX_WEIGHT} onChangeEvent={(e)=>setWeight(e.target.value)} inputPlaceholder={process.env.REACT_APP_BASE_SIGN_FORM_WEIGHT}/>
                            </span>
                            <span className="form-radioBtt">
                                <Label classN={"form-sign-label"} labelName={process.env.REACT_APP_BASE_SIGN_FORM_ACTIVITY_LEVEL}/>
                                <RadioBtt optionsArray={activityLevels} onChangeEvent={(e)=>setActivityLevel(e.target.value)}/>
                            </span>

                            <UploadFile onChangeEvent={(e)=> { setImgValue(e.target.files[0]) }}/>

                            <Input inputType={"submit"} inputValue={formKind === process.env.REACT_APP_SIGN_IN_BUTTON ? process.env.REACT_APP_BASE_LOGIN_BTT : process.env.REACT_APP_BASE_REGISTER_BTT}/>
                        </form>
                }     
            </>
    )
}

export default Form;         
 