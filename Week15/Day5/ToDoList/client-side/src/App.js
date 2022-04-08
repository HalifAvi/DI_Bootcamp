import './App.css';
import React from 'react';
import List from './components/List';
import Form from './components/Form';


class App extends React.Component{

  constructor(){

    super();
    this.state = {


    }
  }

  render(){

    return (
      <>
        <h1></h1>
        <List/>
        <Form/>
      </>
    )
  }
}



export default App;
