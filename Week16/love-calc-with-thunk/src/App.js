import React from 'react';
import Fname from './components/Fname';
import './App.css';

class App extends React.Component {
  // constructor(){
  //   super();
  //   // this.state = {
  //   //   fname:'',
  //   //   sname:'',
  //   //   results: {}
  //   // }
  // }

  // handleClick = () => {
  //   const {fname,sname} = this.state;
  //   fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`, {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-host": "love-calculator.p.rapidapi.com",
  //       "x-rapidapi-key": "8e714f6b88mshbb20deb3af21b66p17c12cjsnb08e0581e35c"
  //     }
  //   })
  //   .then(response => {
  //     return response.json();
  //   })
  //   .then(data => {
  //     this.setState({results:data})
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   });
  // }
  // handleChange = (e) => {
  //   this.setState({[e.target.name]:e.target.value})
  // }
  render(){
    return (
       <div className="App">
         <header className="App-header">
           <Fname />
         </header>
       </div>
     );
  }
}

export default App;
