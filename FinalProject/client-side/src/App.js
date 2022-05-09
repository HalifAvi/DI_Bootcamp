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


  const handleClick = (e) => {

    // stop the movment
    document.querySelector('div.box').style.animation = "animate1 60s linear infinite";
    
    // להמשיך מנקודה שבה אני שומר את המערך שמקבל כדי לא לבצע עוד פאץ
    // ואז לשנות באנימאיישן1 את המאפס מאה אולי לבטל את האפס וככה הוא יעצר על הנקודה שבה לחצתי על הכרטיס
    // לנסות אופציה שבה אפשר להזיז את כל הקרוסלה הזאת ימינה או שמאלה בלחיצה על כפתור ושיהיו אופציות נוספות
  }



  return (

    <div className='box'>
      {
        recepies.map((recepie, idx) => {

          return <span key={idx} style={{"--i":`${idx+1}`}}>
                  <img onClick={(e)=>handleClick(e)} src={recepie.image}/>
                 </span>
        })
      }
    </div>
  );
}

export default App;
