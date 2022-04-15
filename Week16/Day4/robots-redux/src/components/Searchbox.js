import React from "react";
import {connect} from 'react-redux';
import {setFilteredRobots} from '../actions/index';


class Searchbox extends React.Component{


    handleChange = (e) => {

        const filteredRobotObjs = (this.props.robotsArr).filter(item => {

            return ((item.name).toLowerCase()).includes((e.target.value).toLowerCase())
      
        })

        this.props.setFilteredRobots(filteredRobotObjs);
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

        robotsArr : state.robotsArr    }
}

const mapDispatchToProps = (dispatch) => {

    return{

        setFilteredRobots : (filteredRobotObjs) => dispatch(setFilteredRobots(filteredRobotObjs))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Searchbox); 