import './App.css';
import LoginRegisterForm from './components/LoginRegisterForm';
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import {Auth} from "./auth/Auth";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  return (

    <div className="App">
        <Nav />
        <ToastContainer />
        <Routes>
          <Route path='/login' element= {<LoginRegisterForm title={'login'} />} />
          <Route path='/register' element= {<LoginRegisterForm title={'register'} />} />
          <Route path='/about' element= {<About />} />
          <Route path='/' element= {<Auth><Home /></Auth>} />
          <Route path='/home' element= {<Auth><Home /></Auth>} />
        </Routes>
    </div>
  );
}

export default App;