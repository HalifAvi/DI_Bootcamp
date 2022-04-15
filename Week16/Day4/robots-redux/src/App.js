import './App.css';
import React from 'react';
import Display from './components/Display';
import Searchbox from './components/Searchbox';
import {connect} from 'react-redux';
import {setAllRobotsArr} from './actions/index';



class App extends React.Component{

  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=>{

      this.props.setAllRobotsArr(data);

    })
    .catch(e=>{
      console.log(e);
    })
  }


  render(){

    return (
     <div>
        <Searchbox />
        <Display />
     </div>
    )
  }
}


const mapStateToProps = (state) => {

  return{

    robotsArr : state.robotsArr,
    objsToDisplay : state.robotsArr

  }
}

const mapDispathToProps = (dispatch) => {

  return{

    setAllRobotsArr : (data) => dispatch(setAllRobotsArr(data))
  }
}


export default connect(mapStateToProps, mapDispathToProps)(App);
