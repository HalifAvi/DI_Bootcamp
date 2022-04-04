import logo from './logo.svg';
import './App.css';
import React from 'react';
import User from './components/User';
import axios from 'axios';


class App extends React.Component{

constructor(){

  super()
  this.state = {

    users : [] // Empty array in the begining - before fetching

  }

  // If it's not an arrow function
  // this.handleClick = this.handleClick.bind(this);
}




// onClick fetching the data from Api
// handleClick = () => {

  // With FETCH :
  // fetch("https://jsonplaceholder.typicode.com/users")
  // .then(res => res.json())
  // .then(data => {

  //   this.setState({ users : data})
  // })
  // .catch(err => console.log(err))

  // ####################################################################

  // With AXIOS in the REACT server ((add install + import first)) :
  // As a promise :
//   axios.get('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.data) // In axios we have the response in : res.data
//   .then(data => {

//       this.setState({ users : data})
//   })
    //  .catch(err => console.log(err))
// }


// AXIOS WITH ASYNC FUNCTION
async componentDidMount() {

  try{

    let answer = await axios.get('https://jsonplaceholder.typicode.com/users')
    this.setState({ users : answer.data}) // The data we need after using AXIOS is always into '.data'
  }
  catch (err){

    console.log(err);
  }
}


render(){

  const {users} = this.state;

  return(

    <div>

      <button onClick={this.handleClick}>Click Me!</button>

      {
        users.map((item, idx) => {

          return(

            <User user={item}  id={idx}/>
          )
        })
      }

    </div>
  )
}


}

export default App;
