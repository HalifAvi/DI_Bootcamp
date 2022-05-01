import React from "react";
import { connect } from "react-redux";
import {setCurrentLocation} from '../actions/index';

class CurrentAreaWeather extends React.Component{

    componentDidMount(){

        this.props.setCurrentLocation();

    }

    render(){

        return(
            <div>
                <h1>{this.props.currentLocation}</h1>
                

            </div>
        )
    }
}


const mapStateToProps = (state) => {

    return{

        currentLocation : state.selfLocationReducer.currentLocation
    }
}


const mapDispatchToProps = (dispatch) => {

    return{

        setCurrentLocation : () => dispatch(setCurrentLocation())

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CurrentAreaWeather);

