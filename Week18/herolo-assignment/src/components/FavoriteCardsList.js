import React from "react";
import { connect } from "react-redux";
import FavoriteCard from "./FavoriteCard";
import '../App.css';



class FavoriteCardsList extends React.Component{

    render(){

        return(
            <div>

                <div className="allFavoritesSection">
                {
                    (this.props.favoritesArray).map((favorite, idx) => {
                        
                        // PASS ID BY PROPS !!!
                        return ( <FavoriteCard id={idx} key={idx} /> )
                    })
                }
                </div>

            </div>
        )
    }
}


const mapStateToProps = (state) => {

    return{

        favoritesArray: state.favoritesReducer.favoritesArray
    }
}




export default connect(mapStateToProps, null)(FavoriteCardsList);

