import React from "react";
import { connect } from "react-redux";
import { WEEK_DAYS } from '../constants';
import '../App.css';


class DailyWeatherCard extends React.Component{

    render(){

        const {all5DaysWeather, id, displayedUnits} = this.props;
        

        return(
            <div className="singleDayWeatherSection">
                <h1>{WEEK_DAYS[id]}</h1>
                <h3>{(displayedUnits === 'C' ) ? ((((all5DaysWeather[id]).Temperature.Maximum.Value - 32) / 1.8).toFixed(2) + ' C' )
                    :
                    ((all5DaysWeather[id]).Temperature.Maximum.Value + ' F')}</h3>
            </div>
        )
    }
}



const mapStateToProps = (state) => {

    return{

        all5DaysWeather : state.homeReducer.all5DaysWeather,
        singleDayIdx : state.homeReducer.singleDayIdx,
        displayedUnits : state.homeReducer.displayedUnits
    }
}





export default connect(mapStateToProps, null)(DailyWeatherCard);

