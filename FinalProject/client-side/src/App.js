import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import LoginSigninForm from './Components/Pages/LoginSigninForm';
import Content from './Components/Pages/Content';
import LoadingPage from './Components/Pages/LoadingPage';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import './App.css';


function App() {

  return (
    <div>
      
      <ToastContainer />

      <Routes>
        <Route path={process.env.REACT_APP_BASE_HOME_PATH} element={<Home />} />
        <Route path={process.env.REACT_APP_BASE_SIGN_IN_PATH} element={<LoginSigninForm pageToDisplay={process.env.REACT_APP_SIGN_IN_NAME} />} />
        <Route path={process.env.REACT_APP_BASE_LOG_IN_PATH} element={<LoginSigninForm pageToDisplay={process.env.REACT_APP_LOG_IN_NAME} />} />
        <Route path={process.env.REACT_APP_BASE_CONTENT_PATH} element={<Content />} />
        <Route path={process.env.REACT_APP_BASE_LOADING_PAGE_PATH} element={<LoadingPage />} />
      </Routes>
    </div>
  )
}

export default App;



