import './App.css';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import NavBar from './components/Navbar';
import Post from "./components/Post";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';


class App extends React.Component{
  render(){

    return(

      <BrowserRouter>

        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/:post_id' element={<Post/>} />
        </Routes>

      </BrowserRouter>
    )
  } 
}

   
  


export default App;


