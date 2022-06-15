import { useEffect, useState } from 'react';
import '../BasicElementStyle/SliderCards.css';
import Image from "../BasicElements/Image";
import { changeCurrentCaloriesAmount } from "../../Redux/Actions/caloriesActions.js";
import { connect } from 'react-redux';
import PopUpMessage from './PopUpMessage';
import { insertNewAddedRecipe, setAllDefaultRecipesArray } from "../../Redux/Actions/recipesActions.js";
import Title from './Title';


                                                    // paramToChange - an obj to change the state of pervious component
const SliderCards = ({changeCurrentCaloriesAmount, paramToChange, insertNewAddedRecipe, userId, todayRecipes, setAllDefaultRecipesArray, allDefaultRecipesArray}) => { 
        

    const [swiperVariable, setSwiperVariable] = useState(true);
    const [popUp, setPopUp] = useState(false);
    const [wantToAdd, setWantToAdd] = useState(false);
    const [clickedRecipeObj, setClickedRecipeObj] = useState(0);
    const [message, setMessage] = useState('');


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

    })



    // In case the answer from the popUp is true : user wants to add
    useEffect(()=>{

        async function handleAddRecipe() {

            if(wantToAdd){
    
                await insertNewAddedRecipe(clickedRecipeObj, userId);
    
                // WAIT !!!!! here till you update the currentCalories cause we want to use it immediatly after to update the displyed recipes
                await changeCurrentCaloriesAmount(clickedRecipeObj.calories, "-");
    
                // After click on 'addTopPlate' we want to render the caloriesBar so we set the state
                // of the component that contains the caloriesBar and because the useEffect of caloriesBar
                // is not define with [] so eveytime we render it'll render again 
                const {paintAgainCaloriesBar, setPaintAgainCaloriesBar} = paramToChange;
        
                setPaintAgainCaloriesBar(!paintAgainCaloriesBar);
    
                setWantToAdd(false);
    
                await setAllDefaultRecipesArray(); // Set the recipes array to the current calories limitation
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
    

    return(
        <section className={"swiper-section pattern-dots-sm slategray h-5"}>

            { swiperVariable ? setSwiperVariable(false) : null }

            <div className={"swiper-container pattern-zigzag-sm slategray h-5"}>
                <div className={"swiper-wrapper"}>
                    {
                        allDefaultRecipesArray.map(recipeObj=>{

                            return (
                                <div key={recipeObj.id} className={"swiper-slide"}>
                                    <Image id={"recipe-img"} src={recipeObj.image}/>
                                    <Title id={"sliderCards-recipe-title"} titleName={recipeObj.title}/>
                                    <Image id={recipeObj.id} classN={"calories-icon-img"} onClickEvent={(e)=>addRecipeToPlate(recipeObj, e)} src={process.env.REACT_APP_BASE_CALORIES_ICON_URL}/>
                                    <Title id={"sliderCards-recipe-calories"} titleName={recipeObj.calories}/>
                                    <Title id={"sliderCards-recipe-moreDetails"} titleName={process.env.REACT_APP_BASE_TITLE_GP_TO_RECIPE}/>
                                </div>
                            )
                        }) 
                    }
                </div>
            </div>  

            {popUp && <PopUpMessage closePopUp={setPopUp} popUpAnswer={setWantToAdd} message={message}/>}
          
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
        allDefaultRecipesArray : state.recipesReducer.allDefaultRecipesArray
    }
}


const mapDispatchToProps = (dispatch) => {

    return{

        changeCurrentCaloriesAmount : (clickedRecipeObj, operation) => dispatch(changeCurrentCaloriesAmount(clickedRecipeObj, operation)),
        insertNewAddedRecipe : (recipeObj, userId) => dispatch(insertNewAddedRecipe(recipeObj, userId)),
        setAllDefaultRecipesArray : () => dispatch(setAllDefaultRecipesArray())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SliderCards);
