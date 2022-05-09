import './App.css';
import {useEffect, useState} from 'react';

const YOUR_API_KEY = 'd58baefbd9bf4263946475c94f999e9d';

function App() {

  const [recepies, setRecepies] = useState([]);

  useEffect( ()=> {

    // MORE THAN 8 WITH THE CURRENT PIC SIZE WE CAN'T SEE IT
    fetch(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${YOUR_API_KEY}&number=8&maxCalories=300`)
    .then(res=>res.json()) 
    .then(data=>{
      
        console.log(data)

        // const {calories, title, image, id} = data[0];

        // console.log(data)

        setRecepies(data)

        // fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${YOUR_API_KEY}&includeNutrition=true`)
        // .then(res=>res.json()) 
        // .then(data=>{
          
        //   console.log(data)


        // })
        // .catch(e=>console.log(e))
      })
      .catch(e=>console.log(e))
  }, [])



  return (

    <div className='box'>
      {
        recepies.map((recepie, idx) => {

          return <span key={idx} style={{"--i":`${idx+1}`}}><img src={recepie.image}/></span>

        })
      }
    </div>
  );
}

export default App;
