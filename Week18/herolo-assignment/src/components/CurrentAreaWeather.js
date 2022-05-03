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
                <h4>{(this.props.displayedUnits === 'C' ) ? (this.props.cWeather + ' C') : (this.props.fWeather + ' F')}</h4>
            </div>
        )
    }
}


const mapStateToProps = (state) => {

    return{

        currentLocation : state.homeReducer.currentLocation,
        cWeather : state.homeReducer.cWeather,
        fWeather : state.homeReducer.fWeather,
        displayedUnits : state.homeReducer.displayedUnits
    }
}


const mapDispatchToProps = (dispatch) => {

    return{

        setCurrentLocation : () => dispatch(setCurrentLocation()),
        setCurrentWeather : () => dispatch(setCurrentWeather())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CurrentAreaWeather);

