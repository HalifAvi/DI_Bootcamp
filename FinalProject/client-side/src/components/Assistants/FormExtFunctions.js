import axios from 'axios';


//////////////////////////////
import {toast} from "react-toastify";



export const handleAction = async (event, formKind, navigate, stateObj) => {

    event.preventDefault();

    const { email,
            password,
            firstName,
            lastName, 
            age,
            height, 
            weight,
            gender, 
            activityLevel} = stateObj;

    if(formKind === process.env.REACT_APP_SIGN_UP_BUTTON){

        try{ 

            let response = await axios.post(process.env.REACT_APP_BASE_URL + process.env.REACT_APP_SIGN_UP_URL,{
                email, 
                password,
                firstName,
                lastName, 
                age,
                height, 
                weight,
                gender, 
                activityLevel
            },{

                withCredentials: true,
                headers: {

                    'Access-Control-Allow-Origin' : '*',
                    'Content-Type' : 'application/json'
                }
            })

            console.log("signup response", response);

            // Navigate to signin in case the registration successfuly
            navigate(process.env.REACT_APP_BASE_SIGN_IN_FORM_PATH);

        }
        catch(e) {

            console.log(e);
            // setMessage(e.response.data.msg);
            // toast.error(e.response.data.msg);
        }

    }else{ // signin!!!

        try{

            let response = await axios.post(process.env.REACT_APP_BASE_URL + process.env.REACT_APP_SIGN_IN_URL,{
                email: email, 
                password: password
            },{

                withCredentials: true,
                headers: {

                    'Access-Control-Allow-Origin' : '*',
                    'Content-Type' : 'application/json'
                }
            })

            console.log("signin response", response);

            // Navigate to home in case login successfuly
            navigate(process.env.REACT_APP_BASE_CONTENT_PATH);

        }
        catch(e){

            console.log(e);
            // setMessage(e.response.data.msg);
            // toast.error(e.response.data.msg);
        }
    }
}
