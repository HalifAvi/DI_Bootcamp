import '../BasicElementStyle/PersonalDetailsCard.css';
import React from "react";
import { connect } from "react-redux";
import Image from "../BasicElements/Image";
import Title from "../BasicElements/Title";





const PersonalDetailsCard = ({firstName, lastName, age, fileName, dailyAmountOfCalories}) => { 

    return(
        <div id={"personalDetailsCard-container"} className={"pattern-dots-sm slategray h-5"}>
            <div id={"personalDetailsCard-img-container"}>
                <Image id={"personalDetailsCard-img"} src={`${process.env.REACT_APP_BASE_USER_IMG_BASE_URL}${fileName}`}/>
                <Title id={"personalDetailsCard-pressOnMe-title"} titleName={process.env.REACT_APP_PERSONAL_DETAILS_CARD_PRESS_ON_ME_TITLE}/>
                <Title id={"personalDetailsCard-nameAndAge-title"} titleName={`${firstName} ${lastName}, ${age}, ${dailyAmountOfCalories}`}/>
            </div>
        </div>  
    )
} 



const mapStateToProps = (state) => {

    return{

        firstName : state.signInUpReducer.firstName,
        lastName : state.signInUpReducer.lastName,
        age : state.signInUpReducer.age,
        fileName : state.signInUpReducer.fileName,

        dailyAmountOfCalories : state.caloriesReducer.dailyAmountOfCalories
    }
}


export default connect(mapStateToProps, null)(PersonalDetailsCard);         
 