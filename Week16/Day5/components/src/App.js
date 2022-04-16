import './App.css';
import React from 'react';
import Card from './components/Card';
import {postsObj} from './posts';


class App extends React.Component{

  constructor(){

    super();
  }

  render(){

    return (

     <div style={{ textAlign: "center", backgroundColor: "lightsalmon", width: "700px", height: "250px", padding: "20px", overflow: "scroll"}}>
        {
          postsObj.map((item, idx) => {

            return <Card key={idx} postDetails={item}/>

          })
        }
     </div>
    )
  }
}




export default App;
