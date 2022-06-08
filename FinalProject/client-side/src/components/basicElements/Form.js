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
import { connect } from "react-redux";
import { setMessageAfterSign, setAllUserParamsFromDb } from "../../Redux/Actions/signInUpActions.js";


const Form = ({formKind, id, setMessageAfterSign, setAllUserParamsFromDb}) => { 

    const [emailSignIn, setEmailSignIn] = useState('');
    const [passwordSignIn, setPasswordSignIn] = useState('');
    const [emailSignUp, setEmailSignUp] = useState('');
    const [passwordSignUp, setPasswordSignUp] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [gender, setGender] = useState(process.env.REACT_APP_BASE_GENDER_DEFAULT);
    const [activityLevel, setActivityLevel] = useState(process.env.REACT_APP_BASE_ACTIVITY_LEVEL_DEFAULT);
    const [imgValue, setImgValue] = useState(process.env.REACT_APP_BASE_DEFAULT_IMAGE_URL);


    const navigate = useNavigate();

    const stateObj = {

        emailSignIn, setEmailSignIn,
        emailSignUp, setEmailSignUp,
        passwordSignIn, setPasswordSignIn,
        passwordSignUp, setPasswordSignUp,
        firstName, setFirstName,
        lastName, setLastName, 
        age, setAge,
        height, setHeight, 
        weight, setWeight,
        gender, setGender,
        activityLevel, setActivityLevel,
        setImgValue
    }


    return(
        
            <>
                <Title id={id} titleName={formKind} />
                {
                    formKind === process.env.REACT_APP_SIGN_IN_BUTTON ? 

                        <form onSubmit={(event)=>handleAction(event, formKind, navigate, stateObj, imgValue, setMessageAfterSign, setAllUserParamsFromDb)}>
                            <Input inputType={"text"} onChangeEvent={(e)=>setEmailSignIn(e.target.value)} inputPlaceholder={process.env.REACT_APP_BASE_SIGN_FORM_EMAIL}/>
                            <Input inputType={"password"} onChangeEvent={(e)=>setPasswordSignIn(e.target.value)} inputPlaceholder={process.env.REACT_APP_BASE_SIGN_FORM_PASSWORD}/>
                            <Input inputType={"submit"} inputValue={process.env.REACT_APP_BASE_SIGN_FORM_LOGIN_BTT}/>
                        </form>
                    :
                        <form onSubmit={(event)=>handleAction(event, formKind, navigate, stateObj, imgValue, setMessageAfterSign, setAllUserParamsFromDb)}>
                            <span className={"form-input-signup"}>
                                <Input classN={"form-signup-input"} inputType={"text"} onChangeEvent={(e)=>setEmailSignUp(e.target.value)} inputPlaceholder={process.env.REACT_APP_BASE_SIGN_FORM_EMAIL}/>
                                <Input classN={"form-signup-input"} inputType={"password"} onChangeEvent={(e)=>setPasswordSignUp(e.target.value)} inputPlaceholder={process.env.REACT_APP_BASE_SIGN_FORM_PASSWORD}/>
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


const mapDispatchToProps = (dispatch) => {

    return{

        setMessageAfterSign : (messageToSet) => dispatch( setMessageAfterSign(messageToSet) ),
        setAllUserParamsFromDb : (allUserParamsObj) => dispatch( setAllUserParamsFromDb(allUserParamsObj) )
    }
}


export default connect(null, mapDispatchToProps)(Form);         
 