import React from "react";
import { connect } from "react-redux";
import SearchBox from "./SearchBox";
import CurrentAreaWeather from "./CurrentAreaWeather";
import SearchedAreaWeather from "./SearchedAreaWeather";
import '../App.css'

class Home extends React.Component{


    render(){

        return(
            <div>
                <CurrentAreaWeather />
                <SearchBox />
                <ion-icon name="heart-outline" ></ion-icon>
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


    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home);

