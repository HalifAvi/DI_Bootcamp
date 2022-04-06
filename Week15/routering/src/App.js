import './App.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
    </>
  );
}

export default App;
