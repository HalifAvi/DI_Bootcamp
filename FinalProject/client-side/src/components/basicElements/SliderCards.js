import { useEffect, useState } from 'react';
import '../BasicElementStyle/SliderCards.css';
import Image from "../BasicElements/Image";
import { decreaseCaloriesFromCurrent } from "../../Redux/Actions/caloriesActions.js";
import { connect } from 'react-redux';
import PopUpMessage from './PopUpMessage';


                                                    // paramToChange - an obj to change the state of pervious component
const SliderCards = ({recipesToDisplay, decreaseCaloriesFromCurrent, paramToChange}) => { 
        

    const [swiperVariable, setSwiperVariable] = useState(true);
    const [popUp, setPopUp] = useState(false);
    const [wantToAdd, setWantToAdd] = useState(false);
    const [clickedCalories, setClickedCalories] = useState(0);

    useEffect(()=> {

        // We put the Swiper CND script in index.js cause we'll come accross row 17 we'll need Swiper 
        var script = document.createElement("script");
        script.innerText = `var swiper = new Swiper('.swiper-container', {
                        pagination: '.swiper-pagination',
                        effect: 'coverflow',
                        grabCursor: true,
                        centeredSlides: true,
                        slidesPerView: 'auto',
                        coverflowEffect: {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2,
                        slideShadows : true
                        },
                        loop: true,
                    });`;
        script.async = true;

        document.body.appendChild(script);

        return () => {

            document.body.removeChild(script);
        }

    }, [swiperVariable])


    // In case the answer from the popUp is true : user wants to add
    useEffect(()=>{

        if(wantToAdd){

            setWantToAdd(false)

            decreaseCaloriesFromCurrent(clickedCalories);

            // After click on 'addTopPlate' we want to render the caloriesBar so we set the state
            // of the component that contains the caloriesBar and because the useEffect of caloriesBar
            // is not define with [] so eveytime we render it'll render again 
            const {paintAgainCaloriesBar, setPaintAgainCaloriesBar} = paramToChange;
    
            setPaintAgainCaloriesBar(!paintAgainCaloriesBar);
        }
    })


    const addRecipeToPlate = (calories) => {

        setClickedCalories(calories);
        setPopUp(true);
    }

    return(
        <section className={"swiper-section"}>

            { swiperVariable ? setSwiperVariable(false) : null }

            <div className={"swiper-container"}>
                <div className={"swiper-wrapper"}>
                    {
                        recipesToDisplay.map(recipeObj=>{

                            return (

                                <div key={recipeObj.id} className={"swiper-slide"}>
                                    {recipeObj.calories}
                                    <Image id={"recipe-img"} src={recipeObj.image}/>
                                    <Image onClickEvent={()=>addRecipeToPlate(recipeObj.calories)} id={"addToPlate-icon"} src={process.env.REACT_APP_BASE_ADD_TO_PLATE_ICON_URL}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>  

            {popUp && <PopUpMessage closePopUp={setPopUp} popUpAnswer={setWantToAdd} message={process.env.REACT_APP_MESSAGE_BEFORE_ADD_RECIPE}/>}
          
        </section>
    )
}


const mapDispatchToProps = (dispatch) => {

    return{

        decreaseCaloriesFromCurrent : (caloriesAmount) => dispatch(decreaseCaloriesFromCurrent(caloriesAmount))
    }
}

export default connect(null, mapDispatchToProps)(SliderCards);
