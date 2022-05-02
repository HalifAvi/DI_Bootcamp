import React from "react";
import { connect } from "react-redux";
import {setSearchedWeather} from '../actions/index';


class SearchedAreaWeather extends React.Component{

    render(){

        return(
            <div>
                {console.log(this.props.description)}
                {console.log(this.props.all5DaysWeather)}
            </div>
        )
    }
}


const mapStateToProps = (state) => {

    return{

        searchedLocationKey : state.searchedLocationReducer.key,
        description : state.searchedLocationReducer.description,
        all5DaysWeather : state.searchedLocationReducer.all5DaysWeather
    }
}


const mapDispatchToProps = (dispatch) => {

    return{

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(SearchedAreaWeather);

