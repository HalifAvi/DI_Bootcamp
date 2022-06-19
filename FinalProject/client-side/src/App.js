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





function App() {

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

export default App;





