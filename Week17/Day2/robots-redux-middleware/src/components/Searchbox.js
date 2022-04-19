import React from "react";
import {connect} from 'react-redux';
import {setSearchField} from '../actions/index';


class Searchbox extends React.Component{


    handleChange = (e) => {

        this.props.setSearchField(e.target.value);
    }


    render(){

        return(
            <div style={{textAlign : "center"}}>
                <input onChange={this.handleChange} type={"text"} placeholder={"Search here..."}/> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return{

        searchField : state.searchRobotsReducer.searchField,
        robotsArr : state.requestRobotsReducer.robotsArr
    }
}

const mapDispatchToProps = (dispatch) => {

    return{

        setSearchField : (inputValue) => dispatch(setSearchField(inputValue))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Searchbox); 