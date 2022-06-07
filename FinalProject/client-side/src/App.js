import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import SigninSignupIntro from './Components/Pages/SigninSignupIntro';
import SigninSignupForm from './Components/Pages/SigninSignupForm';
import Main from './Components/Pages/Main';
import LoadingPage from './Components/Pages/LoadingPage';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




// import './App.css';
// import UploadFile from '../src/Components/BasicElements/UploadFile';

function App() {

  const navigate = useNavigate();

  useEffect(()=> {

    navigate(process.env.REACT_APP_BASE_LOADING_PAGE_PATH + 
      process.env.REACT_APP_BASE_HOME_PATH + "/" +
      process.env.REACT_APP_BASE_LOADING_HOME_TIME);
}, [])

  return (
    <div>
      
      <ToastContainer />

      <Routes>
        <Route path={process.env.REACT_APP_BASE_HOME_PATH} element={<Home />} />
        <Route path={process.env.REACT_APP_BASE_SIGN_UP_INTRO_PATH} element={<SigninSignupIntro pageToDisplay={process.env.REACT_APP_SIGN_UP_NAME} />} />
        <Route path={process.env.REACT_APP_BASE_SIGN_IN_INTRO_PATH} element={<SigninSignupIntro pageToDisplay={process.env.REACT_APP_SIGN_IN_NAME} />} />
        <Route path={process.env.REACT_APP_BASE_SIGN_UP_FORM_PATH} element={<SigninSignupForm formToDisplay={process.env.REACT_APP_SIGN_UP_NAME} />} />
        <Route path={process.env.REACT_APP_BASE_SIGN_IN_FORM_PATH} element={<SigninSignupForm formToDisplay={process.env.REACT_APP_SIGN_IN_NAME} />} />
        <Route path={process.env.REACT_APP_BASE_MAIN_PATH} element={<Main />} />
        <Route path={process.env.REACT_APP_BASE_LOADING_PAGE_PATH + "/:nextPage/:time"} element={<LoadingPage />} />
      </Routes> 

    </div>
  )
}

export default App;




