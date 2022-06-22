import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import SigninSignupIntro from './Components/Pages/SigninSignupIntro';
import SigninSignupForm from './Components/Pages/SigninSignupForm';
import Main from './Components/Pages/Main';
import LoadingPage from './Components/Pages/LoadingPage';
import FavoritesRecepies from './Components/Pages/FavoritesRecepies';
import GeneralRecepies from './Components/Pages/GeneralRecepies';
import TodayRecpies from './Components/Pages/TodayRecpies';
import PreviousRecepies from './Components/Pages/PreviousRecepies';
import Settings from './Components/Pages/Settings';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setAllUserParamsFromDb} from "./Redux/Actions/signInUpActions";
import { setAmountOfCalories } from "./Redux/Actions/caloriesActions.js";
import { setAllDefaultRecipesArray } from "./Redux/Actions/recipesActions.js";
import { setTodayRecipesArray, setFavoritesRecpies }  from "./Redux/Actions/recipesActions.js";
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from "react-router-dom";




function App() {

  const navigate = useNavigate();

  useEffect(()=>{

     //Will refresh page at 00:00:05 and 30sec, daily.
    refreshAt(21,0,5, navigate);
  })

  return (
    <div>
      <Routes>
        <Route path={process.env.REACT_APP_BASE_PATH} element={<Home />} />
        <Route path={process.env.REACT_APP_BASE_HOME_PATH} element={<Home />} />
        <Route path={process.env.REACT_APP_BASE_SIGN_UP_INTRO_PATH} element={<SigninSignupIntro pageToDisplay={process.env.REACT_APP_SIGN_UP_NAME} />} />
        <Route path={process.env.REACT_APP_BASE_SIGN_IN_INTRO_PATH} element={<SigninSignupIntro pageToDisplay={process.env.REACT_APP_SIGN_IN_NAME} />} />
        <Route path={process.env.REACT_APP_BASE_SIGN_UP_FORM_PATH} element={<SigninSignupForm formToDisplay={process.env.REACT_APP_SIGN_UP_NAME} />} />
        <Route path={process.env.REACT_APP_BASE_SIGN_IN_FORM_PATH} element={<SigninSignupForm formToDisplay={process.env.REACT_APP_SIGN_IN_NAME} />} />
        <Route path={process.env.REACT_APP_BASE_MAIN_PATH} element={<Main />} />
        <Route path={process.env.REACT_APP_BASE_LOADING_PAGE_PATH + "/:nextPage/:time"} element={<LoadingPage />} />
        <Route path={process.env.REACT_APP_BASE_FAV_RECEPIES_PATH} element={<FavoritesRecepies />} />
        <Route path={process.env.REACT_APP_BASE_GENERAL_RECEPIES_PATH} element={<GeneralRecepies />} />
        <Route path={process.env.REACT_APP_BASE_TODAY_PATH} element={<TodayRecpies />} />
        <Route path={process.env.REACT_APP_BASE_PREV_RECEPIES_PATH} element={<PreviousRecepies />} />
        <Route path={process.env.REACT_APP_BASE_SETTINGS_PATH} element={<Settings />} />
      </Routes> 

    </div>
  )
}

const mapDispatchToProps = (dispatch) => {

  return {

    setAllUserParamsFromDb : (allUserParamsObj) => dispatch( setAllUserParamsFromDb(allUserParamsObj) ),
    setAmountOfCalories : (caloriesObj) => dispatch( setAmountOfCalories(caloriesObj) ),
    setAllDefaultRecipesArray : () => dispatch( setAllDefaultRecipesArray() ),
    setTodayRecipesArray : (allTodayRecipes) => dispatch( setTodayRecipesArray(allTodayRecipes) ),
    setFavoritesRecpies : (favoritesRecpiesArr) => dispatch( setFavoritesRecpies(favoritesRecpiesArr) )
  }
}

export default connect(null, mapDispatchToProps)(App);



function refreshAt(hours, minutes, seconds, navigate) {


  let now = new Date();
  let then = new Date();


      if(now.getUTCHours() > hours ||
        (now.getUTCHours() == hours && now.getUTCMinutes() > minutes) ||
        now.getUTCHours() == hours && now.getUTCMinutes() == minutes && now.getUTCSeconds() >= seconds) {
        then.setUTCDate(now.getUTCDate() + 1);
      }

      then.setUTCHours(hours);
      then.setUTCMinutes(minutes);
      then.setUTCSeconds(seconds);
      const timeout = (then.getTime() - now.getTime());
      setTimeout(function() { 
        
        window.location.reload(true);

        // Navigate outside the app cause it's the end of the day!!! 
        navigate(process.env.REACT_APP_BASE_SIGN_IN_FORM_PATH);
    
      }, timeout);
}




