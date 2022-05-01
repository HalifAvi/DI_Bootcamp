import React from "react";
import { connect } from "react-redux";
import {setCurrentLocation} from '../actions/index';
import {setCurrentWeather} from '../actions/index';


class CurrentAreaWeather extends React.Component{

    componentDidMount(){

        /////////// REMOVE THE COMMENTS - HERE JUST FOT TEST ! LIMIT TO 50 API REQUEST PER DAY
        // this.props.setCurrentLocation();
        // this.props.setCurrentWeather();
    }

    render(){

        return(
            <div className="currentPositionSection">
                <h1>{"YOUR CURRENT POSITION :"}</h1>
                <h2 className="yourCurrentPos">{this.props.currentLocation}</h2>
                <h4>{this.props.cWeather + "C"}</h4>
                <h4>{this.props.fWeather + "F"}</h4>
            </div>
        )
    }
}


const mapStateToProps = (state) => {

    return{

        currentLocation : state.selfLocationReducer.currentLocation,
        cWeather : state.selfLocationReducer.cWeather,
        fWeather : state.selfLocationReducer.fWeather
    }
}


const mapDispatchToProps = (dispatch) => {

    return{

        setCurrentLocation : () => dispatch(setCurrentLocation()),
        setCurrentWeather : () => dispatch(setCurrentWeather())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CurrentAreaWeather);

