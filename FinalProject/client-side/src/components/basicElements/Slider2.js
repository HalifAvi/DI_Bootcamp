import { useEffect, useState } from 'react';
import '../BasicElementStyle/Slider2.css';
import Image from "../BasicElements/Image";
import { changeCurrentCaloriesAmount } from "../../Redux/Actions/caloriesActions.js";
import { connect } from 'react-redux';
import PopUpMessage from './PopUpMessage';
import { insertNewAddedRecipe, setAllDefaultRecipesArray } from "../../Redux/Actions/recipesActions.js";


                                                    // paramToChange - an obj to change the state of pervious component
const Slider2 = ({changeCurrentCaloriesAmount, paramToChange, insertNewAddedRecipe, userId, todayRecipes, setAllDefaultRecipesArray, allDefaultRecipesArray}) => { 
        

    const [swiperVariable, setSwiperVariable] = useState(true);
    const [popUp, setPopUp] = useState(false);
    const [wantToAdd, setWantToAdd] = useState(false);
    const [clickedRecipeObj, setClickedRecipeObj] = useState(0);
    const [message, setMessage] = useState('');




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

    }, [popUp])


    useEffect(()=>{

        setSwiperVariable(true);

        console.log("'wantToAdd has been changed after we set the filtered recipes so go to renger and draw again the silder")

    }, [wantToAdd])


    const addRecipeToPlate = (recipeObj, e) => {

        isAlreadyAdded(e.target.id) ? setMessage(process.env.REACT_APP_MESSAGE_BEFORE_ADD_EXIST_RECIPE) : setMessage(process.env.REACT_APP_MESSAGE_BEFORE_ADD_RECIPE);

        setClickedRecipeObj(recipeObj);
        setPopUp(true);
    }

    const isAlreadyAdded = (clickedRecipeId) => {

        return todayRecipes.some(recipe=> recipe.recipesn == Number(clickedRecipeId));

    }
    

    return(
        <section className={"swiper-section"}>

                    {

                        allDefaultRecipesArray.map(recipeObj=>{

                            return (

                                <div key={recipeObj.id} className={"swiper-slide"}>
                                    {recipeObj.calories}
                                    {/* {console.log(recipeObj.calories)} */}
                                    <Image id={"recipe-img"} src={recipeObj.image}/>
                                    <Image onClickEvent={(e)=>addRecipeToPlate(recipeObj, e)} classN={"addToPlate-icon2"} src={process.env.REACT_APP_BASE_ADD_TO_PLATE_ICON_URL}/>
                                </div>
                            )
                        })

                    }            
                       
                
            {popUp && <PopUpMessage closePopUp={setPopUp} popUpAnswer={setWantToAdd} message={message}/>}
          
        </section>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Slider2);
