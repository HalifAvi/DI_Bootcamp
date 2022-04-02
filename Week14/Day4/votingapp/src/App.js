import React from 'react';
import './App.css';
import LanguageButton from './Components/LanguageButton';

class App extends React.Component{

  constructor(){

    super();

    this.state = {
      languages : [
          {name: "Php", votes: 0},
          {name: "Python", votes: 0},
          {name: "JavaSript", votes: 0},
          {name: "Java", votes: 0}
      ]
    }
  }

  render() {

    return(

      <>

        <h1 style={{textAlign : 'center'}}>Vote Your Language!</h1>

        {        
          (this.state.languages).map((item, idx) => {

            return <LanguageButton name={item.name} idx={idx}/>

          })
        }
      </>
    )
  }
}

export default App;
