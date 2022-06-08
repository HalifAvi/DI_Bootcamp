import axios from 'axios';


//////////////////////////////
import {toast} from "react-toastify";


export const handleAction = async (event, formKind, navigate, stateObj, imgValue, setMessageAfterSign) => {

    event.preventDefault();

    const { 

            emailSignIn,
            emailSignUp,
            passwordSignIn,
            passwordSignUp,
            firstName,
            lastName, 
            age,
            height, 
            weight,
            gender, 
            activityLevel

        } = stateObj;

        // Here we have the file with all the details
        console.log("imgValue", imgValue)

    if(formKind === process.env.REACT_APP_SIGN_UP_BUTTON){

        try{ 

            // Because we also sending an image we need to append everything to formData
            const formData = new FormData();
            formData.append('file', imgValue);
            formData.append('email', emailSignUp);
            formData.append('password', passwordSignUp);
            formData.append('firstName', firstName);
            formData.append('lastName', lastName);
            formData.append('age', age);
            formData.append('height', height);
            formData.append('weight', weight);
            formData.append('gender', gender);
            formData.append('activityLevel', activityLevel);


            let response = await axios.post(process.env.REACT_APP_BASE_URL + process.env.REACT_APP_SIGN_UP_URL,

                formData
            ,{

                withCredentials: true,
                // The 'Content-type' is according to 'form-data' cause we want to send here also an image
                headers: {

                    'Access-Control-Allow-Origin' : '*',
                    'Content-Type' : 'multipart/form-data'
                }
            })

            console.log("signup response", response.data.msg);

            changeMessageBackgroundColor(process.env.REACT_APP_BASE_SUCCESS_STYLE);

            // Dispath the action
            setMessageAfterSign(response.data.msg);

            // Navigate to signin in case the registration successfuly
            navigate(process.env.REACT_APP_BASE_SIGN_IN_FORM_PATH);

        }
        catch(e) {

            console.log("signup response", e.response.data.msg);

            changeMessageBackgroundColor(process.env.REACT_APP_BASE_FAILD_STYLE);

            // Dispath the action
            setMessageAfterSign(e.response.data.msg);

            // setMessage(e.response.data.msg);
            // toast.error(e.response.data.msg);
        }

    }else{ // signin!!!

        try{

            let response = await axios.post(process.env.REACT_APP_BASE_URL + process.env.REACT_APP_SIGN_IN_URL,
                {
                    email: emailSignIn, 
                    password: passwordSignIn
                },
                {

                withCredentials: true,
                headers: {

                    'Access-Control-Allow-Origin' : '*',
                    'Content-Type' : 'application/json'
                }
            })


            // Dispath the action
            setMessageAfterSign(response.data.msg);
            

            console.log("signin response", response.data.msg);

            // Navigate to main page in case login successfuly
            navigate(process.env.REACT_APP_BASE_LOADING_PAGE_PATH + 
                    process.env.REACT_APP_BASE_MAIN_PATH + "/" +
                    process.env.REACT_APP_BASE_LOADING_MAIN_PAGE_TIME)

        }
        catch(e){

            console.log(e.response.data.msg);

            changeMessageBackgroundColor(process.env.REACT_APP_BASE_FAILD_STYLE);

            // Dispath the action
            setMessageAfterSign(e.response.data.msg);

            // setMessage(e.response.data.msg);
            // toast.error(e.response.data.msg);
        }
    }
}


const changeMessageBackgroundColor = (style) => {

    const messageTitles = (document.querySelectorAll('#swappingSignBackPanel-signMessage-title'));

    [...messageTitles].map(item=>{

        item.setAttribute("style", style);
    })

}
