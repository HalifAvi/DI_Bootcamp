import './App.css';
import React from 'react';
import Display from './components/Display';
import FirstName from './components/FirstName';
import SecondName from './components/SecondName';
import Btt from './components/Btt';



class App extends React.Component{

  constructor(){

    super();
    this.state = {

        firstName : '',
        secondName : '',
        percentage : '',
        result: ''
    }
}


  handleChange = (e) => {

    this.setState({[e.target.name] : e.target.value});

    // e.target.name === "firstName" ? this.setState({ firstName : e.target.value}) : this.setState({ secondName : e.target.value});
  }


  handleClick = () => {

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
        'X-RapidAPI-Key': '35c70882f2msh5bd980c60ba86cep10f251jsn5463b7d7b519'
      }
    };
    
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${this.state.secondName}&fname=${this.state.firstName}`, options)
      .then(response => response.json())
      .then(response => {
        
        this.setState({percentage : response.percentage, result: response.result})
    
      })
      .catch(err => console.error(err));
  }

  render(){

    return (
     <>
        <FirstName fun={this.handleChange}/>
        <SecondName fun={this.handleChange}/>
        <Btt fun={this.handleClick}/>
        {/* <Display {...this.state}/> */}
        <Display fname={this.state.firstName} lname={this.state.secondName} per={this.state.percentage} res={this.state.result}/>
     </>
    )
  }

}

export default App;
