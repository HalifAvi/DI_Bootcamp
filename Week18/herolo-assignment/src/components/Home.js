import React from "react";
import { connect } from "react-redux";
import SearchBox from "./SearchBox";
import CurrentAreaWeather from "./CurrentAreaWeather";
import SearchedAreaWeather from "./SearchedAreaWeather";
import {addToFavorites} from '../actions/index';
import '../App.css'

class Home extends React.Component{

    render(){

        const {addToFavorites} = this.props;

        return(
            <div>
                <CurrentAreaWeather />
                <SearchBox />
                <ion-icon name="heart-outline" onClick={addToFavorites}/>
                <SearchedAreaWeather />
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return{


    }
}


const mapDispatchToProps = (dispatch) => {

    return{

        addToFavorites : () => dispatch(addToFavorites())

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home);

