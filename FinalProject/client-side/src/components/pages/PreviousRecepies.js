import { connect } from 'react-redux';
import '../PagesStyle/PreviousRecepies.css';
import NavBar from "../BasicElements/NavBar";
import CaloriesScale from "../BasicElements/CaloriesScale";
import AppLogo from '../BasicElements/AppLogo';
import Title from '../BasicElements/Title';



const PreviousRecepies = (props) => {

    return(
            <div className={"favoritesRecepies-div pattern-dots-sm slategray h-5"}>

                <div id={"main-logo-div"}>
                    <AppLogo id={"signinSignUpIntro-logo"} />
                </div> 

                <NavBar numOfPxOnNavBar={process.env.REACT_APP_BASE_PX_POS_ICON_1_NAVBAR+200} positionOnNavBar={2}/> 
            
                <div className={"favoritesRecepies-caloriesScale-div"}>
                    <CaloriesScale movementNumbers={false}/> 
                </div>    

            </div>
        )
    }

    const mapStateToProps = (state) => {

        return{

        }
    }



export default connect(mapStateToProps, null)(PreviousRecepies);



