import "../BasicElementStyle/FiltersSection.css";
import Image from "./Image";
import { connect } from 'react-redux';
import { setToSpecialRecipesArray, setChoosenRecepiesArrayIdx } from '../../Redux/Actions/recipesActions.js';
import { useState } from "react";
import { useEffect } from "react";


const FilterSection = ({setToSpecialRecipesArray, setChoosenRecepiesArrayIdx}) => {

    const handleIconClick = (e)=> {

        setChoosenRecepiesArrayIdx(e.target.id);
        setToSpecialRecipesArray();
    }
   
    return(
        <section className={"filterSection-container"}>
            
            <Image id={0} classN={"filter-icon-img"} onClickEvent={handleIconClick} src={process.env.REACT_APP_BASE_FILTER_MEX_ICON_URL}/>
            <Image id={2} classN={"filter-icon-img"} onClickEvent={handleIconClick} src={process.env.REACT_APP_BASE_FILTER_ITA_ICON_URL}/>
            <Image id={1} classN={"filter-icon-img"} onClickEvent={handleIconClick} src={process.env.REACT_APP_BASE_FILTER_FRE_ICON_URL}/>
            <Image id={3} classN={"filter-icon-img"} onClickEvent={handleIconClick} src={process.env.REACT_APP_BASE_FILTER_CHI_ICON_URL}/>
            <Image id={4} classN={"filter-icon-img"} onClickEvent={handleIconClick} src={process.env.REACT_APP_BASE_FILTER_BRAKFAST_ICON_URL}/>
            <Image id={5} classN={"filter-icon-img"} onClickEvent={handleIconClick} src={process.env.REACT_APP_BASE_FILTER_SOUP_ICON_URL}/>
            <Image id={6} classN={"filter-icon-img"} onClickEvent={handleIconClick} src={process.env.REACT_APP_BASE_FILTER_SALAD_ICON_URL}/>
            <Image id={7} classN={"filter-icon-img"} onClickEvent={handleIconClick} src={process.env.REACT_APP_BASE_FILTER_DESSERT_ICON_URL}/>        
        </section>
    )
}


const mapDispatchToProps = (dispatch) => {

    return{

        setChoosenRecepiesArrayIdx : (iconId) => dispatch(setChoosenRecepiesArrayIdx(iconId)),
        setToSpecialRecipesArray : () => dispatch(setToSpecialRecipesArray())
    }
}


export default connect(null, mapDispatchToProps)(FilterSection);



