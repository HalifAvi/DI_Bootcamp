import {

    DISPLAY_SIGNIN_UP_MESSAGE,
    SET_ALL_USER_DETAILS,
    SET_RECOMMENDED_CONSUPTION

} from '../reduxConstants';




export const setMessageAfterSign = (messageToSet) => {

  return{

    type : DISPLAY_SIGNIN_UP_MESSAGE,
    payload : messageToSet
  }
}


export const setAllUserParamsFromDb = (allUserParamsObj) => {

  return{

    type: SET_ALL_USER_DETAILS,
    payload : allUserParamsObj
  }
}

export const setRecommendedConsumption = () => (dispatch, getStatus) => {

  const {gender, age, weight} = getStatus().signInUpReducer;

  console.log(gender, age, weight)

  let recommendedConsumptionProtein = Number(weight)*0.8;

  let recommendedConsumptionIron = getIron(gender, age);

  let recommendedConsumptionVitaminC = 0.09; // 90 mg per day

  dispatch({

    type: SET_RECOMMENDED_CONSUPTION,
    payload : {    
      
      recommendedConsumptionVitaminC: recommendedConsumptionVitaminC,
      recommendedConsumptionIron: recommendedConsumptionIron,
      recommendedConsumptionProtein: recommendedConsumptionProtein
    }
  })
}






const getIron = (gender, age) => {

  const ageOptions = [
    
    Number(age) >= 10 && Number(age) <= 18,
    Number(age) >= 19 && Number(age) <= 30, 
    Number(age) >= 31 && Number(age) <= 50,
    Number(age) >= 51 && Number(age) <= 70,
    Number(age) > 70
  ];

  let answer;

    switch (ageOptions.indexOf(true)) {

      case 0 : answer = gender == "male" ? 0.011 : 0.015; // 11 mg

      return answer;

      case 1 : answer = gender == "male" ? 0.08 : 0.018; 

      return answer; 

      case 2 : answer = gender == "male" ? 0.08 : 0.018; 

      return answer; 

      case 3 : answer = gender == "male" ? 0.08 : 0.08; 

      return answer; 

      case 4 : answer = gender == "male" ? 0.08 : 0.08; 

      return answer;  
    }
}
