import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import SigninSignupIntro from './Components/Pages/SigninSignupIntro';
import SigninSignupForm from './Components/Pages/SigninSignupForm';
import Content from './Components/Pages/Content';
import LoadingPage from './Components/Pages/LoadingPage';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




// import './App.css';
import SigninSignupCard from './Components/Pages/SigninSignupForm'; ///////////////
import UploadFile from '../src/Components/BasicElements/UploadFile';

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
        <Route path={process.env.REACT_APP_BASE_CONTENT_PATH} element={<Content />} />
        <Route path={process.env.REACT_APP_BASE_LOADING_PAGE_PATH + "/:nextPage/:time"} element={<LoadingPage />} />
      </Routes> 

    </div>
  )
}

export default App;




