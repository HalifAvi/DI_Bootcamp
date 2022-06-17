import { useEffect, useState } from 'react';
import '../BasicElementStyle/SliderCards.css';
import Image from "../BasicElements/Image";
import { changeCurrentCaloriesAmount } from "../../Redux/Actions/caloriesActions.js";
import { connect } from 'react-redux';
import PopUpMessage from './PopUpMessage';
import { insertNewAddedRecipe, setAllDefaultRecipesArray, setToSpecialRecipesArray, getMoreRecpieDetails, addRecipeToFavorites, removeRecpieFromFavorites } from "../../Redux/Actions/recipesActions.js";
import Title from './Title';


                                                    // paramToChange - an obj to change the state of pervious component
const SliderCards = ({changeCurrentCaloriesAmount, paramToChange, getMoreRecpieDetails, insertNewAddedRecipe, userId, todayRecipes, addRecipeToFavorites,
                      currentDisplayedRecepies, setToSpecialRecipesArray, allFavoriteRecpies, kindOfPage, removeRecpieFromFavorites}) => { 
        

    // const [swiperVariable, setSwiperVariable] = useState(true);
    const [popUp, setPopUp] = useState(false);
    const [wantToAdd, setWantToAdd] = useState(false);
    const [wantToRemove, setWantToRemove] = useState(false);
    const [clickedRecipeObj, setClickedRecipeObj] = useState(0);
    const [message, setMessage] = useState('');

    const arrayToDisplay = kindOfPage!=="fav"?currentDisplayedRecepies : allFavoriteRecpies;



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
                        loop: false,
                    });`;
        script.async = true;

        document.body.appendChild(script);

        return () => {

            document.body.removeChild(script);
        }

    }, [wantToAdd])  



    // In case the answer from the popUp is true : user wants to add
    useEffect(()=>{

        async function handleAddRecipe() {

                if(wantToAdd){

                    await getMoreRecpieDetails(clickedRecipeObj);
    
                    await insertNewAddedRecipe(clickedRecipeObj, userId);
        
                    // WAIT !!!!! here till you update the currentCalories cause we want to use it immediatly after to update the displyed recipes
                    const calories = clickedRecipeObj.calories == null ? 
                    
                        (clickedRecipeObj.nutrition.nutrients[0].amount).toFixed(0)

                        :

                        clickedRecipeObj.calories

                    await changeCurrentCaloriesAmount(calories, "-");
        
                    // After click on 'addTopPlate' we want to render the caloriesBar so we set the state
                    // of the component that contains the caloriesBar and because the useEffect of caloriesBar
                    // is not define with [] so eveytime we render it'll render again 
                    const {paintAgainCaloriesBar, setPaintAgainCaloriesBar} = paramToChange;
            
                    setPaintAgainCaloriesBar(!paintAgainCaloriesBar);
        
                    setWantToAdd(false);
        
                    await setToSpecialRecipesArray(); // Set the recipes array to the current calories limitation

                } else if(wantToRemove){


                    console.log(wantToRemove);

                    await removeRecpieFromFavorites(clickedRecipeObj);

                    // setWantToRemove(false);
                }
        }

        handleAddRecipe();

        if(!popUp) {

            setClickableIcons("painted");
        }

    }, [popUp])


    // useEffect(()=>{

    //     setSwiperVariable(true);

    //     console.log("'wantToAdd has been changed after we set the filtered recipes so go to renger and draw again the silder")

    // }, [wantToAdd])


    const addRecipeToPlate = (recipeObj, e) => {

        setClickableIcons("none");

        isAlreadyAdded(e.target.id) ? setMessage(process.env.REACT_APP_BASE_MESSAGE_BEFORE_ADD_EXIST_RECIPE) : setMessage(process.env.REACT_APP_BASE_MESSAGE_BEFORE_ADD_RECIPE);

        setClickedRecipeObj(recipeObj);
        
        setPopUp(true);
    }

    const isAlreadyAdded = (clickedRecipeId) => {

        return todayRecipes.some(recipe=> recipe.recipesn == Number(clickedRecipeId));

    }

    const handlePressOnLike = async (e, recipeObj) => {

        if(!(allFavoriteRecpies.some(item=> recipeObj.id === item.recipesn))) {

            e.target.style.color = "#e97e7e";

            await getMoreRecpieDetails(recipeObj);

            addRecipeToFavorites(recipeObj);

            console.log(allFavoriteRecpies)
            console.log(todayRecipes)

        }

        else{

            setMessage(process.env.REACT_APP_BASE_MESSAGE_ALREADY_EXIST_TO_FAVORITES);

            setPopUp(true);
        }
    }

    const handlePressOnRemoveLike = (recipeObj) => {

        setMessage(process.env.REACT_APP_BASE_MESSAGE_BEFORE_REMOVE_LIKE);

        setClickedRecipeObj(recipeObj);

        setPopUp(true);
    }
    

    return(
        
        <section className={"swiper-section pattern-dots-sm slategray h-5"}>

            {/* { swiperVariable ? setSwiperVariable(false) : null } */}

            <div className={"swiper-container"}>
                <div className={"swiper-wrapper"}>
                    {
                        arrayToDisplay.length !== 0 ?

                        (arrayToDisplay).map(recipeObj=>{

                            return ( 
                                <div key={recipeObj.id} className={"swiper-slide"}>
                                    { kindOfPage!=="fav"?
                                        <i onClick={(e)=>handlePressOnLike(e,recipeObj)} className={"fa fa-heart-o"} aria-hidden={"true"} id={"sliderCards-heart-btt"} style={{color:"white", fontSize:"40px", position:"fixed", bottom:"10px", left: "150px", zIndex: "5000"}}></i>
                                        :
                                        <Image onClickEvent={()=>handlePressOnRemoveLike(recipeObj)} classN={"remove-like-icon-img"} src={process.env.REACT_APP_BASE_REMOVE_FAV_ICON_URL}/>  
                                    }
                                    <Image id={"recipe-img"} src={recipeObj.image || recipeObj.recipeimage}/>
                                    <Title id={"sliderCards-recipe-title"} titleName={recipeObj.title || recipeObj.recipetitle}/>
                                    <Image id={recipeObj.id} classN={"calories-icon-img"} onClickEvent={kindOfPage!=="fav"?(e)=>addRecipeToPlate(recipeObj, e):null} src={process.env.REACT_APP_BASE_CALORIES_ICON_URL}/>
                                    <Title id={"sliderCards-recipe-calories"} titleName={recipeObj.calories || recipeObj.recipecalories || (recipeObj.nutrition.nutrients[0].amount).toFixed(0)}/>
                                    <Title id={"sliderCards-recipe-moreDetails"} onClickEvent={()=>getMoreRecpieDetails(recipeObj)} titleName={process.env.REACT_APP_BASE_TITLE_GP_TO_RECIPE}/>
                                </div>
                            )
                        }) 

                        :

                        <Title id={"sliderCards-noRecpies-message"} titleName={kindOfPage!=="fav"?process.env.REACT_APP_BASE_NO_RECPIES_MESSAGE:process.env.REACT_APP_BASE_NO_FAVS_MESSAGE} /> 
                    }
                </div>
            </div>  

            {(popUp) && <PopUpMessage closePopUp={setPopUp} popUpAnswer={setWantToAdd} popUpAnswerFav={setWantToRemove} kindOfPage={kindOfPage} message={message}/>}
          
        </section>
    )
}


const setClickableIcons = (status) => {

    const caloriesIcons = document.querySelectorAll('.calories-icon-img');

    [...caloriesIcons].forEach(element => {

        element.style.pointerEvents = status;
    });
} 


const mapStateToProps = (state) => {

    return{

        userId : state.signInUpReducer.userId,
        todayRecipes : state.recipesReducer.todayRecipes,
        currentDisplayedRecepies : state.recipesReducer.currentDisplayedRecepies,
        currentCaloriesAmount : state.caloriesReducer.currentCaloriesAmount,
        allFavoriteRecpies : state.recipesReducer.allFavoriteRecpies
    }
}


const mapDispatchToProps = (dispatch) => {

    return{

        changeCurrentCaloriesAmount : (clickedRecipeObj, operation) => dispatch(changeCurrentCaloriesAmount(clickedRecipeObj, operation)),
        insertNewAddedRecipe : (recipeObj, userId) => dispatch(insertNewAddedRecipe(recipeObj, userId)),
        setAllDefaultRecipesArray : () => dispatch(setAllDefaultRecipesArray()),
        setToSpecialRecipesArray : () => dispatch(setToSpecialRecipesArray()),
        getMoreRecpieDetails : (recipeObj) => dispatch(getMoreRecpieDetails(recipeObj)),
        addRecipeToFavorites : (recipeObj) => dispatch(addRecipeToFavorites(recipeObj)),
        removeRecpieFromFavorites : (recipeObj) => dispatch(removeRecpieFromFavorites(recipeObj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SliderCards);
