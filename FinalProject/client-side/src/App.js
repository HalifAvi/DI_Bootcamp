import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import LoginSigninForm from './Components/Pages/LoginSigninForm';
import Content from './Components/Pages/Content';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import './App.css';


function App() {

  return (
    <div>
      
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<LoginSigninForm pageToDisplay={process.env.REACT_APP_SIGN_IN_NAME} />} />
        <Route path="/logIn" element={<LoginSigninForm pageToDisplay={process.env.REACT_APP_LOG_IN_NAME} />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </div>
  )
}

export default App;



