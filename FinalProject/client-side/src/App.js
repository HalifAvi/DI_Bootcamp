import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import LoginSigninForm from './components/pages/LoginSigninForm';

import './App.css';


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<LoginSigninForm pageToDisplay={process.env.REACT_APP_SIGN_IN_NAME} />} />
        <Route path="/login" element={<LoginSigninForm pageToDisplay={process.env.REACT_APP_LOG_IN_NAME} />} />
      </Routes>
    </div>
  )
}

export default App;



