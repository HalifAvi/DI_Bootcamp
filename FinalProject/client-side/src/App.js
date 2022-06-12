import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import SigninSignupIntro from './Components/Pages/SigninSignupIntro';
import SigninSignupForm from './Components/Pages/SigninSignupForm';
import Main from './Components/Pages/Main';
import LoadingPage from './Components/Pages/LoadingPage';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FavoritesRecepies from './Components/Pages/FavoritesRecepies';
import GeneralRecepies from './Components/Pages/GeneralRecepies';
import GraphPage from './Components/Pages/GraphPage';
import IngredientsToBuy from './Components/Pages/IngredientsToBuy';
import PreviousRecepies from './Components/Pages/PreviousRecepies';
import Settings from './Components/Pages/Settings';
import SpecificRecepies from './Components/Pages/SpecificRecepies';
import SliderCards from './Components/BasicElements/SliderCards';


// import './App.css';
// import UploadFile from '../src/Components/BasicElements/UploadFile';
// import CaloriesScale from './Components/BasicElements/CaloriesScale';




function App() {

  const navigate = useNavigate();

  useEffect(()=> {

    navigate(process.env.REACT_APP_BASE_LOADING_PAGE_PATH + 
      process.env.REACT_APP_BASE_HOME_PATH + "/" +
      process.env.REACT_APP_BASE_LOADING_HOME_TIME);
}, [])

  return (
    <div>
      <Routes>
        <Route path={process.env.REACT_APP_BASE_HOME_PATH} element={<Home />} />
        <Route path={process.env.REACT_APP_BASE_SIGN_UP_INTRO_PATH} element={<SigninSignupIntro pageToDisplay={process.env.REACT_APP_SIGN_UP_NAME} />} />
        <Route path={process.env.REACT_APP_BASE_SIGN_IN_INTRO_PATH} element={<SigninSignupIntro pageToDisplay={process.env.REACT_APP_SIGN_IN_NAME} />} />
        <Route path={process.env.REACT_APP_BASE_SIGN_UP_FORM_PATH} element={<SigninSignupForm formToDisplay={process.env.REACT_APP_SIGN_UP_NAME} />} />
        <Route path={process.env.REACT_APP_BASE_SIGN_IN_FORM_PATH} element={<SigninSignupForm formToDisplay={process.env.REACT_APP_SIGN_IN_NAME} />} />
        <Route path={process.env.REACT_APP_BASE_MAIN_PATH} element={<Main />} />
        <Route path={process.env.REACT_APP_BASE_LOADING_PAGE_PATH + "/:nextPage/:time"} element={<LoadingPage />} />
        <Route path={process.env.REACT_APP_BASE_FAV_RECEPIES_PATH} element={<FavoritesRecepies />} />
        <Route path={process.env.REACT_APP_BASE_GENERAL_RECEPIES_PATH} element={<GeneralRecepies />} />
        <Route path={process.env.REACT_APP_BASE_GRAPH_PATH} element={<GraphPage />} />
        <Route path={process.env.REACT_APP_BASE_INGREDIENTS_PATH} element={<IngredientsToBuy />} />
        <Route path={process.env.REACT_APP_BASE_PREV_RECEPIES_PATH} element={<PreviousRecepies />} />
        <Route path={process.env.REACT_APP_BASE_SETTINGS_PATH} element={<Settings />} />
        <Route path={process.env.REACT_APP_BASE_SPECIFIC_RECEPIES_PATH} element={<SpecificRecepies />} />
      </Routes> 
    </div>
  )
}

export default App;





