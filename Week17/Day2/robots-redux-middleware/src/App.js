import './App.css';
import React from 'react';
import Display from './components/Display';
import Searchbox from './components/Searchbox';
import {connect} from 'react-redux';
import {fetchDataFromAPI} from './actions/index';
import Spinner from 'react-bootstrap/Spinner'

class App extends React.Component{

  render(){

    this.props.fetchDataFromAPI()

    const spinner = <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>;
    return (
     <div>
        <Searchbox />
        {(this.props.loading) ? <div style={{textAlign : "center", margin: "50px"}}>{spinner}</div> :  <Display />}
     </div>
    )
  }
}


const mapStateToProps = (state) => {

  return{ 

      loading : state.requestRobotsReducer.loading
  }
} 

const mapDispathToProps = (dispatch) => {

  return{

    fetchDataFromAPI : () => fetchDataFromAPI(dispatch)
  }
}


export default connect(mapStateToProps, mapDispathToProps)(App);
