import './App.css';
import React from 'react';
import Display from './components/Display';
import FirstName from './components/FirstName';
import SecondName from './components/SecondName';
import Btt from './components/Btt';


class App extends React.Component{


  render(){

    return (
     <>
        <FirstName />
        <SecondName />
        <Btt />
        <Display />
     </>
    )
  }
}


export default App;
