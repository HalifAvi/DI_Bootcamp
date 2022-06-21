import { connect } from 'react-redux';
import '../PagesStyle/PreviousRecepies.css';
import NavBar from "../BasicElements/NavBar";
import AppLogo from '../BasicElements/AppLogo';
import MyCalendar from '../BasicElements/MyCalendar';
import Title from '../BasicElements/Title';


import SliderCards from '../BasicElements/SliderCards';



const PreviousRecepies = (props) => {

    return(
            <div className={"previousRecepies-div pattern-dots-sm slategray h-5"}>

                <div id={"main-logo-div"}>
                    <AppLogo id={"signinSignUpIntro-logo"} />
                </div> 

                <NavBar numOfPxOnNavBar={process.env.REACT_APP_BASE_PX_POS_ICON_1_NAVBAR+400} positionOnNavBar={4}/> 
            
                    <MyCalendar />
{/* 
                <div className={"previousRecepies-calendar"}>
                    <MyCalendar />
                </div> */}
            </div>
        )
    }

    const mapStateToProps = (state) => {

        return{

        }
    }



export default connect(mapStateToProps, null)(PreviousRecepies);



