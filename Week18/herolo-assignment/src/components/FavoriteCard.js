import React from "react";
import { connect } from "react-redux";
import '../App.css';


class FavoriteCard extends React.Component{

    render(){

        const {favoritesArray, displayedUnits, id} = this.props;

        return(
            <div className="singleFavoriteSection">
                <h3>{(favoritesArray[id]).cityName}</h3>
                <h5>{(displayedUnits === 'C' ) ? ((favoritesArray[id]).cWeather + ' C') : ((favoritesArray[id]).fWeather + ' F')}</h5>
                <h6>{(favoritesArray[id]).description}</h6>
            </div>
        )
    }
}



const mapStateToProps = (state) => {

    return{

        favoritesArray: state.favoritesReducer.favoritesArray,
        displayedUnits: state.favoritesReducer.displayedUnits
    }
}


const mapDispatchToProps = (state) => {

    return{

        
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCard);

