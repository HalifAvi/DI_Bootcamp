import './App.css';
import LoginRegisterForm from './components/LoginRegisterForm';
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

  return (

    <div className="App">
      <BrowserRouter>

        <Nav />

        <Routes>
          <Route path='/login' element= {<LoginRegisterForm title={'login'} />} />
          <Route path='/register' element= {<LoginRegisterForm title={'register'} />} />
          <Route path='/about' element= {<About />} />
          <Route path='/' element= {<Home />} />
          <Route path='/home' element= {<Home />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;