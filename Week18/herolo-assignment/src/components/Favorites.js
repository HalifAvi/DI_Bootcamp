import React from "react";
import '../App.css'
import FavoriteCardsList from "./FavoriteCardsList";
import UnitsToggle from "./UnitsToggle";
import LightToggle from "./LightToggle";




class Favorites extends React.Component{

    render(){

        return(
            <div>
                <UnitsToggle id={"favPage"}/>
                <LightToggle />
                <FavoriteCardsList />
            </div>
        )
    }
}


export default Favorites;

