import './App.css';
import {useEffect, useState} from 'react';

const YOUR_API_KEY = 'd58baefbd9bf4263946475c94f999e9d';

function App() {

  const [recepies, setRecepies] = useState([]);

  useEffect( ()=> {

    fetch(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${YOUR_API_KEY}&number=1&maxCalories=300`)
    .then(res=>res.json()) 
    .then(data=>{
      
      console.log(data[0])

      const {calories, title, image, id} = data[0];

      // setRecepies(data)

      fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${YOUR_API_KEY}&includeNutrition=true`)
      .then(res=>res.json()) 
      .then(data=>{
        
        console.log(data)


      })
      .catch(e=>console.log(e))

  


      })
      .catch(e=>console.log(e))



  }, [])



  return (
    <div>

      
    </div>
  );
}

export default App;
