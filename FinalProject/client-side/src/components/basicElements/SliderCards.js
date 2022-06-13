import { useEffect, useState } from 'react';
import '../BasicElementStyle/SliderCards.css';
import Image from "../BasicElements/Image";
import { changeCurrentCaloriesAmount } from "../../Redux/Actions/caloriesActions.js";
import { connect } from 'react-redux';
import PopUpMessage from './PopUpMessage';
import { insertNewAddedRecipe } from "../../Redux/Actions/recipesActions.js";


                                                    // paramToChange - an obj to change the state of pervious component
const SliderCards = ({recipesToDisplay, changeCurrentCaloriesAmount, paramToChange, insertNewAddedRecipe, userId, todayRecipes}) => { 
        

    const [swiperVariable, setSwiperVariable] = useState(true);
    const [popUp, setPopUp] = useState(false);
    const [wantToAdd, setWantToAdd] = useState(false);
    const [clickedRecipeObj, setClickedRecipeObj] = useState(0);

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

            setWantToAdd(false);

            insertNewAddedRecipe(clickedRecipeObj, userId);

            changeCurrentCaloriesAmount(clickedRecipeObj.calories, "-");

            // After click on 'addTopPlate' we want to render the caloriesBar so we set the state
            // of the component that contains the caloriesBar and because the useEffect of caloriesBar
            // is not define with [] so eveytime we render it'll render again 
            const {paintAgainCaloriesBar, setPaintAgainCaloriesBar} = paramToChange;
    
            setPaintAgainCaloriesBar(!paintAgainCaloriesBar);

            console.log(todayRecipes)
        }
    })


    const addRecipeToPlate = (recipeObj) => {

        setClickedRecipeObj(recipeObj);
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
                                    <Image onClickEvent={()=>addRecipeToPlate(recipeObj)} id={"addToPlate-icon"} src={process.env.REACT_APP_BASE_ADD_TO_PLATE_ICON_URL}/>
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

const mapStateToProps = (state) => {

    return{

        userId : state.signInUpReducer.userId,
        todayRecipes : state.recipesReducer.todayRecipes
    }
}


const mapDispatchToProps = (dispatch) => {

    return{

        changeCurrentCaloriesAmount : (clickedRecipeObj, operation) => dispatch(changeCurrentCaloriesAmount(clickedRecipeObj, operation)),
        insertNewAddedRecipe : (recipeObj, userId) => dispatch(insertNewAddedRecipe(recipeObj, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SliderCards);
