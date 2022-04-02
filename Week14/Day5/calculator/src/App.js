import logo from './logo.svg';
import './App.css';
import NumInput from './Components/NumInput';
import OperationSelect from './Components/OperationSelect';
import ApproveBtt from './Components/ApproveBtt';
import Result from './Components/Result';
import React from 'react';

class App extends React.Component{

  constructor(){

    super();

    this.state = {

      result : '',
      num1 : '',
      num2 : '',
      operation : '+'
    }
  }


  displayResult = () => {

    if(this.state.num1 !== '' && this.state.num2 !== ''){

      let answer;

      switch(this.state.operation){

        case '+': answer = Number(this.state.num1) + Number(this.state.num2);
          break;

        case '-': answer = Number(this.state.num1) - Number(this.state.num2);
          break;

        case '*': answer = Number(this.state.num1) * Number(this.state.num2);
          break;

        case '/': answer = Number(this.state.num1) / Number(this.state.num2);
          break;
      }

      this.setState({result  : answer });

    }else{

      alert("Make sure you insert 2 numbers before calculation!!!");

    }
  }


  setOperation = event => {

    this.state.operation = event.target.value;
  }


  setInputNum = event => {

    event.target.id === "1" ? this.state.num1 = event.target.value : this.state.num2 = event.target.value;
  }

  

  render(){

    return (
  
      <div style={{backgroundColor : 'lightcyan', height : '100vh', padding : '0px'}}>
        <h1 style={{fontSize: '100px', textAlign: 'center'}}>Calculator</h1><br></br>
        <NumInput id={"1"} setInputNumFun = {this.setInputNum}/>
        <NumInput id={"2"} setInputNumFun = {this.setInputNum}/>
        <OperationSelect setOperationFun = {this.setOperation} /> 
        <ApproveBtt displayResultFun = {this.displayResult} />
        <Result res = {this.state.result}/>
      </div>
    );
  }
}


export default App;
