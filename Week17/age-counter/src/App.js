import React from 'react';
import { connect } from 'react-redux';
import { increaseAge } from './actions';
import { decreaseAge } from './actions';
import './App.css';

class App extends React.Component {

  handleClick = (e) => {

    e.target.name === "up" ? this.props.increaseAge() : this.props.decreaseAge()
  
  }

  render() {

    return (
      <div style={{textAlign: "center"}}>
        <span>your age: {this.props.age}</span>
        <button name="up" onClick={(e)=> this.handleClick(e)}>Age Up</button>
        <button name="down" onClick={(e)=> this.handleClick(e)}>Age Down</button>
      </div>
    );
  }
}



const mapStateToProps = (state) => {

  return {

    age : state.age
  }
}


const mapDispatchToProps = (dispatch) => {

  return {

    decreaseAge : () => dispatch(decreaseAge()),
    increaseAge : () => dispatch(increaseAge())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
