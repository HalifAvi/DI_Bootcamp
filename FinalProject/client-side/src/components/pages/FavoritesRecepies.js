import { connect } from 'react-redux';
import React, { useState } from "react";
import '../PagesStyle/FavoritesRecepies.css';
import NavBar from "../BasicElements/NavBar";
import CaloriesScale from "../BasicElements/CaloriesScale";
import AppLogo from '../BasicElements/AppLogo';
import SliderCards from '../BasicElements/SliderCards';
import Title from '../BasicElements/Title';



const FavoritesRecepies = ({allFavoriteRecpies}) => {

    let howManyFavorites = allFavoriteRecpies.length;
    let paint1 = false;

    return(
            <div className={"favoritesRecepies-div pattern-dots-sm slategray h-5"}>

                <div id={"main-logo-div"}>
                    <AppLogo id={"signinSignUpIntro-logo"} />
                </div> 

                <NavBar numOfPxOnNavBar={process.env.REACT_APP_BASE_PX_POS_ICON_1_NAVBAR+200} positionOnNavBar={2}/> 

                <Title id={"favoritesRecepies-page-title"} titleName={process.env.REACT_APP_BASE_TITLE_FAV_RECIPES}/>
            
                <SliderCards kindOfPage={"fav"}/> 

                {howManyFavorites !==0 && howManyFavorites !==1 ? <Title id={"favoritesRecepies-page-count-title"} titleName={`You Have ${howManyFavorites} Saved Recpies In Favorites`}/> : null}
                {howManyFavorites ===1 ? <Title id={"favoritesRecepies-page-count-title"} titleName={`You Have Just One Recpie In Favorites`}/> : null} 

                <div className={"favoritesRecepies-caloriesScale-div"}>
                    <CaloriesScale movementNumbers={false}/> 
                </div>    

            </div>
        )
    }

    const mapStateToProps = (state) => {

        return{

            allFavoriteRecpies : state.recipesReducer.allFavoriteRecpies
        }
    }



export default connect(mapStateToProps, null)(FavoritesRecepies);



