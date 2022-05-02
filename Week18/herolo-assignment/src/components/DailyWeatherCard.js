import React from "react";
import { connect } from "react-redux";
import { WEEK_DAYS } from '../constants';
import '../App.css';


class DailyWeatherCard extends React.Component{

    render(){

        return(
            <div className="singleDayWeatherSection">
                <h1>{WEEK_DAYS[this.props.id]}</h1>
                <h3>{(this.props.all5DaysWeather[this.props.id]).Temperature.Maximum.Value + 'F'}</h3>
            </div>
        )
    }
}


const mapStateToProps = (state) => {

    return{

        all5DaysWeather : state.searchedLocationReducer.all5DaysWeather,
        singleDayIdx : state.searchedLocationReducer.singleDayIdx
    }
}


const mapDispatchToProps = (dispatch) => {

    return{

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(DailyWeatherCard);

