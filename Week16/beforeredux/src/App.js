import './App.css';
import React from 'react';
import Child from './components/Child';

import {connect} from 'react-redux'
import {changePropOne, clickOnAButton} from './redux/actions';
import { click } from '@testing-library/user-event/dist/click';


class App extends React.Component{

  constructor(){

    super();
  }


  handleChange = (e) => {

  }

  render(){

    return (
      <div style={{textAlign : "center"}}>
        <h5>{this.props.a}</h5> 
        <h5>{this.props.b} </h5> 
        <div>
          <input type="text" onChange={this.props.handleInput} />
          <button onClick={this.props.clickMe}>Click</button>
       </div>
        <Child />
      </div>
    )
  }

}

const mapStateToProps = (state) => {

  return {

    a : state.propOne,
    b : state.propTwo,
    c : state.propThree

  }
}

const mapDispathchToProps = (dispatch) => {

  return {

    handleInput : (e) => dispatch (changePropOne(e.target.value)),
    clickMe : () => dispatch (clickOnAButton())
  }
}

export default connect( mapStateToProps, mapDispathchToProps)(App);
