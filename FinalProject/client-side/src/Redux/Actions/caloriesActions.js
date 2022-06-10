import {

    SET_DAILY_CALORIES_AMOUNT,

} from '../reduxConstants';




export const setDailyAmountOfCalories = () => (dispatch, getStatus) => {

    const {gender, age, height, weight, activityLevel} = getStatus().signInUpReducer; // TO GET DATA FROM STORE DIRECTLY

    dispatch({
    
        type: SET_DAILY_CALORIES_AMOUNT,
        payload: getDailyCaloriesAmount(gender, age, height, weight, activityLevel)
    })
}



const getDailyCaloriesAmount = (gender, age, height, weight, activityLevel) => {

    // console.log(gender)
    // console.log(age)
    // console.log(height)
    // console.log(weight)
    // console.log(activityLevel)

    
    let BMR = gender===process.env.REACT_APP_BASE_GENDER_FST_OPTION ? 

                Number(height)*(process.env.REACT_APP_BASE_FOR_HEIGHT_MEN_BMR)+
                Number(weight)*(process.env.REACT_APP_BASE_FOR_WEIGHT_MEN_BMR)+
                Number(process.env.REACT_APP_BASE_ADDITIONAL_PARAM_MEN_BMR)-
                Number(age)*(process.env.REACT_APP_BASE_FOR_AGE_MEN_BMR)

                :

                Number(height)*(process.env.REACT_APP_BASE_FOR_HEIGHT_WOMEN_BMR)+
                Number(weight)*(process.env.REACT_APP_BASE_FOR_WEIGHT_WOMEN_BMR)+
                Number(process.env.REACT_APP_BASE_ADDITIONAL_PARAM_WOMEN_BMR)-
                Number(age)*(process.env.REACT_APP_BASE_FOR_AGE_WOMEN_BMR)

                // console.log(BMR)
                
    return  (Number(activityLevel)*BMR*(Number(process.env.REACT_APP_BASE_TERMI_EFFECT_FACTOR))).toFixed(0);
}










