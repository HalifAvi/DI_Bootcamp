import React from "react";
import { connect } from "react-redux";
import DailyWeatherCard from "./DailyWeatherCard";
import '../App.css';



class SearchedAreaWeather extends React.Component{

    render(){

        return(
            <div>

                <h1 style={{textAlign: "center"}}>{this.props.description}</h1>

                <div className="allWeekDaysSection">
                {
                    (this.props.all5DaysWeather).map((day, idx) => {
                        
                        // PASS ID BY PROPS !!!
                        return ( <DailyWeatherCard id={idx} key={idx} /> )
                    })
                }
                </div>

            </div>
        )
    }
}


const mapStateToProps = (state) => {

    return{

        description : state.homeReducer.description,
        all5DaysWeather : state.homeReducer.all5DaysWeather
    }
}




export default connect(mapStateToProps, null)(SearchedAreaWeather);

