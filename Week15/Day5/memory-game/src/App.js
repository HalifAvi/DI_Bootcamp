import './App.css';
import React from 'react';
import CardsList from './Components/CardsList';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{ 

  constructor(){

    super();
    this.state = {


    }
  }

  render(){

    return (
      <div className="App">
        <CardsList />
      
      </div>
    );
  }
 
}

export default App;
