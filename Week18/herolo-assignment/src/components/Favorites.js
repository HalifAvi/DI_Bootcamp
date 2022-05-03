import React from "react";
import '../App.css'
import FavoriteCardsList from "./FavoriteCardsList";
import UnitsToggle from "./UnitsToggle";



class Favorites extends React.Component{

    render(){

        return(
            <div>
                <UnitsToggle id={"favPage"}/>
                <FavoriteCardsList />
            </div>
        )
    }
}


export default Favorites;

