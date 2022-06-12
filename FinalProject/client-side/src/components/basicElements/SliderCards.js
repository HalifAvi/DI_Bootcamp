import { useEffect, useState } from 'react';
import '../BasicElementStyle/SliderCards.css';
import Image from "../BasicElements/Image";
import { decreaseCaloriesFromCurrent } from "../../Redux/Actions/caloriesActions.js";
import { connect } from 'react-redux';
import CaloriesScale from "../BasicElements/CaloriesScale";



const SliderCards = ({recipesToDisplay, decreaseCaloriesFromCurrent}) => { 
        

    const [swiperVariable, setSwiperVariable] = useState(true);
    // const [caloriesBar, setCaloriesBar] = useState(false);

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




    const addRecipeToPlate = (caloriesToDecreaseFromCurrent) => {

        decreaseCaloriesFromCurrent(caloriesToDecreaseFromCurrent);

        // setCaloriesBar(!caloriesBar);
    }

    return(
        <section className={"swiper-section"}>

            { swiperVariable ? setSwiperVariable(false) : null }

            <div className={"sliderCards-caloriesScale-div"}>
                {/* {!caloriesBar && <CaloriesScale/>} */}
            </div>   

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
        </section>
    )
}

const mapStateToProps = (state) => {

    return{

    }
}


const mapDispatchToProps = (dispatch) => {

    return{

        decreaseCaloriesFromCurrent : (caloriesAmount) => dispatch(decreaseCaloriesFromCurrent(caloriesAmount))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SliderCards);
