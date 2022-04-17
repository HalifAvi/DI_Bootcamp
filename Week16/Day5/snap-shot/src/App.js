import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Nav from './components/Nav';
import Mountain from './components/Mountain';
import Beach from './components/Beach';
import Bird from './components/Bird';
import Food from './components/Food';
import SearchBox from './components/SearchBox';
import Pagination from './components/Pagination';



class App extends React.Component{

  render(){

    return (

     <div style={{position: "relative"}}>

       <Pagination />

       <div style={{position: "absolute", left: "0vw", top: "20vh"}}>
        <h1 style={{fontFamily: "'Satisfy', cursive", fontSize: "80px", textAlign: "center"}}>Snap Shot</h1>

        <SearchBox />

        <Nav />

        <Routes>
          <Route path='/' element={<Mountain />} />
          <Route path='/mountain' element={<Mountain />} />
          <Route path='/beach' element={<Beach />} />
          <Route path='/bird' element={<Bird />} />
          <Route path='/food' element={<Food />} />
        </Routes> 
       </div>

     </div>
    )
  }
}





export default App;
