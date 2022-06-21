import { connect } from 'react-redux';
import '../PagesStyle/PreviousRecepies.css';
import NavBar from "../BasicElements/NavBar";
import AppLogo from '../BasicElements/AppLogo';
import MyCalendar from '../BasicElements/MyCalendar';
import Title from '../BasicElements/Title';
import { useEffect } from 'react';
import {setSpecificDayUserValuesNutrition} from "../../Redux/Actions/calendarActions.js"



const PreviousRecepies = ({setSpecificDayUserValuesNutrition, currDisplayedProtein, currDisplayedIron, currDisplayedVitaminC}) => {

    useEffect(()=> {

        const date = formatDate(new Date());

        setSpecificDayUserValuesNutrition(date)
    })

    return(
            <div className={"previousRecepies-div pattern-dots-sm slategray h-5"}>

                <div id={"main-logo-div"}>
                    <AppLogo id={"signinSignUpIntro-logo"} />
                </div> 

                <NavBar numOfPxOnNavBar={process.env.REACT_APP_BASE_PX_POS_ICON_1_NAVBAR+400} positionOnNavBar={4}/> 

                {console.log(currDisplayedProtein)}
                {console.log(currDisplayedIron)}
                {console.log(currDisplayedVitaminC)}

                <Title id={"previousRecepies-page-title"} titleName={process.env.REACT_APP_BASE_TITLE_PREV_RECIPES}/>

                <MyCalendar />

            </div>
        )
    }


    const mapStateToProps = (state) => {

        return{

            currDisplayedProtein : state.calendarReducer.currDisplayedProtein,
            currDisplayedIron : state.calendarReducer.currDisplayedIron,
            currDisplayedVitaminC : state.calendarReducer.currDisplayedVitaminC
        }
    }

    const mapDispatchToProps = (dispatch) => {

        return{

            setSpecificDayUserValuesNutrition : (date) => dispatch(setSpecificDayUserValuesNutrition(date))

        }
    }



export default connect(mapStateToProps, mapDispatchToProps)(PreviousRecepies);


function formatDate(date) {
    
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
