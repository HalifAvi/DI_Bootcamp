import {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


const YOUR_API_KEY = 'd58baefbd9bf4263946475c94f999e9d';

let part1;
let part2;
let part3;
let partID = 1;

function Starter() {

  const [recepies, setRecepies] = useState([]);
  const [partID, setPartID] = useState(1);

  useEffect( ()=> {

    const data = [
      {id: 632426, title: 'Anticuchos Of White Seabass With Aji Chile Honey Marinade & Semilla Salsa', image: 'https://spoonacular.com/recipeImages/632426-312x231.jpg', imageType: 'jpg', calories: 133},
      {id: 632952, title: 'Asparagus Stir-Fry With Black Bean Sauce', image: 'https://spoonacular.com/recipeImages/632952-312x231.jpg', imageType: 'jpg', calories: 128},
      {id: 634010, title: 'Banana Bread with Chocolate Glaze', image: 'https://spoonacular.com/recipeImages/634010-312x231.jpg', imageType: 'jpg', calories: 211},
      {id: 634141, title: 'Banana Oatmeal Breakfast Muffins', image: 'https://spoonacular.com/recipeImages/634141-312x231.jpg', imageType: 'jpg', calories: 148},
      {id: 634802, title: 'Beetroot & Sweet Potato Tart', image: 'https://spoonacular.com/recipeImages/634802-312x231.jpg', imageType: 'jpg', calories: 282},
      {id: 634931, title: 'Best Soft Ginger Cookies', image: 'https://spoonacular.com/recipeImages/634931-312x231.jpg', imageType: 'jpg', calories: 75},
      {id: 638496, title: 'Chickpea and Pumpkin Curry', image: 'https://spoonacular.com/recipeImages/638496-312x231.jpg', imageType: 'jpg', calories: 272},
      {id: 643244, title: 'Four-Ingredient Blueberry Frozen Yogurt', image: 'https://spoonacular.com/recipeImages/643244-312x231.jpg', imageType: 'jpg', calories: 162},
      {id: 645092, title: 'Gougeres Appetizer', image: 'https://spoonacular.com/recipeImages/645092-312x231.jpg', imageType: 'jpg', calories: 51},
      {id: 649314, title: 'Lavash', image: 'https://spoonacular.com/recipeImages/649314-312x231.jpg', imageType: 'jpg', calories: 278},
      {id: 650499, title: 'Lychee Granita', image: 'https://spoonacular.com/recipeImages/650499-312x231.jpg', imageType: 'jpg', calories: 78},
      {id: 650632, title: 'Mahi-Mahi With Lemon Caper Sauce', image: 'https://spoonacular.com/recipeImages/650632-312x231.jpg', imageType: 'jpg', calories: 217},
      {id: 652345, title: 'Monogram Cookies', image: 'https://spoonacular.com/recipeImages/652345-312x231.jpg', imageType: 'jpg', calories: 90},
      {id: 652611, title: 'Mushroom (Bacon) Pull Apart Bread', image: 'https://spoonacular.com/recipeImages/652611-312x231.jpg', imageType: 'jpg', calories: 220},
      {id: 653270, title: 'Nori Seaweed Muffins', image: 'https://spoonacular.com/recipeImages/653270-312x231.jpg', imageType: 'jpg', calories: 250},
      {id: 657359, title: 'Pumpkin Pie Smoothie', image: 'https://spoonacular.com/recipeImages/657359-312x231.jpg', imageType: 'jpg', calories: 150},
      {id: 657889, title: 'Raspberry Peach Crisp', image: 'https://spoonacular.com/recipeImages/657889-312x231.jpg', imageType: 'jpg', calories: 164},
      {id: 658943, title: "S'mores Cupcakes", image: 'https://spoonacular.com/recipeImages/658943-312x231.jpg', imageType: 'jpg', calories: 248},
      {id: 660128, title: 'Simple Rendang', image: 'https://spoonacular.com/recipeImages/660128-312x231.jpg', imageType: 'jpg', calories: 79},
      {id: 660130, title: 'Simple Sage Pesto', image: 'https://spoonacular.com/recipeImages/660130-312x231.jpg', imageType: 'jpg', calories: 238},
      {id: 660261, title: 'Slow Cooked Applesauce', image: 'https://spoonacular.com/recipeImages/660261-312x231.jpg', imageType: 'jpg', calories: 62},
      {id: 665537, title: 'Yoghurt Honey Madeleines', image: 'https://spoonacular.com/recipeImages/665537-312x231.jpg', imageType: 'jpg', calories: 81},
      {id: 716195, title: 'Spicy Indian-Style Hummus', image: 'https://spoonacular.com/recipeImages/716195-312x231.jpg', imageType: 'jpg', calories: 134},
      {id: 1697683, title: 'Garlic Herb Compound Butter', image: 'https://spoonacular.com/recipeImages/1697683-312x231.jpg', imageType: 'jpg', calories: 2}
      ];

      // לבדוק את העצירה של הקרוסלה בלחיצה. יש מצב שאפשר לעשות את זה עם הוק מסוג יוזראףףףף שככה אאחסן את האלמנט של הקרוסלה ובלחיצה הוא יעצר
      // וזה יחסוך ממני שימוש בדוקומנט וריאקט דוםםם
      part1 = data.slice(0, 8);
      // part2 = data.slice(8, 15);
      // part3 = data.slice(16, 23);

    setRecepies(part1);

    // // MORE THAN 8 WITH THE CURRENT PIC SIZE WE CAN'T SEE IT
    // fetch(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${YOUR_API_KEY}&number=8&maxCalories=300`)
    // .then(res=>res.json()) 
    // .then(data=>{
      
    //     console.log(data)

    //     // const {calories, title, image, id} = data[0];

    //     // console.log(data)

    //     setRecepies(data)

    //     // fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${YOUR_API_KEY}&includeNutrition=true`)
    //     // .then(res=>res.json()) 
    //     // .then(data=>{
          
    //     //   console.log(data)


    //     // })
    //     // .catch(e=>console.log(e))
    //   })
    //   .catch(e=>console.log(e))
  }, [])


  const handleClick = (e) => {

    // stop the movment
    document.querySelector('div.box').style.animation = "animate1 60s linear infinite";
    
  }



  return (
    <>    
      <div className='box'>
        {
          recepies.map((recepie, idx) => {
        
            return <span key={idx} style={{"--i":`${idx+1}`}}>
                    <img onClick={(e)=>handleClick(e)} src={recepie.image}/>
                  </span>
          })
        }
      </div> 
    </>
  )
}

export default Starter;



